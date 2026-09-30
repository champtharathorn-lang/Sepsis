/**
 * Chart.js Visualization Module for Sepsis Dashboard
 * Renders executive KPIs and trend charts
 */

const SepsisCharts = {
  instances: {},

  initAll(records) {
    this.renderMonthlyTrend(records);
    this.renderBundleCompliance(records);
    this.renderInfectionSource(records);
    this.renderWardDistribution(records);
    this.renderOutcome(records);
  },

  updateAll(records) {
    this.destroyAll();
    this.initAll(records);
  },

  destroyAll() {
    Object.keys(this.instances).forEach(key => {
      if (this.instances[key]) {
        this.instances[key].destroy();
        delete this.instances[key];
      }
    });
  },

  renderMonthlyTrend(records) {
    const ctx = document.getElementById('monthlyTrendChart');
    if (!ctx) return;

    // Group records by Month-Year
    const monthMap = {};
    const monthsThai = ['ม.ค.', 'ก.พ.', 'มี.ค.', 'เม.ย.', 'พ.ค.', 'มิ.ย.', 'ก.ค.', 'ส.ค.', 'ก.ย.', 'ต.ค.', 'พ.ย.', 'ธ.ค.'];

    // Sort by date
    const sorted = [...records].sort((a, b) => new Date(a.diagnosisDateTime || a.admitDateTime || 0) - new Date(b.diagnosisDateTime || b.admitDateTime || 0));

    sorted.forEach(r => {
      const dt = new Date(r.diagnosisDateTime || r.admitDateTime || Date.now());
      if (isNaN(dt.getTime())) return;
      const key = `${monthsThai[dt.getMonth()]} ${dt.getFullYear() + 543}`;
      if (!monthMap[key]) {
        monthMap[key] = { total: 0, dead: 0, shock: 0 };
      }
      monthMap[key].total++;
      if (r.dischargeStatus === 'Dead' || r.dischargeStatus === 'เสียชีวิต') {
        monthMap[key].dead++;
      }
      if (r.isSepticShock || r.inotropicType) {
        monthMap[key].shock++;
      }
    });

    const labels = Object.keys(monthMap);
    const totalData = labels.map(k => monthMap[k].total);
    const shockData = labels.map(k => monthMap[k].shock);
    const mortalityRateData = labels.map(k => {
      const t = monthMap[k].total;
      return t > 0 ? Math.round((monthMap[k].dead / t) * 100) : 0;
    });

    this.instances.monthlyTrend = new Chart(ctx, {
      data: {
        labels: labels.length ? labels : ['ไม่มีข้อมูล'],
        datasets: [
          {
            type: 'bar',
            label: 'ผู้ป่วย Sepsis ทั้งหมด (ราย)',
            data: totalData.length ? totalData : [0],
            backgroundColor: 'rgba(13, 148, 136, 0.75)',
            borderColor: '#0d9488',
            borderWidth: 1,
            borderRadius: 6,
            yAxisID: 'y'
          },
          {
            type: 'bar',
            label: 'Septic Shock (ราย)',
            data: shockData.length ? shockData : [0],
            backgroundColor: 'rgba(239, 68, 68, 0.75)',
            borderColor: '#ef4444',
            borderWidth: 1,
            borderRadius: 6,
            yAxisID: 'y'
          },
          {
            type: 'line',
            label: 'อัตราตาย (% Mortality)',
            data: mortalityRateData.length ? mortalityRateData : [0],
            borderColor: '#dc2626',
            backgroundColor: '#dc2626',
            borderWidth: 3,
            borderDash: [4, 4],
            pointBackgroundColor: '#dc2626',
            pointRadius: 5,
            fill: false,
            tension: 0.2,
            yAxisID: 'y1'
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'top', labels: { font: { family: 'Sarabun', size: 12 } } },
          tooltip: {
            titleFont: { family: 'Sarabun' },
            bodyFont: { family: 'Sarabun' }
          }
        },
        scales: {
          y: {
            type: 'linear',
            display: true,
            position: 'left',
            title: { display: true, text: 'จำนวนเคส (ราย)', font: { family: 'Sarabun' } },
            ticks: { precision: 0 }
          },
          y1: {
            type: 'linear',
            display: true,
            position: 'right',
            title: { display: true, text: 'อัตราตาย (%)', font: { family: 'Sarabun' } },
            min: 0,
            max: 100,
            grid: { drawOnChartArea: false }
          },
          x: {
            ticks: { font: { family: 'Sarabun' } }
          }
        }
      }
    });
  },

  renderBundleCompliance(records) {
    const ctx = document.getElementById('bundleComplianceChart');
    if (!ctx) return;

    const total = records.length;
    if (total === 0) {
      this.instances.bundle = new Chart(ctx, {
        type: 'bar',
        data: { labels: ['ไม่มีข้อมูล'], datasets: [{ data: [0] }] },
        options: { responsive: true, maintainAspectRatio: false }
      });
      return;
    }

    let hcCount = 0;
    let hcBeforeAtbCount = 0;
    let atb1hrCount = 0;
    let ivFluidCount = 0;
    let lactateCount = 0;
    let map65Count = 0;
    let fullBundleCount = 0;

    records.forEach(r => {
      if (r.hcWithin1Hr || (r.hcTime1 && r.diagnosisDateTime)) hcCount++;
      if (r.hcBeforeAtb) hcBeforeAtbCount++;
      if (r.atbWithin1Hr || (r.timeToAtbMinutes !== undefined && r.timeToAtbMinutes <= 60)) atb1hrCount++;
      if (r.ivFluidGiven || (r.checklistItems && r.checklistItems.includes('ivFluid'))) ivFluidCount++;
      if (r.checklistItems && r.checklistItems.includes('lactate')) lactateCount++;
      if (r.checklistItems && r.checklistItems.includes('targetMap')) map65Count++;
      if (r.bundlePassed) fullBundleCount++;
    });

    const items = [
      { label: 'H/C เจาะครบ 2 ขวด', pct: Math.round((hcCount / total) * 100) },
      { label: 'เจาะ H/C ก่อนให้ ATB', pct: Math.round((hcBeforeAtbCount / total) * 100) },
      { label: 'ให้ IV ATB ภายใน 1 ชม.', pct: Math.round((atb1hrCount / total) * 100) },
      { label: 'ให้ IV Crystalloid ภายใน 1 ชม.', pct: Math.round((ivFluidCount / total) * 100) },
      { label: 'ส่งตรวจ Serum Lactate', pct: Math.round((lactateCount / total) * 100) },
      { label: 'Keep MAP >= 65 mmHg', pct: Math.round((map65Count / total) * 100) },
      { label: '🌟 ผ่าน 1-Hour Bundle ครบถ้วน', pct: Math.round((fullBundleCount / total) * 100), highlight: true }
    ];

    this.instances.bundle = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: items.map(i => i.label),
        datasets: [{
          label: 'ความครอบคลุม (% Compliance)',
          data: items.map(i => i.pct),
          backgroundColor: items.map(i => i.highlight ? '#0d9488' : '#38bdf8'),
          borderColor: items.map(i => i.highlight ? '#0f766e' : '#0284c7'),
          borderWidth: 1,
          borderRadius: 6
        }]
      },
      options: {
        indexAxis: 'y',
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: {
            callbacks: {
              label: context => ` ${context.raw}% (${Math.round((context.raw * total) / 100)} / ${total} ราย)`
            }
          }
        },
        scales: {
          x: {
            min: 0,
            max: 100,
            ticks: { callback: v => v + '%' }
          },
          y: {
            ticks: { font: { family: 'Sarabun', size: 12 } }
          }
        }
      }
    });
  },

  renderInfectionSource(records) {
    const ctx = document.getElementById('infectionSourceChart');
    if (!ctx) return;

    const sourceMap = {
      'Respiratory tract': 0,
      'Urinary tract': 0,
      'GI tract': 0,
      'Ocular': 0,
      'Skin and soft tissue': 0,
      'CNS': 0,
      'อื่นๆ': 0
    };

    records.forEach(r => {
      const src = r.sourceOfInfection;
      if (src && sourceMap.hasOwnProperty(src)) {
        sourceMap[src]++;
      } else if (src) {
        sourceMap['อื่นๆ']++;
      }
    });

    const labels = [
      'ทางเดินหายใจ (Respiratory)',
      'ทางเดินปัสสาวะ (Urinary)',
      'ทางเดินอาหาร (GI)',
      'ตาและจักษุ (Ocular)',
      'ผิวหนัง/เนื้อเยื่อ (Skin/Soft tissue)',
      'ระบบประสาท (CNS)',
      'อื่นๆ / ไม่ทราบแน่ชัด'
    ];

    const data = [
      sourceMap['Respiratory tract'],
      sourceMap['Urinary tract'],
      sourceMap['GI tract'],
      sourceMap['Ocular'],
      sourceMap['Skin and soft tissue'],
      sourceMap['CNS'],
      sourceMap['อื่นๆ']
    ];

    const colors = [
      '#0284c7', // Sky blue
      '#0d9488', // Teal
      '#f59e0b', // Amber
      '#8b5cf6', // Purple (Ocular Metta)
      '#ec4899', // Pink
      '#64748b', // Slate
      '#cbd5e1'  // Light gray
    ];

    this.instances.infectionSource = new Chart(ctx, {
      type: 'doughnut',
      data: {
        labels: labels,
        datasets: [{
          data: data,
          backgroundColor: colors,
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'right', labels: { font: { family: 'Sarabun', size: 11 }, boxWidth: 14 } }
        }
      }
    });
  },

  renderWardDistribution(records) {
    const ctx = document.getElementById('wardDistributionChart');
    if (!ctx) return;

    const wardMap = {};
    records.forEach(r => {
      const w = r.ward || 'ไม่ระบุ';
      wardMap[w] = (wardMap[w] || 0) + 1;
    });

    const labels = Object.keys(wardMap);
    const data = labels.map(k => wardMap[k]);

    this.instances.ward = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels.length ? labels : ['ไม่มีข้อมูล'],
        datasets: [{
          label: 'จำนวนเคส (ราย)',
          data: data.length ? data : [0],
          backgroundColor: '#3b82f6',
          borderRadius: 6
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { ticks: { precision: 0 } },
          x: { ticks: { font: { family: 'Sarabun', size: 11 } } }
        }
      }
    });
  },

  renderOutcome(records) {
    const ctx = document.getElementById('outcomeChart');
    if (!ctx) return;

    const outcomeMap = {
      'Complete recovery': 0,
      'Improve': 0,
      'ย้าย ICU': 0,
      'Refer': 0,
      'Dead': 0
    };

    records.forEach(r => {
      const status = r.dischargeStatus;
      if (status === 'Complete recovery' || status === 'หายเป็นปกติ') outcomeMap['Complete recovery']++;
      else if (status === 'Improve' || status === 'อาการดีขึ้น') outcomeMap['Improve']++;
      else if (status === 'ย้าย ICU' || status === 'Transfer ICU') outcomeMap['ย้าย ICU']++;
      else if (status === 'Refer' || status === 'ส่งต่อ รพ.อื่น') outcomeMap['Refer']++;
      else if (status === 'Dead' || status === 'เสียชีวิต') outcomeMap['Dead']++;
      else outcomeMap['Improve']++;
    });

    this.instances.outcome = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['หายดี (Complete recovery)', 'อาการดีขึ้น (Improve)', 'ย้าย ICU', 'Refer รพ.อื่น', 'เสียชีวิต (Dead)'],
        datasets: [{
          data: [
            outcomeMap['Complete recovery'],
            outcomeMap['Improve'],
            outcomeMap['ย้าย ICU'],
            outcomeMap['Refer'],
            outcomeMap['Dead']
          ],
          backgroundColor: [
            '#10b981', // green
            '#38bdf8', // light blue
            '#f59e0b', // amber
            '#a855f7', // purple
            '#ef4444'  // red
          ],
          borderWidth: 2,
          borderColor: '#ffffff'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: 'bottom', labels: { font: { family: 'Sarabun', size: 11 } } }
        }
      }
    });
  }
};

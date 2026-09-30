/**
 * Metta Sepsis Quality Management Application
 * Hospital: โรงพยาบาลเมตตาประชารักษ์ (วัดไร่ขิง)
 */

// Initial realistic dataset for Wat Rai Khing Hospital demonstration & initial inspection
const INITIAL_DEMO_RECORDS = [
  {
    id: "SEP-20240901-093012",
    hn: "65001248",
    an: "67000312",
    patientName: "นายสมชาย ใจดี",
    age: 68,
    gender: "ชาย",
    ward: "หอผู้ป่วยอายุรกรรมชาย",
    admitDateTime: "2024-09-01T08:30",
    diagnosisDateTime: "2024-09-01T09:15",
    sirsPass: true,
    sirsScore: 3,
    sirsItems: ["wbc", "bt", "hr"],
    qsofaPass: true,
    qsofaScore: 2,
    qsofaItems: ["rr", "sbp"],
    mewsScore: 6,
    mewsDetails: { rr: 1, spo2: 1, bt: 1, sbp: 1, hr: 2, avpu: 0 },
    sourceOfInfection: "Respiratory tract",
    sourceOfInfectionDetail: "Community-acquired pneumonia (CAP)",
    hcWithin1Hr: true,
    hcBeforeAtb: true,
    hcSite1: "Lt. median cubital",
    hcTime1: "09:35",
    hcSite2: "Rt. cephalic",
    hcTime2: "10:05",
    atbWithin1Hr: true,
    timeToAtbMinutes: 40,
    atb1Name: "Ceftriaxone",
    atb1Dose: "2 g IV OD",
    atb1Time: "09:55",
    atb2Name: "Azithromycin",
    atb2Dose: "500 mg IV OD",
    atb2Time: "10:10",
    ivFluidGiven: true,
    ivFluidType: "Acetar",
    ivFluidRate: "1000 ml ใน 1 ชม.",
    ivFluidTime: "09:30",
    isSepticShock: false,
    inotropicType: "",
    inotropicDose: "",
    inotropicTime: "",
    oxygenSupport: "Cannula 3 LPM",
    hasCentralLine: false,
    hasFoley: true,
    checklistScore: 7,
    checklistItems: ["hc", "culture", "lactate", "atb", "ivFluid", "foley", "targetMap"],
    checklistAllPassed: true,
    bundlePassed: true,
    dischargeDate: "2024-09-08",
    dischargeStatus: "Complete recovery",
    referHospital: "",
    recordedBy: "พว. กัลยา (RN)",
    notes: "ตอบสนองต่อ ATB ดี ไข้ลดลง ผล CXR ดีขึ้น"
  },
  {
    id: "SEP-20240905-141520",
    hn: "63008921",
    an: "67000455",
    patientName: "นางสมศรี รัตนมงคล",
    age: 74,
    gender: "หญิง",
    ward: "หอผู้ป่วยอายุรกรรมหญิง",
    admitDateTime: "2024-09-05T13:00",
    diagnosisDateTime: "2024-09-05T13:45",
    sirsPass: true,
    sirsScore: 3,
    sirsItems: ["wbc", "bt", "rr"],
    qsofaPass: true,
    qsofaScore: 2,
    qsofaItems: ["sbp", "gcs"],
    mewsScore: 7,
    mewsDetails: { rr: 1, spo2: 1, bt: 2, sbp: 2, hr: 1, avpu: 0 },
    sourceOfInfection: "Urinary tract",
    sourceOfInfectionDetail: "Urosepsis with acute pyelonephritis",
    hcWithin1Hr: true,
    hcBeforeAtb: true,
    hcSite1: "Rt. arm",
    hcTime1: "14:05",
    hcSite2: "Lt. arm",
    hcTime2: "14:35",
    atbWithin1Hr: true,
    timeToAtbMinutes: 45,
    atb1Name: "Meropenem",
    atb1Dose: "1 g IV q 8 hr",
    atb1Time: "14:30",
    atb2Name: "",
    atb2Dose: "",
    atb2Time: "",
    ivFluidGiven: true,
    ivFluidType: "NSS",
    ivFluidRate: "30 cc/kg load in 1 hr",
    ivFluidTime: "14:00",
    isSepticShock: true,
    inotropicType: "Levophed",
    inotropicDose: "0.1 mcg/kg/min titrate",
    inotropicTime: "14:50",
    oxygenSupport: "Mask with bag 10 LPM",
    hasCentralLine: true,
    hasFoley: true,
    checklistScore: 7,
    checklistItems: ["hc", "culture", "lactate", "atb", "ivFluid", "foley", "targetMap"],
    checklistAllPassed: true,
    bundlePassed: true,
    dischargeDate: "2024-09-14",
    dischargeStatus: "Improve",
    referHospital: "",
    recordedBy: "พว. ศิริพร (RN)",
    notes: "Wean Levophed ได้วันที่ 3 อาการคงที่ ย้ายกลับวอร์ดสามัญ"
  },
  {
    id: "SEP-20240910-184010",
    hn: "66014299",
    an: "67000620",
    patientName: "นายบุญส่ง สุขเกษม",
    age: 82,
    gender: "ชาย",
    ward: "ICU",
    admitDateTime: "2024-09-10T17:30",
    diagnosisDateTime: "2024-09-10T18:00",
    sirsPass: true,
    sirsScore: 4,
    sirsItems: ["wbc", "bt", "hr", "rr"],
    qsofaPass: true,
    qsofaScore: 3,
    qsofaItems: ["rr", "sbp", "gcs"],
    mewsScore: 9,
    mewsDetails: { rr: 2, spo2: 2, bt: 2, sbp: 3, hr: 2, avpu: 1 },
    sourceOfInfection: "GI tract",
    sourceOfInfectionDetail: "Intra-abdominal sepsis / Peritonitis",
    hcWithin1Hr: true,
    hcBeforeAtb: true,
    hcSite1: "Lt. arm",
    hcTime1: "18:20",
    hcSite2: "Rt. arm",
    hcTime2: "18:50",
    atbWithin1Hr: true,
    timeToAtbMinutes: 50,
    atb1Name: "Piperacillin/Tazobactam",
    atb1Dose: "4.5 g IV q 6 hr",
    atb1Time: "18:50",
    atb2Name: "Metronidazole",
    atb2Dose: "500 mg IV q 8 hr",
    atb2Time: "19:15",
    ivFluidGiven: true,
    ivFluidType: "RLS",
    ivFluidRate: "1500 ml load",
    ivFluidTime: "18:10",
    isSepticShock: true,
    inotropicType: "Levophed",
    inotropicDose: "0.2 mcg/kg/min",
    inotropicTime: "18:45",
    oxygenSupport: "ETT with On Respirator",
    hasCentralLine: true,
    hasFoley: true,
    checklistScore: 6,
    checklistItems: ["hc", "culture", "lactate", "atb", "ivFluid", "foley"],
    checklistAllPassed: false,
    bundlePassed: false,
    dischargeDate: "2024-09-13",
    dischargeStatus: "Dead",
    referHospital: "",
    recordedBy: "นพ. กิตติศักดิ์",
    notes: "Septic shock with Multi-organ failure ญาติขอไม่ CPR"
  },
  {
    id: "SEP-20240915-110033",
    hn: "62005411",
    an: "67000840",
    patientName: "นางปราณี แซ่ตั้ง",
    age: 61,
    gender: "หญิง",
    ward: "หอผู้ป่วยจักษุ 1",
    admitDateTime: "2024-09-14T10:00",
    diagnosisDateTime: "2024-09-15T10:30",
    sirsPass: true,
    sirsScore: 2,
    sirsItems: ["wbc", "bt"],
    qsofaPass: false,
    qsofaScore: 1,
    qsofaItems: ["rr"],
    mewsScore: 4,
    mewsDetails: { rr: 1, spo2: 0, bt: 1, sbp: 0, hr: 1, avpu: 0 },
    sourceOfInfection: "Ocular",
    sourceOfInfectionDetail: "Endophthalmitis with severe orbital cellulitis",
    hcWithin1Hr: true,
    hcBeforeAtb: true,
    hcSite1: "Lt. antecubital",
    hcTime1: "10:45",
    hcSite2: "Rt. antecubital",
    hcTime2: "11:15",
    atbWithin1Hr: true,
    timeToAtbMinutes: 35,
    atb1Name: "Vancomycin + Ceftazidime",
    atb1Dose: "1 g IV q 12 hr",
    atb1Time: "11:05",
    atb2Name: "",
    atb2Dose: "",
    atb2Time: "",
    ivFluidGiven: true,
    ivFluidType: "NSS",
    ivFluidRate: "100 ml/hr",
    ivFluidTime: "10:40",
    isSepticShock: false,
    inotropicType: "",
    inotropicDose: "",
    inotropicTime: "",
    oxygenSupport: "Room air",
    hasCentralLine: false,
    hasFoley: false,
    checklistScore: 7,
    checklistItems: ["hc", "culture", "lactate", "atb", "ivFluid", "foley", "targetMap"],
    checklistAllPassed: true,
    bundlePassed: true,
    dischargeDate: "2024-09-22",
    dischargeStatus: "Improve",
    referHospital: "",
    recordedBy: "พว. นงลักษณ์ (RN)",
    notes: "ได้ Intravitreal ATB ร่วมด้วย การติดเชื้อควบคุมได้ดี"
  },
  {
    id: "SEP-20240920-163012",
    hn: "64019230",
    an: "67000990",
    patientName: "นายวิชัย อภิวัฒนา",
    age: 55,
    gender: "ชาย",
    ward: "หอผู้ป่วยศัลยกรรม",
    admitDateTime: "2024-09-20T15:00",
    diagnosisDateTime: "2024-09-20T15:45",
    sirsPass: true,
    sirsScore: 3,
    sirsItems: ["wbc", "hr", "rr"],
    qsofaPass: true,
    qsofaScore: 2,
    qsofaItems: ["rr", "sbp"],
    mewsScore: 5,
    mewsDetails: { rr: 1, spo2: 1, bt: 0, sbp: 1, hr: 2, avpu: 0 },
    sourceOfInfection: "Skin and soft tissue",
    sourceOfInfectionDetail: "Necrotizing fasciitis ขาขวา",
    hcWithin1Hr: true,
    hcBeforeAtb: true,
    hcSite1: "Lt. arm",
    hcTime1: "16:00",
    hcSite2: "Rt. arm",
    hcTime2: "16:30",
    atbWithin1Hr: true,
    timeToAtbMinutes: 45,
    atb1Name: "Meropenem + Clindamycin",
    atb1Dose: "1 g IV q 8 hr + 600 mg IV q 8 hr",
    atb1Time: "16:30",
    atb2Name: "",
    atb2Dose: "",
    atb2Time: "",
    ivFluidGiven: true,
    ivFluidType: "Acetar",
    ivFluidRate: "1000 ml stat",
    ivFluidTime: "16:00",
    isSepticShock: true,
    inotropicType: "Levophed",
    inotropicDose: "0.15 mcg/kg/min",
    inotropicTime: "16:40",
    oxygenSupport: "Cannula 4 LPM",
    hasCentralLine: true,
    hasFoley: true,
    checklistScore: 7,
    checklistItems: ["hc", "culture", "lactate", "atb", "ivFluid", "foley", "targetMap"],
    checklistAllPassed: true,
    bundlePassed: true,
    dischargeDate: "2024-09-28",
    dischargeStatus: "Improve",
    referHospital: "",
    recordedBy: "พว. อรทัย (RN)",
    notes: "ผ่าตัด Fasciotomy & Debridement สำเร็จ อาการดีขึ้นตามลำดับ"
  },
  {
    id: "SEP-20240924-082015",
    hn: "65022190",
    an: "67001050",
    patientName: "นางมาลี บำรุงจิต",
    age: 79,
    gender: "หญิง",
    ward: "หอผู้ป่วยอายุรกรรมหญิง",
    admitDateTime: "2024-09-24T07:10",
    diagnosisDateTime: "2024-09-24T07:45",
    sirsPass: true,
    sirsScore: 3,
    sirsItems: ["bt", "hr", "rr"],
    qsofaPass: true,
    qsofaScore: 2,
    qsofaItems: ["rr", "gcs"],
    mewsScore: 6,
    mewsDetails: { rr: 1, spo2: 1, bt: 1, sbp: 1, hr: 2, avpu: 0 },
    sourceOfInfection: "Respiratory tract",
    sourceOfInfectionDetail: "Aspiration pneumonia in bedridden patient",
    hcWithin1Hr: true,
    hcBeforeAtb: false,
    hcSite1: "Lt. arm",
    hcTime1: "08:50",
    hcSite2: "Rt. arm",
    hcTime2: "09:20",
    atbWithin1Hr: true,
    timeToAtbMinutes: 40,
    atb1Name: "Ceftriaxone",
    atb1Dose: "2 g IV OD",
    atb1Time: "08:25",
    atb2Name: "",
    atb2Dose: "",
    atb2Time: "",
    ivFluidGiven: true,
    ivFluidType: "NSS",
    ivFluidRate: "80 ml/hr",
    ivFluidTime: "08:00",
    isSepticShock: false,
    inotropicType: "",
    inotropicDose: "",
    inotropicTime: "",
    oxygenSupport: "High Flow Nasal Cannula (HFNC)",
    hasCentralLine: false,
    hasFoley: true,
    checklistScore: 6,
    checklistItems: ["hc", "culture", "lactate", "atb", "ivFluid", "foley"],
    checklistAllPassed: false,
    bundlePassed: false,
    dischargeDate: "2024-09-30",
    dischargeStatus: "Improve",
    referHospital: "",
    recordedBy: "พว. ศิริพร (RN)",
    notes: "มีปัญหาเจาะเลือดยาก ทำให้เจาะ HC หลังเริ่มให้ ATB"
  }
];

const LOCAL_STORAGE_KEY = 'metta_sepsis_records';

const SepsisApp = {
  records: [],
  activeTab: 'dashboard',
  currentViewingRecord: null,

  // MEWS state
  mewsState: {
    rr: 0,
    spo2: 0,
    bt: 0,
    sbp: 0,
    hr: 0,
    avpu: 0
  },

  init() {
    this.loadRecords();
    this.initMewsButtons();
    this.bindEvents();
    this.checkConfigNotice();
    this.renderDashboard();
    this.renderPatientRegistry();
  },

  loadRecords() {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      this.records = JSON.parse(JSON.stringify(INITIAL_DEMO_RECORDS));
      this.saveRecordsToStorage();
    } else {
      try {
        this.records = JSON.parse(raw);
      } catch (e) {
        console.error('Failed to parse local records:', e);
        this.records = JSON.parse(JSON.stringify(INITIAL_DEMO_RECORDS));
      }
    }
  },

  saveRecordsToStorage() {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(this.records));
  },

  checkConfigNotice() {
    const isConfigured = GoogleSheetSync.isConfigured();
    const alertBox = document.getElementById('sheetSyncNotice');
    const inputUrl = document.getElementById('gasUrlInput');
    if (inputUrl) {
      inputUrl.value = GoogleSheetSync.getScriptUrl();
    }

    if (alertBox) {
      if (isConfigured) {
        alertBox.innerHTML = `
          <div class="flex items-center gap-2 text-teal-800 text-sm">
            <span class="inline-block w-2.5 h-2.5 rounded-full bg-teal-500 animate-pulse"></span>
            <span>เชื่อมต่อกับ Google Sheet แล้ว (ส่งข้อมูลอัตโนมัติ)</span>
          </div>
        `;
        alertBox.className = "p-3 rounded-lg bg-teal-50 border border-teal-200";
      } else {
        alertBox.innerHTML = `
          <div class="flex items-center justify-between text-amber-800 text-sm">
            <div class="flex items-center gap-2">
              <span class="text-amber-500">⚠️</span>
              <span>ระบบกำลังบันทึกข้อมูลในบราวเซอร์ (Offline LocalStorage) เพื่อส่งเข้า Google Sheet กรุณาใส่ Web App URL ในแท็บ <strong>"ตั้งค่า / Settings"</strong></span>
            </div>
            <button onclick="SepsisApp.switchTab('settings')" class="text-xs bg-amber-600 text-white px-2.5 py-1 rounded hover:bg-amber-700">ไปตั้งค่า</button>
          </div>
        `;
        alertBox.className = "p-3 rounded-lg bg-amber-50 border border-amber-200";
      }
    }
  },

  switchTab(tabName) {
    this.activeTab = tabName;
    ['formTab', 'dashboardTab', 'registryTab', 'settingsTab'].forEach(t => {
      const el = document.getElementById(t);
      if (el) el.classList.add('hidden');
    });

    ['navForm', 'navDashboard', 'navRegistry', 'navSettings'].forEach(n => {
      const btn = document.getElementById(n);
      if (btn) {
        btn.classList.remove('bg-teal-700', 'text-white', 'shadow-sm');
        btn.classList.add('text-teal-100', 'hover:bg-teal-600');
      }
    });

    const targetEl = document.getElementById(`${tabName}Tab`);
    if (targetEl) targetEl.classList.remove('hidden');

    const activeNav = document.getElementById(`nav${tabName.charAt(0).toUpperCase() + tabName.slice(1)}`);
    if (activeNav) {
      activeNav.classList.remove('text-teal-100', 'hover:bg-teal-600');
      activeNav.classList.add('bg-teal-700', 'text-white', 'shadow-sm');
    }

    if (tabName === 'dashboard') {
      this.renderDashboard();
    } else if (tabName === 'registry') {
      this.renderPatientRegistry();
    }
  },

  initMewsButtons() {
    document.querySelectorAll('.mews-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const param = btn.dataset.param;
        const score = parseInt(btn.dataset.score, 10);
        
        // Remove active classes in this parameter group
        document.querySelectorAll(`.mews-btn[data-param="${param}"]`).forEach(b => {
          b.classList.remove('active-0', 'active-1', 'active-2', 'active-3');
          b.classList.add('bg-slate-50', 'text-slate-700');
        });

        // Set active class
        btn.classList.remove('bg-slate-50', 'text-slate-700');
        btn.classList.add(`active-${score}`);

        this.mewsState[param] = score;
        this.updateMewsDisplay();
      });
    });
  },

  updateMewsDisplay() {
    const total = Object.values(this.mewsState).reduce((a, b) => a + b, 0);
    const scoreDisplay = document.getElementById('mewsTotalScore');
    const badge = document.getElementById('mewsScoreBadge');
    const inputHidden = document.getElementById('mewsScoreInput');

    if (scoreDisplay) scoreDisplay.textContent = total;
    if (inputHidden) inputHidden.value = total;

    if (badge) {
      if (total >= 5) {
        badge.className = "badge bg-red-100 text-red-700 border border-red-300";
        badge.textContent = "🔴 เสี่ยงสูงมาก (>=5) แจ้งแพทย์ทันที / Sepsis Alert";
      } else if (total === 4) {
        badge.className = "badge bg-amber-100 text-amber-700 border border-amber-300";
        badge.textContent = "🟡 เฝ้าระวังเข้มงวด (MEWS = 4) เข้าเกณฑ์ Sepsis";
      } else {
        badge.className = "badge bg-emerald-100 text-emerald-700 border border-emerald-300";
        badge.textContent = "🟢 คะแนนต่ำ (<4)";
      }
    }
  },

  calculateSirsLive() {
    let count = 0;
    ['sirs_wbc', 'sirs_bt', 'sirs_hr', 'sirs_rr'].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.checked) count++;
    });

    const badge = document.getElementById('sirsLiveBadge');
    if (badge) {
      if (count >= 2) {
        badge.className = "badge bg-red-100 text-red-700 font-bold border border-red-300";
        badge.textContent = `⚠️ เข้าเกณฑ์ SIRS (${count}/4 ข้อ)`;
      } else {
        badge.className = "badge bg-slate-100 text-slate-600";
        badge.textContent = `ไม่เข้าเกณฑ์ (${count}/4 ข้อ)`;
      }
    }
  },

  calculateQsofaLive() {
    let count = 0;
    ['qsofa_rr', 'qsofa_sbp', 'qsofa_gcs'].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.checked) count++;
    });

    const badge = document.getElementById('qsofaLiveBadge');
    if (badge) {
      if (count >= 2) {
        badge.className = "badge bg-red-100 text-red-700 font-bold border border-red-300";
        badge.textContent = `⚠️ เข้าเกณฑ์ qSOFA (${count}/3 ข้อ)`;
      } else {
        badge.className = "badge bg-slate-100 text-slate-600";
        badge.textContent = `ไม่เข้าเกณฑ์ (${count}/3 ข้อ)`;
      }
    }
  },

  calculateTimeDiffLive() {
    const diagDateTimeStr = document.getElementById('diagnosisDateTime')?.value;
    const atbTimeStr = document.getElementById('atb1Time')?.value;
    const diffBadge = document.getElementById('atbTimingLiveBadge');

    if (!diagDateTimeStr || !atbTimeStr || !diffBadge) return;

    try {
      const diagDate = new Date(diagDateTimeStr);
      if (isNaN(diagDate.getTime())) return;

      const [hours, mins] = atbTimeStr.split(':').map(Number);
      const atbDate = new Date(diagDate);
      atbDate.setHours(hours, mins, 0, 0);

      // If ATB time is earlier in the day than diag time, assume next day if diff is negative
      let diffMs = atbDate - diagDate;
      if (diffMs < -12 * 60 * 60 * 1000) {
        // rollover to next day
        diffMs += 24 * 60 * 60 * 1000;
      }

      const diffMins = Math.round(diffMs / 60000);
      if (diffMins >= 0) {
        if (diffMins <= 60) {
          diffBadge.className = "badge bg-emerald-100 text-emerald-800 border border-emerald-300";
          diffBadge.textContent = `✅ ได้รับใน ${diffMins} นาที (ผ่านเกณฑ์ 1 ชั่วโมง)`;
        } else {
          diffBadge.className = "badge bg-red-100 text-red-800 border border-red-300 font-bold";
          diffBadge.textContent = `⚠️ ล่าช้า: ${diffMins} นาที (เกิน 1 ชั่วโมง!)`;
        }
      } else {
        diffBadge.textContent = '';
      }
    } catch (e) {
      // ignore parsing error
    }
  },

  bindEvents() {
    // SIRS checkboxes
    ['sirs_wbc', 'sirs_bt', 'sirs_hr', 'sirs_rr'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => this.calculateSirsLive());
    });

    // qSOFA checkboxes
    ['qsofa_rr', 'qsofa_sbp', 'qsofa_gcs'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => this.calculateQsofaLive());
    });

    // Timing diff
    document.getElementById('diagnosisDateTime')?.addEventListener('change', () => this.calculateTimeDiffLive());
    document.getElementById('atb1Time')?.addEventListener('input', () => this.calculateTimeDiffLive());

    // Inotropic drug toggle
    document.getElementById('inotropicGivenCheckbox')?.addEventListener('change', (e) => {
      const container = document.getElementById('inotropicDetailsContainer');
      if (container) {
        if (e.target.checked) {
          container.classList.remove('hidden');
        } else {
          container.classList.add('hidden');
        }
      }
    });

    // Infection source other toggle
    document.getElementById('sourceOfInfectionSelect')?.addEventListener('change', (e) => {
      const otherContainer = document.getElementById('sourceOtherContainer');
      if (otherContainer) {
        if (e.target.value === 'อื่นๆ' || e.target.value === 'Skin and soft tissue') {
          otherContainer.classList.remove('hidden');
        } else {
          otherContainer.classList.add('hidden');
        }
      }
    });

    // Form submit
    const form = document.getElementById('sepsisForm');
    if (form) {
      form.addEventListener('submit', (e) => this.handleFormSubmit(e));
    }

    // Dashboard filters
    ['filterWard', 'filterDateRange', 'filterOutcome'].forEach(id => {
      document.getElementById(id)?.addEventListener('change', () => this.renderDashboard());
    });

    // Search registry
    document.getElementById('searchRegistryInput')?.addEventListener('input', (e) => {
      this.renderPatientRegistry(e.target.value);
    });
  },

  handleFormSubmit(e) {
    e.preventDefault();

    // 1. Gather Basic info
    const hn = document.getElementById('hn')?.value.trim();
    const an = document.getElementById('an')?.value.trim();
    const patientName = document.getElementById('patientName')?.value.trim();
    const age = parseInt(document.getElementById('age')?.value, 10) || 0;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || 'ชาย';
    const ward = document.getElementById('ward')?.value;
    const admitDateTime = document.getElementById('admitDateTime')?.value;
    const diagnosisDateTime = document.getElementById('diagnosisDateTime')?.value;

    if (!hn || !patientName || !diagnosisDateTime) {
      this.showToast('กรุณากรอก HN, ชื่อ-สกุล และวันเวลาที่วินิจฉัย Sepsis ให้ครบถ้วน', 'warning');
      return;
    }

    // 2. SIRS & qSOFA
    const sirsItems = [];
    if (document.getElementById('sirs_wbc')?.checked) sirsItems.push('wbc');
    if (document.getElementById('sirs_bt')?.checked) sirsItems.push('bt');
    if (document.getElementById('sirs_hr')?.checked) sirsItems.push('hr');
    if (document.getElementById('sirs_rr')?.checked) sirsItems.push('rr');
    const sirsScore = sirsItems.length;
    const sirsPass = sirsScore >= 2;

    const qsofaItems = [];
    if (document.getElementById('qsofa_rr')?.checked) qsofaItems.push('rr');
    if (document.getElementById('qsofa_sbp')?.checked) qsofaItems.push('sbp');
    if (document.getElementById('qsofa_gcs')?.checked) qsofaItems.push('gcs');
    const qsofaScore = qsofaItems.length;
    const qsofaPass = qsofaScore >= 2;

    const mewsScore = Object.values(this.mewsState).reduce((a, b) => a + b, 0);

    // 3. Infection Source
    const sourceOfInfection = document.getElementById('sourceOfInfectionSelect')?.value;
    const sourceOfInfectionDetail = document.getElementById('sourceOfInfectionDetail')?.value.trim();

    // 4. Early Treatment (HC & ATB)
    const hcSite1 = document.getElementById('hcSite1')?.value.trim();
    const hcTime1 = document.getElementById('hcTime1')?.value;
    const hcSite2 = document.getElementById('hcSite2')?.value.trim();
    const hcTime2 = document.getElementById('hcTime2')?.value;
    const hcWithin1Hr = document.getElementById('hcWithin1HrCheck')?.checked;
    const hcBeforeAtb = document.getElementById('hcBeforeAtbCheck')?.checked;

    const atb1Name = document.getElementById('atb1Name')?.value.trim();
    const atb1Dose = document.getElementById('atb1Dose')?.value.trim();
    const atb1Time = document.getElementById('atb1Time')?.value;
    const atb2Name = document.getElementById('atb2Name')?.value.trim();
    const atb2Dose = document.getElementById('atb2Dose')?.value.trim();
    const atb2Time = document.getElementById('atb2Time')?.value;

    let timeToAtbMinutes = undefined;
    let atbWithin1Hr = false;
    if (diagnosisDateTime && atb1Time) {
      try {
        const diagDate = new Date(diagnosisDateTime);
        const [h, m] = atb1Time.split(':').map(Number);
        const atbDate = new Date(diagDate);
        atbDate.setHours(h, m, 0, 0);
        let diffMs = atbDate - diagDate;
        if (diffMs < -12 * 60 * 60 * 1000) diffMs += 24 * 60 * 60 * 1000;
        timeToAtbMinutes = Math.max(0, Math.round(diffMs / 60000));
        atbWithin1Hr = timeToAtbMinutes <= 60;
      } catch (err) {}
    }

    // 5. Resuscitation & Shock
    const ivFluidGiven = document.getElementById('ivFluidGivenCheckbox')?.checked;
    const ivFluidType = document.getElementById('ivFluidType')?.value;
    const ivFluidRate = document.getElementById('ivFluidRate')?.value.trim();
    const ivFluidTime = document.getElementById('ivFluidTime')?.value;

    const isSepticShock = document.getElementById('inotropicGivenCheckbox')?.checked;
    const inotropicType = document.getElementById('inotropicType')?.value;
    const inotropicDose = document.getElementById('inotropicDose')?.value.trim();
    const inotropicTime = document.getElementById('inotropicTime')?.value;

    const oxygenSupport = document.getElementById('oxygenSupport')?.value.trim();
    const hasCentralLine = document.getElementById('hasCentralLine')?.checked;
    const hasFoley = document.getElementById('hasFoley')?.checked;

    // 6. Checklist
    const checklistItems = [];
    ['chk_hc', 'chk_culture', 'chk_lactate', 'chk_atb', 'chk_fluid', 'chk_foley', 'chk_map'].forEach(id => {
      const el = document.getElementById(id);
      if (el && el.checked) checklistItems.push(el.value);
    });
    const checklistScore = checklistItems.length;
    const checklistAllPassed = checklistScore === 7;

    // 1-Hour Bundle evaluated
    const bundlePassed = hcBeforeAtb && atbWithin1Hr && ivFluidGiven && checklistItems.includes('lactate');

    // 7. Discharge
    const dischargeDate = document.getElementById('dischargeDate')?.value;
    const dischargeStatus = document.getElementById('dischargeStatus')?.value;
    const referHospital = document.getElementById('referHospital')?.value.trim();
    const recordedBy = document.getElementById('recordedBy')?.value.trim();
    const notes = document.getElementById('notes')?.value.trim();

    const timestampStr = new Date().toISOString().replace(/[-:T.]/g, '').slice(0, 14);
    const newRecord = {
      id: `SEP-${timestampStr}`,
      hn,
      an,
      patientName,
      age,
      gender,
      ward,
      admitDateTime,
      diagnosisDateTime,
      sirsPass,
      sirsScore,
      sirsItems,
      qsofaPass,
      qsofaScore,
      qsofaItems,
      mewsScore,
      mewsDetails: { ...this.mewsState },
      sourceOfInfection,
      sourceOfInfectionDetail,
      hcWithin1Hr,
      hcBeforeAtb,
      hcSite1,
      hcTime1,
      hcSite2,
      hcTime2,
      atbWithin1Hr,
      timeToAtbMinutes,
      atb1Name,
      atb1Dose,
      atb1Time,
      atb2Name,
      atb2Dose,
      atb2Time,
      ivFluidGiven,
      ivFluidType,
      ivFluidRate,
      ivFluidTime,
      isSepticShock,
      inotropicType,
      inotropicDose,
      inotropicTime,
      oxygenSupport,
      hasCentralLine,
      hasFoley,
      checklistScore,
      checklistItems,
      checklistAllPassed,
      bundlePassed,
      dischargeDate,
      dischargeStatus,
      referHospital,
      recordedBy,
      notes,
      createdAt: new Date().toISOString()
    };

    // Save locally
    this.records.unshift(newRecord);
    this.saveRecordsToStorage();

    // Async sync to Google Sheet
    if (GoogleSheetSync.isConfigured()) {
      this.showToast('กำลังส่งข้อมูลไปยัง Google Sheet...', 'info');
      GoogleSheetSync.sendRecord(newRecord).then(res => {
        if (res.success) {
          this.showToast('บันทึกลง Google Sheet สำเร็จแล้ว!', 'success');
        } else {
          this.showToast(res.message, 'warning');
        }
      });
    } else {
      this.showToast('บันทึกข้อมูลผู้ป่วยสำเร็จเรียบร้อย (บันทึกในเครื่อง)', 'success');
    }

    // Reset Form
    e.target.reset();
    this.resetMews();
    this.calculateSirsLive();
    this.calculateQsofaLive();

    // Switch to registry to view the entry
    this.switchTab('registry');
  },

  resetMews() {
    this.mewsState = { rr: 0, spo2: 0, bt: 0, sbp: 0, hr: 0, avpu: 0 };
    document.querySelectorAll('.mews-btn').forEach(btn => {
      btn.classList.remove('active-0', 'active-1', 'active-2', 'active-3');
      btn.classList.add('bg-slate-50', 'text-slate-700');
    });
    this.updateMewsDisplay();
  },

  renderDashboard() {
    const wardFilter = document.getElementById('filterWard')?.value || 'all';
    const dateRangeFilter = document.getElementById('filterDateRange')?.value || 'all';
    const outcomeFilter = document.getElementById('filterOutcome')?.value || 'all';

    const now = new Date();
    const filtered = this.records.filter(r => {
      // Ward filter
      if (wardFilter !== 'all' && r.ward !== wardFilter) return false;

      // Outcome filter
      if (outcomeFilter === 'shock' && !r.isSepticShock && !r.inotropicType) return false;
      if (outcomeFilter === 'dead' && r.dischargeStatus !== 'Dead' && r.dischargeStatus !== 'เสียชีวิต') return false;
      if (outcomeFilter === 'alive' && (r.dischargeStatus === 'Dead' || r.dischargeStatus === 'เสียชีวิต')) return false;

      // Date range filter
      if (dateRangeFilter !== 'all') {
        const dt = new Date(r.diagnosisDateTime || r.admitDateTime || 0);
        if (isNaN(dt.getTime())) return true;
        if (dateRangeFilter === 'thisMonth') {
          if (dt.getMonth() !== now.getMonth() || dt.getFullYear() !== now.getFullYear()) return false;
        } else if (dateRangeFilter === 'last3Months') {
          const threeMonthsAgo = new Date(now.getFullYear(), now.getMonth() - 3, 1);
          if (dt < threeMonthsAgo) return false;
        } else if (dateRangeFilter === 'year2567') {
          // Fiscal year 2567: 1 Oct 2023 - 30 Sep 2024
          const start = new Date(2023, 9, 1);
          const end = new Date(2024, 8, 30, 23, 59, 59);
          if (dt < start || dt > end) return false;
        }
      }
      return true;
    });

    // Compute KPIs
    const total = filtered.length;
    let shockCount = 0;
    let deadCount = 0;
    let bundlePassCount = 0;
    let hcBeforeAtbCount = 0;
    let atb1hrCount = 0;

    filtered.forEach(r => {
      if (r.isSepticShock || r.inotropicType) shockCount++;
      if (r.dischargeStatus === 'Dead' || r.dischargeStatus === 'เสียชีวิต') deadCount++;
      if (r.bundlePassed) bundlePassCount++;
      if (r.hcBeforeAtb) hcBeforeAtbCount++;
      if (r.atbWithin1Hr || (r.timeToAtbMinutes !== undefined && r.timeToAtbMinutes <= 60)) atb1hrCount++;
    });

    const shockRate = total > 0 ? Math.round((shockCount / total) * 100) : 0;
    const mortalityRate = total > 0 ? Math.round((deadCount / total) * 100) : 0;
    const bundleRate = total > 0 ? Math.round((bundlePassCount / total) * 100) : 0;
    const hcBeforeRate = total > 0 ? Math.round((hcBeforeAtbCount / total) * 100) : 0;
    const atb1hrRate = total > 0 ? Math.round((atb1hrCount / total) * 100) : 0;

    // Update KPI card numbers
    document.getElementById('kpiTotalCases').textContent = total;
    document.getElementById('kpiShockCount').textContent = `${shockCount} ราย (${shockRate}%)`;
    document.getElementById('kpiMortalityRate').textContent = `${mortalityRate}%`;
    document.getElementById('kpiDeadCount').textContent = `${deadCount} / ${total} ราย`;
    document.getElementById('kpiBundleRate').textContent = `${bundleRate}%`;
    document.getElementById('kpiHcBeforeRate').textContent = `${hcBeforeRate}%`;
    document.getElementById('kpiAtb1hrRate').textContent = `${atb1hrRate}%`;

    // Render Charts
    SepsisCharts.updateAll(filtered);
  },

  renderPatientRegistry(keyword = '') {
    const tbody = document.getElementById('registryTableBody');
    if (!tbody) return;

    let items = [...this.records];
    if (keyword.trim()) {
      const q = keyword.trim().toLowerCase();
      items = items.filter(r => 
        (r.hn && r.hn.toLowerCase().includes(q)) ||
        (r.an && r.an.toLowerCase().includes(q)) ||
        (r.patientName && r.patientName.toLowerCase().includes(q)) ||
        (r.ward && r.ward.toLowerCase().includes(q)) ||
        (r.sourceOfInfection && r.sourceOfInfection.toLowerCase().includes(q))
      );
    }

    if (items.length === 0) {
      tbody.innerHTML = `
        <tr>
          <td colspan="9" class="px-4 py-8 text-center text-slate-400">
            <i class="fa-solid fa-folder-open text-3xl mb-2 block"></i>
            ไม่พบข้อมูลผู้ป่วยตามคำค้นหา
          </td>
        </tr>
      `;
      return;
    }

    tbody.innerHTML = items.map(r => {
      const isDead = r.dischargeStatus === 'Dead' || r.dischargeStatus === 'เสียชีวิต';
      const outcomeBadge = isDead 
        ? `<span class="badge bg-red-100 text-red-700">เสียชีวิต</span>`
        : r.dischargeStatus === 'Complete recovery'
        ? `<span class="badge bg-emerald-100 text-emerald-700">หายดี</span>`
        : r.dischargeStatus === 'Improve'
        ? `<span class="badge bg-sky-100 text-sky-700">ดีขึ้น</span>`
        : r.dischargeStatus === 'ย้าย ICU'
        ? `<span class="badge bg-amber-100 text-amber-700">ย้าย ICU</span>`
        : `<span class="badge bg-purple-100 text-purple-700">Refer</span>`;

      const bundleBadge = r.bundlePassed
        ? `<span class="badge bg-teal-100 text-teal-800">✅ ผ่าน 1-Hr Bundle</span>`
        : `<span class="badge bg-slate-100 text-slate-600">❌ ไม่ผ่าน</span>`;

      const shockBadge = (r.isSepticShock || r.inotropicType)
        ? `<span class="badge bg-red-50 text-red-600 border border-red-200">Septic Shock</span>`
        : `<span class="badge bg-blue-50 text-blue-600 border border-blue-200">Sepsis</span>`;

      const diagDateFormatted = r.diagnosisDateTime ? r.diagnosisDateTime.replace('T', ' ') : '-';

      return `
        <tr class="border-b border-slate-100 hover:bg-slate-50 transition">
          <td class="px-4 py-3 font-semibold text-slate-800">${r.hn || '-'}</td>
          <td class="px-4 py-3 text-slate-900">${r.patientName || '-'}</td>
          <td class="px-4 py-3 text-slate-600">${r.age || '-'} ปี / ${r.gender || '-'}</td>
          <td class="px-4 py-3 text-slate-600">${r.ward || '-'}</td>
          <td class="px-4 py-3 text-slate-500 text-xs">${diagDateFormatted}</td>
          <td class="px-4 py-3">${shockBadge}</td>
          <td class="px-4 py-3">${bundleBadge}</td>
          <td class="px-4 py-3">${outcomeBadge}</td>
          <td class="px-4 py-3 text-right space-x-1 whitespace-nowrap">
            <button onclick="SepsisApp.viewRecordModal('${r.id}')" class="px-2.5 py-1 text-xs bg-teal-50 text-teal-700 rounded hover:bg-teal-100 border border-teal-200 font-medium">
              <i class="fa-solid fa-eye mr-1"></i> ดูชาร์ต
            </button>
            <button onclick="SepsisApp.printRecord('${r.id}')" class="px-2.5 py-1 text-xs bg-slate-100 text-slate-700 rounded hover:bg-slate-200 border border-slate-300 font-medium">
              <i class="fa-solid fa-print mr-1"></i> พิมพ์
            </button>
            <button onclick="SepsisApp.deleteRecord('${r.id}')" class="px-2 py-1 text-xs text-red-600 hover:bg-red-50 rounded">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      `;
    }).join('');
  },

  viewRecordModal(id) {
    const r = this.records.find(item => item.id === id);
    if (!r) return;
    this.currentViewingRecord = r;

    const modal = document.getElementById('patientDetailModal');
    const content = document.getElementById('patientDetailContent');
    if (!modal || !content) return;

    content.innerHTML = `
      <div class="border-b pb-4 mb-4 flex justify-between items-start">
        <div>
          <span class="text-xs font-semibold px-2 py-0.5 rounded bg-teal-100 text-teal-800">รหัสแบบฟอร์ม F/M-MED/002-XX</span>
          <h2 class="text-xl font-bold text-slate-800 mt-1">แบบฟอร์มเก็บข้อมูลผู้ป่วย Severe Sepsis / Septic Shock</h2>
          <p class="text-xs text-slate-500">โรงพยาบาลเมตตาประชารักษ์ (วัดไร่ขิง)</p>
        </div>
        <div class="text-right">
          <span class="text-xs text-slate-400">ID: ${r.id}</span>
          <div class="mt-1 font-bold text-slate-700">HN: ${r.hn} | AN: ${r.an || '-'}</div>
        </div>
      </div>

      <!-- ข้อมูลผู้ป่วย -->
      <div class="bg-slate-50 p-3 rounded-lg border border-slate-200 mb-4 text-sm grid grid-cols-2 md:grid-cols-4 gap-3">
        <div><strong>ชื่อ-สกุล:</strong> ${r.patientName}</div>
        <div><strong>อายุ:</strong> ${r.age} ปี | <strong>เพศ:</strong> ${r.gender}</div>
        <div><strong>หอผู้ป่วย:</strong> ${r.ward}</div>
        <div><strong>วันที่ Admit:</strong> ${r.admitDateTime?.replace('T', ' ') || '-'}</div>
      </div>

      <!-- ส่วนที่ 1: Early Detection -->
      <div class="mb-4">
        <h3 class="font-bold text-teal-800 text-sm border-b pb-1 mb-2">1. Early Detection ภายใน 1 ชั่วโมง (แพทย์ผู้ประเมิน)</h3>
        <div class="text-xs text-slate-600 mb-2">วันเวลาที่วินิจฉัย Sepsis: <strong>${r.diagnosisDateTime?.replace('T', ' ') || '-'}</strong></div>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          <div class="p-2.5 rounded border ${r.sirsPass ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'}">
            <div class="font-bold mb-1">SIRS Criteria (${r.sirsScore}/4):</div>
            <div>${r.sirsPass ? '🔴 เข้าเกณฑ์ (>= 2 ข้อ)' : '⚪ ไม่เข้าเกณฑ์'}</div>
          </div>
          <div class="p-2.5 rounded border ${r.qsofaPass ? 'bg-red-50 border-red-200' : 'bg-slate-50 border-slate-200'}">
            <div class="font-bold mb-1">qSOFA Criteria (${r.qsofaScore}/3):</div>
            <div>${r.qsofaPass ? '🔴 เข้าเกณฑ์ (>= 2 ข้อ)' : '⚪ ไม่เข้าเกณฑ์'}</div>
          </div>
          <div class="p-2.5 rounded border ${r.mewsScore >= 4 ? 'bg-amber-50 border-amber-200' : 'bg-slate-50 border-slate-200'}">
            <div class="font-bold mb-1">MEWS Score: ${r.mewsScore} คะแนน</div>
            <div>${r.mewsScore >= 4 ? '⚠️ เฝ้าระวังเข้มงวด (>= 4)' : 'ปกติ'}</div>
          </div>
        </div>
        <div class="mt-2 text-xs">
          <strong>แหล่งติดเชื้อ (Source):</strong> ${r.sourceOfInfection || '-'} 
          ${r.sourceOfInfectionDetail ? `(${r.sourceOfInfectionDetail})` : ''}
        </div>
      </div>

      <!-- ส่วนที่ 2: Early Treatment -->
      <div class="mb-4">
        <h3 class="font-bold text-teal-800 text-sm border-b pb-1 mb-2">2. Early Treatment ภายใน 1 ชั่วโมง (พยาบาลผู้ประเมิน)</h3>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
          <div class="p-2.5 bg-slate-50 rounded border border-slate-200">
            <div class="font-bold text-slate-700 mb-1">Hemoculture (H/C):</div>
            <div>ขวดที่ 1: Site ${r.hcSite1 || '-'} เวลา ${r.hcTime1 || '-'} น.</div>
            <div>ขวดที่ 2: Site ${r.hcSite2 || '-'} เวลา ${r.hcTime2 || '-'} น.</div>
            <div class="mt-1 font-semibold ${r.hcBeforeAtb ? 'text-teal-700' : 'text-red-600'}">
              ${r.hcBeforeAtb ? '✅ เจาะ H/C ก่อนเริ่ม ATB' : '⚠️ เจาะ H/C หลังเริ่ม ATB'}
            </div>
          </div>
          <div class="p-2.5 bg-slate-50 rounded border border-slate-200">
            <div class="font-bold text-slate-700 mb-1">Antibiotic (ATB):</div>
            <div>1) ${r.atb1Name || '-'} ขนาด ${r.atb1Dose || '-'} เริ่มเวลา ${r.atb1Time || '-'} น.</div>
            ${r.atb2Name ? `<div>2) ${r.atb2Name} ขนาด ${r.atb2Dose} เริ่มเวลา ${r.atb2Time} น.</div>` : ''}
            <div class="mt-1 font-semibold ${r.atbWithin1Hr ? 'text-teal-700' : 'text-red-600'}">
              ${r.atbWithin1Hr ? `✅ ได้รับ ATB ใน 1 ชม. (${r.timeToAtbMinutes} นาที)` : `⚠️ ได้รับล่าช้า (${r.timeToAtbMinutes} นาที)`}
            </div>
          </div>
        </div>
      </div>

      <!-- ส่วนที่ 3: Resuscitation & Shock -->
      <div class="mb-4">
        <h3 class="font-bold text-teal-800 text-sm border-b pb-1 mb-2">3. Hemodynamic Resuscitation & Inotropic</h3>
        <div class="text-xs space-y-1 bg-slate-50 p-2.5 rounded border border-slate-200">
          <div><strong>IV Fluid:</strong> ${r.ivFluidGiven ? `ได้รับ (${r.ivFluidType || '-'} rate: ${r.ivFluidRate || '-'} เวลาเริ่ม: ${r.ivFluidTime || '-'})` : 'ไม่ได้ให้'}</div>
          <div><strong>ภาวะ Septic Shock:</strong> ${r.isSepticShock ? `🔴 มีภาวะ Shock ได้รับ Inotropic (${r.inotropicType || '-'} dose: ${r.inotropicDose || '-'} เวลา: ${r.inotropicTime || '-'})` : '🟢 ไม่มีภาวะช็อก'}</div>
          <div><strong>Oxygen support:</strong> ${r.oxygenSupport || 'ไม่ได้ระบุ'} | <strong>Central line:</strong> ${r.hasCentralLine ? 'มี' : 'ไม่มี'} | <strong>Foley catheter:</strong> ${r.hasFoley ? 'มี' : 'ไม่มี'}</div>
        </div>
      </div>

      <!-- ส่วนที่ 4 & 5: Checklist & Outcome -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div class="p-2.5 bg-teal-50 rounded border border-teal-200">
          <div class="font-bold text-teal-900 mb-1">4. Sepsis Checklist Score: ${r.checklistScore}/7 ข้อ</div>
          <div>1-Hour Bundle Status: <strong>${r.bundlePassed ? '🌟 ผ่านเกณฑ์ Bundle ครบถ้วน' : '⚠️ ไม่ผ่านเกณฑ์'}</strong></div>
        </div>
        <div class="p-2.5 bg-slate-50 rounded border border-slate-200">
          <div class="font-bold text-slate-700 mb-1">5. ผลลัพธ์การรักษา (Discharge Status)</div>
          <div>สถานะ: <strong>${r.dischargeStatus || '-'}</strong> | วันจำหน่าย: ${r.dischargeDate || '-'}</div>
          ${r.referHospital ? `<div>ส่งต่อไปยัง: ${r.referHospital}</div>` : ''}
        </div>
      </div>

      <div class="mt-4 pt-3 border-t text-xs text-slate-500 flex justify-between">
        <div>ผู้บันทึก: ${r.recordedBy || '-'}</div>
        <div>หมายเหตุ: ${r.notes || '-'}</div>
      </div>
    `;

    modal.classList.remove('hidden');
  },

  closeModal() {
    const modal = document.getElementById('patientDetailModal');
    if (modal) modal.classList.add('hidden');
  },

  printRecord(id) {
    this.viewRecordModal(id);
    setTimeout(() => {
      window.print();
    }, 200);
  },

  deleteRecord(id) {
    if (!confirm('คุณต้องการลบรายการบันทึกนี้ใช่หรือไม่?')) return;
    this.records = this.records.filter(r => r.id !== id);
    this.saveRecordsToStorage();
    this.renderPatientRegistry();
    this.renderDashboard();
    this.showToast('ลบรายการเรียบร้อยแล้ว', 'info');
  },

  exportToCsv() {
    if (this.records.length === 0) {
      this.showToast('ไม่มีข้อมูลสำหรับส่งออก', 'warning');
      return;
    }

    const headers = [
      "ID", "HN", "AN", "ชื่อสกุล", "อายุ", "เพศ", "หอผู้ป่วย", "วันเวลาAdmit", "วันเวลาวินิจฉัยSepsis",
      "SIRS_เข้าเกณฑ์", "SIRS_Score", "qSOFA_เข้าเกณฑ์", "qSOFA_Score", "MEWS_Score",
      "แหล่งติดเชื้อ", "รายละเอียดแหล่งติดเชื้อ", "HCเจาะก่อนATB", "ATBใน1ชม", "เวลาได้ATB_นาที",
      "ATB1", "ได้IVFluid", "IV_Rate", "SepticShock", "Inotropic", "Bundle1Hr_ผ่าน",
      "สถานะจำหน่าย", "วันจำหน่าย", "ผู้บันทึก"
    ];

    const rows = this.records.map(r => [
      r.id,
      r.hn,
      r.an,
      `"${(r.patientName || '').replace(/"/g, '""')}"`,
      r.age,
      r.gender,
      `"${r.ward || ''}"`,
      r.admitDateTime,
      r.diagnosisDateTime,
      r.sirsPass ? 'ใช่' : 'ไม่ใช่',
      r.sirsScore,
      r.qsofaPass ? 'ใช่' : 'ไม่ใช่',
      r.qsofaScore,
      r.mewsScore,
      `"${r.sourceOfInfection || ''}"`,
      `"${(r.sourceOfInfectionDetail || '').replace(/"/g, '""')}"`,
      r.hcBeforeAtb ? 'ใช่' : 'ไม่ใช่',
      r.atbWithin1Hr ? 'ใช่' : 'ไม่ใช่',
      r.timeToAtbMinutes !== undefined ? r.timeToAtbMinutes : '',
      `"${r.atb1Name || ''}"`,
      r.ivFluidGiven ? 'ใช่' : 'ไม่ใช่',
      `"${r.ivFluidRate || ''}"`,
      r.isSepticShock ? 'ใช่' : 'ไม่ใช่',
      `"${r.inotropicType || ''}"`,
      r.bundlePassed ? 'ผ่าน' : 'ไม่ผ่าน',
      `"${r.dischargeStatus || ''}"`,
      r.dischargeDate,
      `"${r.recordedBy || ''}"`
    ]);

    const csvContent = "\uFEFF" + [headers.join(","), ...rows.map(e => e.join(","))].join("\r\n");
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", `Metta_Sepsis_Data_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    this.showToast('ดาวน์โหลดไฟล์ CSV เรียบร้อยแล้ว', 'success');
  },

  async saveGoogleSettings() {
    const urlInput = document.getElementById('gasUrlInput');
    const diagBox = document.getElementById('gasDiagnosticBox');
    const url = urlInput ? urlInput.value.trim() : '';
    
    if (!url) {
      GoogleSheetSync.setScriptUrl('');
      this.checkConfigNotice();
      if (diagBox) {
        diagBox.className = "mt-2 text-xs p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-600";
        diagBox.innerHTML = 'ℹ️ ยกเลิกการเชื่อมต่อ Google Sheet แล้ว (ระบบจะบันทึกข้อมูลในเครื่องเบราว์เซอร์อย่างเดียว)';
      }
      this.showToast('ยกเลิกการเชื่อมต่อ Google Sheet แล้ว', 'info');
      return;
    }

    // Validate URL format
    const validation = GoogleSheetSync.validateUrl(url);
    if (!validation.valid) {
      if (diagBox) {
        diagBox.className = "mt-2 text-xs p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 font-medium";
        diagBox.innerHTML = validation.message;
      }
      this.showToast(validation.message, 'error');
      return;
    }

    if (diagBox) {
      diagBox.className = "mt-2 text-xs p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-800";
      diagBox.innerHTML = '<i class="fa-solid fa-spinner fa-spin mr-1"></i> กำลังทดสอบการเชื่อมต่อไปยัง Google Apps Script...';
    }

    const testResult = await GoogleSheetSync.testConnection(url);
    GoogleSheetSync.setScriptUrl(url);
    this.checkConfigNotice();

    if (testResult.success) {
      if (diagBox) {
        diagBox.className = "mt-2 text-xs p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium";
        diagBox.innerHTML = `
          <div>${testResult.message}</div>
          <div class="text-[11px] text-emerald-600 mt-1">พร้อมรับส่งข้อมูลระหว่างหน้าเว็บกับ Google Sheet ของ รพ. เรียบร้อยแล้ว สามารถกดปุ่ม "ซิงค์ข้อมูลที่มีทั้งหมด" ด้านล่างได้เลย</div>
        `;
      }
      this.showToast('เชื่อมต่อ Google Apps Script สำเร็จแล้ว!', 'success');
    } else {
      if (diagBox) {
        diagBox.className = "mt-2 text-xs p-3 rounded-lg bg-amber-50 border border-amber-200 text-amber-900";
        diagBox.innerHTML = `
          <div class="font-bold text-red-600">${testResult.message}</div>
          <div class="text-[11px] mt-1 space-y-1">
            <div>💡 <strong>วิธีแก้ไข:</strong></div>
            <div>1. กลับไปที่หน้า Apps Script ใน Google Sheet</div>
            <div>2. กดปุ่มสีน้ำเงิน <strong>"Deploy (การทำให้ใช้งานได้)"</strong> &gt; <strong>"Manage deployments (จัดการการทำให้ใช้งานได้)"</strong></div>
            <div>3. กดรูป <strong>ดินสอ (Edit)</strong> ด้านขวาบน แล้วดูหัวข้อ <strong>"Who has access (ผู้มีสิทธิ์เข้าถึง)"</strong> เปลี่ยนให้เป็น <strong>"Anyone (ทุกคน)"</strong> แล้วกด Deploy อีกครั้ง</div>
          </div>
        `;
      }
      this.showToast('บันทึก URL แล้ว แต่ยังเชื่อมต่อไม่ผ่าน กรุณาตรวจสอบสิทธิ์', 'warning');
    }
  },

  async syncAllToGoogleSheet() {
    const url = GoogleSheetSync.getScriptUrl();
    const diagBox = document.getElementById('gasDiagnosticBox');
    const btnSync = document.getElementById('btnSyncAll');

    if (!url) {
      this.showToast('กรุณาระบุ Web App URL ก่อนเริ่มซิงค์', 'warning');
      if (diagBox) {
        diagBox.className = "mt-2 text-xs p-3 rounded-lg bg-red-50 border border-red-200 text-red-700";
        diagBox.innerHTML = '⚠️ กรุณาวาง Web App URL ในช่องด้านบนแล้วกดบันทึกก่อนครับ';
      }
      return;
    }

    const validation = GoogleSheetSync.validateUrl(url);
    if (!validation.valid) {
      this.showToast(validation.message, 'error');
      if (diagBox) {
        diagBox.className = "mt-2 text-xs p-3 rounded-lg bg-red-50 border border-red-200 text-red-700";
        diagBox.innerHTML = validation.message;
      }
      return;
    }

    if (btnSync) btnSync.disabled = true;
    if (diagBox) {
      diagBox.className = "mt-2 text-xs p-3 rounded-lg bg-sky-50 border border-sky-200 text-sky-800";
      diagBox.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> กำลังส่งข้อมูล ${this.records.length} รายการเข้า Google Sheet...`;
    }

    let successCount = 0;
    for (let i = 0; i < this.records.length; i++) {
      const rec = this.records[i];
      if (diagBox) {
        diagBox.innerHTML = `<i class="fa-solid fa-spinner fa-spin mr-1"></i> กำลังส่งเคสที่ ${i + 1} จาก ${this.records.length} (${rec.patientName})...`;
      }
      const res = await GoogleSheetSync.sendRecord(rec);
      if (res.success) successCount++;
    }

    if (btnSync) btnSync.disabled = false;

    if (successCount > 0) {
      if (diagBox) {
        diagBox.className = "mt-2 text-xs p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-800 font-medium";
        diagBox.innerHTML = `
          <div>🎉 <strong>ซิงค์ข้อมูลสำเร็จเรียบร้อย!</strong> (ส่งไปแล้ว ${successCount} จาก ${this.records.length} เคส)</div>
          <div class="text-[11px] text-emerald-600 mt-1">กรุณาเปิดดูใน Google Sheet แผ่นงาน <strong>"Sepsis_Data"</strong> จะเห็นหัวตารางและข้อมูลปรากฏขึ้นมาครับ</div>
        `;
      }
      this.showToast(`ซิงค์ข้อมูลสำเร็จ ${successCount} รายการ!`, 'success');
    } else {
      if (diagBox) {
        diagBox.className = "mt-2 text-xs p-3 rounded-lg bg-red-50 border border-red-200 text-red-700";
        diagBox.innerHTML = `❌ ไม่สามารถส่งข้อมูลได้ กรุณาตรวจสอบว่าสิทธิ์ใน Google Apps Script เลือกเป็น Anyone (ทุกคน) หรือยัง`;
      }
      this.showToast('ซิงค์ข้อมูลไม่สำเร็จ กรุณาตรวจสอบสิทธิ์', 'error');
    }
  },

  showToast(message, type = 'info') {
    const toast = document.getElementById('toast');
    if (!toast) return;

    toast.textContent = message;
    toast.className = "fixed bottom-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg text-sm font-medium transition-all duration-300 transform translate-y-0 opacity-100 flex items-center gap-2";

    if (type === 'success') {
      toast.classList.add('bg-teal-700', 'text-white');
    } else if (type === 'warning') {
      toast.classList.add('bg-amber-600', 'text-white');
    } else if (type === 'error') {
      toast.classList.add('bg-red-600', 'text-white');
    } else {
      toast.classList.add('bg-slate-800', 'text-white');
    }

    setTimeout(() => {
      toast.className = "hidden";
    }, 3500);
  }
};

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', () => {
  SepsisApp.init();
});

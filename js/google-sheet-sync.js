/**
 * Google Sheet Sync Module for Sepsis Dashboard
 * Connects web frontend to Google Sheet via Google Apps Script Web App
 */

const GoogleSheetSync = {
  STORAGE_KEY_URL: 'metta_sepsis_gas_url',

  getScriptUrl() {
    return localStorage.getItem(this.STORAGE_KEY_URL) || '';
  },

  setScriptUrl(url) {
    if (url) {
      localStorage.setItem(this.STORAGE_KEY_URL, url.trim());
    } else {
      localStorage.removeItem(this.STORAGE_KEY_URL);
    }
  },

  isConfigured() {
    const url = this.getScriptUrl();
    return !!url && url.startsWith('http') && url.includes('/exec');
  },

  validateUrl(url) {
    if (!url) return { valid: false, message: 'ยังไม่ได้ระบุ URL' };
    const trimmed = url.trim();
    if (trimmed.includes('docs.google.com/spreadsheets')) {
      return { 
        valid: false, 
        message: '❌ URL ที่วางคือลิงก์ Google Sheet ครับ ต้องเป็นลิงก์ Web App จากปุ่ม Deploy (ขึ้นต้นด้วย https://script.google.com/.../exec)' 
      };
    }
    if (trimmed.includes('/edit')) {
      return { 
        valid: false, 
        message: '❌ URL นี้คือหน้าแก้ไขโค้ด Apps Script ครับ ต้องเป็นลิงก์ Web App ที่ได้จาก Deploy > New deployment (ลงท้ายด้วย /exec)' 
      };
    }
    if (!trimmed.startsWith('https://script.google.com/')) {
      return { 
        valid: false, 
        message: '⚠️ URL ควรขึ้นต้นด้วย https://script.google.com/macros/s/.../exec' 
      };
    }
    return { valid: true, message: 'รูปแบบ URL ถูกต้อง' };
  },

  async testConnection(url) {
    const targetUrl = (url || this.getScriptUrl()).trim();
    const check = this.validateUrl(targetUrl);
    if (!check.valid) {
      return { success: false, message: check.message };
    }

    try {
      const response = await fetch(`${targetUrl}?action=ping`, {
        method: 'GET',
        mode: 'cors'
      });
      const data = await response.json();
      if (data && data.status === 'success') {
        return { success: true, message: '✅ เชื่อมต่อ Google Apps Script สำเร็จพร้อมใช้งาน!' };
      }
      return { success: false, message: 'Google Apps Script ตอบกลับ แต่ไม่ได้ส่งค่า success' };
    } catch (err) {
      console.warn('Ping GET test error:', err);
      // Try sending a probe POST or inform user about Anyone permission
      return { 
        success: false, 
        message: '⚠️ ไม่สามารถติดต่อ Google Apps Script ได้ ส่วนใหญ่มักเกิดจากยังไม่ได้ตั้งค่าสิทธิ์เป็น "ผู้มีสิทธิ์เข้าถึง: ทุกคน (Anyone)" ในหน้า Deploy' 
      };
    }
  },

  async sendRecord(record) {
    const url = this.getScriptUrl();
    if (!url) {
      return { success: false, message: 'ไม่ได้ตั้งค่า Google Apps Script URL (บันทึกลงเครื่องแล้ว)' };
    }

    // Try standard fetch first (text/plain avoids CORS preflight)
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8'
        },
        body: JSON.stringify(record)
      });
      
      const result = await response.json();
      if (result && result.status === 'success') {
        return { success: true, message: 'บันทึกเข้า Google Sheet สำเร็จ', result };
      }
      return { success: false, message: result.message || 'บันทึกลง Google Sheet ล้มเหลว' };
    } catch (err) {
      console.warn('Standard POST error, attempting fallback with no-cors mode:', err);
      
      // Fallback: send via no-cors mode so Google Apps Script still receives and writes it!
      try {
        await fetch(url, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'text/plain;charset=utf-8'
          },
          body: JSON.stringify(record)
        });
        
        return { 
          success: true, 
          message: 'ส่งข้อมูลไปยัง Google Apps Script แล้ว (โหมด Fallback กรุณาตรวจสอบใน Google Sheet)' 
        };
      } catch (fallbackErr) {
        console.error('Fallback POST also failed:', fallbackErr);
        return { 
          success: false, 
          message: 'ส่งข้อมูลไม่สำเร็จ: ' + fallbackErr.message 
        };
      }
    }
  },

  async fetchAllRecords() {
    const url = this.getScriptUrl();
    if (!url) {
      return { success: false, message: 'ไม่ได้ตั้งค่า Google Sheet' };
    }

    try {
      const response = await fetch(`${url}?action=getAll`, {
        method: 'GET',
        mode: 'cors'
      });
      const result = await response.json();
      if (result && result.status === 'success') {
        return { success: true, data: result.data || [] };
      }
      return { success: false, message: result.message || 'ดึงข้อมูลไม่สำเร็จ' };
    } catch (err) {
      console.error('Error fetching records from Google Sheet:', err);
      return { success: false, message: err.message };
    }
  }
};

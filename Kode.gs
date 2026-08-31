const SHEET_ID = '1LpQ7nQBi2h1HFjenax8zqNdI5wNRM7DYMSnOhNbggpw'; 

function doGet(e) {
  // Jika URL dibuka langsung lewat browser (tanpa parameter data), tampilkan pesan ini
  if (Object.keys(e.parameter).length === 0) {
    return ContentService.createTextOutput("✅ Sistem Backend RT 02 Aktif. Aplikasi siap dihubungkan dengan website utama.");
  }
  return handleRequest(e, 'GET');
}

function doPost(e) {
  return handleRequest(e, 'POST');
}

function handleRequest(e, method) {
  // Setup CORS agar bisa diakses dari domain rt2pasekanlor.id
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
  };

  try {
    let params;
    if (method === 'GET') {
      params = e.parameter;
    } else {
      // POST data biasanya dikirim via body JSON
      params = JSON.parse(e.postData.contents);
    }

    const action = params.action;
    const sheetName = params.sheetName; // Contoh: "Keuangan", "Inventaris"
    
    if (!sheetName) throw new Error("Nama Sheet tidak diberikan.");
    
    const doc = SpreadsheetApp.openById(SHEET_ID);
    const sheet = doc.getSheetByName(sheetName);
    
    if (!sheet) throw new Error("Sheet '" + sheetName + "' tidak ditemukan.");

    let result = {};

    if (action === 'read') {
      const data = sheet.getDataRange().getValues();
      const headersList = data.shift(); // Ambil baris pertama sebagai header
      const jsonArray = data.map(row => {
        let obj = {};
        headersList.forEach((header, index) => {
          obj[header] = row[index];
        });
        return obj;
      });
      result = { status: 'success', data: jsonArray };
    } 
    else if (action === 'insert') {
      // Data harus berupa array yang sesuai urutan kolom header
      const rowData = params.data; 
      sheet.appendRow(rowData);
      result = { status: 'success', message: 'Data berhasil ditambahkan.' };
    }
    // Bisa ditambahkan fungsi 'update' & 'delete' di sini menggunakan parameter baris.

    return ContentService.createTextOutput(JSON.stringify(result))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ status: 'error', message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

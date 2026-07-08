/**
 * SAAK Team Training Center — Agreement Form → Google Sheets
 *
 * HOW TO DEPLOY:
 * 1. Open your Google Sheet.
 * 2. Extensions → Apps Script → paste this entire file.
 * 3. Click "Deploy" → "New deployment" → Type: Web App.
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the Web App URL.
 * 5. In js/main.js replace the value of SHEETS_ENDPOINT with that URL.
 */

const SHEET_NAME = "Sheet1"; // change if your tab has a different name

function doPost(e) {
  try {
    const ss    = SpreadsheetApp.getActiveSpreadsheet();
    const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];

    // Add header row on first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Company", "Training Date", "Language"]);
    }

    const params = e.parameter || {};
    sheet.appendRow([
      params.timestamp || new Date().toISOString(),
      params.name      || "",
      params.company   || "",
      params.date      || "",
      params.lang      || "ar"
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ status: "ok" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: err.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Optional: test via browser GET
function doGet() {
  return ContentService.createTextOutput("SAAK form endpoint is live.");
}

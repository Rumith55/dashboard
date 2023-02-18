import * as XLSX from 'xlsx';

const loadExcelData = () => {
  const xlsxFile = require('./1234.xlsx');
  fetch(xlsxFile)
    .then((response) => response.arrayBuffer())
    .then((arrayBuffer) => {
      const binaryData = new Uint8Array(arrayBuffer);
      const workbook = XLSX.read(binaryData, { type: 'binary' });
      const sheetName = 'License 1';
      const worksheet = workbook.Sheets[sheetName];
      const sheetData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      let count = 0;
      sheetData.forEach((row) => {
        count++;
      });
      // return count;
    });
  return 20 // temp line
};


export default {
  labels: ["2009", "2010", "2011", "2012", "2013", "2014", "2015"],
  datasets: { label: "Sales", data: [50, 20, 10, 22, 50, 10, loadExcelData()] },
};

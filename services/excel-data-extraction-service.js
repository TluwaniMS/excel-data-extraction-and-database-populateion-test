const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

const extractExcelData = async () => {
  const doctorsData = [];

  await readXlsxFile(fs.createReadStream("assets/doctors_directory.xlsx")).then((rows) => {
    const rowHeaders = rows[0];
    const totalColumns = rowHeaders.length;
    rows.splice(0, 1);

    rows.forEach((row) => {
      let dataObject = {};

      for (let i = 0; i < totalColumns; i++) {
        dataObject[rowHeaders[i]] = row[i];
      }

      doctorsData.push(dataObject);
    });
  });

  return doctorsData;
};

module.exports = { extractExcelData };

const readXlsxFile = require("read-excel-file/node");
const fs = require("fs");

const extractExcelData = async () => {
  const doctorsData = [];

  await readXlsxFile(fs.createReadStream("../assets/doctors_directory")).then((rows) => {
    console.log(rows);
  });

  return doctorsData;
};

module.exports = { extractExcelData };

const readXlsxFile = require("read-excel-file");

const extractExcelData = async () => {
  const doctorsData = [];

  readXlsxFile().then((rows) => {});

  return doctorsData;
};

module.exports = { extractExcelData };

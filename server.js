const { app } = require("./app");
const { connectToDataBase } = require("./database-configuration");
const { extractExcelData } = require("./services/excel-data-extraction-service");
const { getAllDoctors, createDoctors } = require("./database-queries/doctors-database-queries");

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});

(async () => {
  await connectToDataBase();
  const excelData = await extractExcelData();
  const doctors = await getAllDoctors();

  doctors.length === 0
    ? (await createDoctors(excelData), console.log(`database has been populated successfully`))
    : console.log(`database has already been populated.`);
})();

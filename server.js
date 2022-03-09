const { app } = require("./app");
const { connectToDataBase } = require("./database-configuration");
const { extractExcelData } = require("./services/excel-data-extraction-service");

const PORT = process.env.PORT | 5000;

app.listen(PORT, () => {
  console.log(`server is running on port: ${PORT}`);
});

(async () => {
  await extractExcelData();
  await connectToDataBase();
})();

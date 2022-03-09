const express = require("express");
const router = express.Router();
const { DoctorModel } = require("../data-base-models/doctor");

router.get("/get-all-doctors", async (req, res) => {
  const doctors = await DoctorModel.find({});

  res.status(200).send({ data: doctors });
});

module.exports = router;

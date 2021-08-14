require("dotenv").config();

const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 3005;

const withToken = require("./withToken");
const ec2InstanceModel = require("./models/ec2InstanceModel");
const { getInstancesFromReservations } = require("./utils");
const { getEc2Instances } = require("./services/Ec2");

app.use(cors());

app.get("/api/instances", withToken, async (req, res) => {
  const { page } = req.query; // TODO: take limit as a query param so we can set it dynamically
  const limit = 10;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const { Reservations = [] } = await getEc2Instances(); // TODO: caching responses
  const pagedReservations = Reservations.slice(startIndex, endIndex);
  const instances = getInstancesFromReservations(pagedReservations);
  const lastPage = Math.ceil(Reservations.length / limit);
  const responseObj = {
    lastPage,
    instances: instances.map(([instanceData]) =>
      ec2InstanceModel(instanceData)
    ),
  };
  res.json(responseObj);
});

app.listen(PORT, () => {
  console.log(`app running on http://localhost:${PORT}`);
});

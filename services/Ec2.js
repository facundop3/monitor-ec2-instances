const AWS = require("aws-sdk");

const accessKeyId = process.env.ACCESS_KEY_ID;
const secretAccessKey = process.env.SECRET_ACCESS_KEY;

AWS.config.update({
  region: "us-east-2",
  accessKeyId,
  secretAccessKey,
});

// Create EC2 service object
const ec2 = new AWS.EC2({ apiVersion: "2016-11-15" });

const getEc2Instances = () => {
  var params = {
    DryRun: false,
  };

  return new Promise((resolve, reject) => {
    ec2.describeInstances(params, function (err, data) {
      if (err) {
        reject(err.stack);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = { getEc2Instances };

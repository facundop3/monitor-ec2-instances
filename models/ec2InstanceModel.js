const get = require("lodash.get");

const ec2InstanceModel = (instance = {}) => {
  const Name = get(instance, "Tags[0].Value"); // TODO: config babel to support optional chaining (instance?.Tags?[0])
  const InstanceId = instance.InstanceId;
  const InstanceType = instance.InstanceType;
  const State = get(instance, "State.Name");
  const AvailabilityZone = get(instance, "Placement.AvailabilityZone");
  const PublicIpAddress = instance.PublicIpAddress;
  const PrivateIpAddress = instance.PrivateIpAddress;

  return {
    Name,
    InstanceType,
    State,
    AvailabilityZone,
    PublicIpAddress,
    PrivateIpAddress,
    InstanceId,
  };
};

module.exports = ec2InstanceModel;

const FaunaService = require("@brianmmdev/faunaservice");

exports.handler = async (event, contest) => {
  const service = new FaunaService(process.env.FAUNA_API_KEY);

  const cities = await service.listRecords("Cities");
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cities),
  };
};

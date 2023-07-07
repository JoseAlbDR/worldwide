const FaunaService = require("@brianmmdev/faunaservice");

exports.handler = async (event, contest) => {
  const service = new FaunaService(process.env.FAUNA_KEY);

  const city = JSON.parse(event.body);

  await service.createRecord("Cities", city);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
    },
  };
};

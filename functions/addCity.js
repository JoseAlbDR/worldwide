const FaunaService = require("@brianmmdev/faunaservice");

exports.handler = async (event, contest) => {
  const service = new FaunaService(process.env.FAUNA_API_KEY);

  const city = JSON.parse(event.body);

  const cityCreated = await service.createRecord("Cities", city);
  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(cityCreated),
  };
};

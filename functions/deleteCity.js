const FaunaService = require("@brianmmdev/faunaservice");

exports.handler = async (event, contest) => {
  const service = new FaunaService(process.env.FAUNA_API_KEY);

  const id = event.queryStringParameters.id;
  const city = await service.deleteRecord("Cities", id);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      "Access-Control-Allow-Methods": "DELETE",
    },
  };
};

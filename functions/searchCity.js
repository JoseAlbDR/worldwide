exports.handler = async (event, contest) => {
  const cityName = event.queryStringParameters.name;

  const city = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${process.env.OW_API_KEY}`
  );

  // const city = await fetch(
  //   `http://api.openweathermap.org/geo/1.0/direct?q=London&appid=${process.env.OW_API_KEY}`
  // );

  const data = await city.json();

  if (!data.length) {
    return {
      statusCode: 404,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Authorization, Content-Type",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        error: `City ${cityName} not found, try another name.`,
      }),
    };
  }

  const { lat } = data[0];
  const { lon: lng } = data[0];
  const coords = { lat, lng };
  console.log(coords);

  return {
    statusCode: 200,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Headers": "Authorization, Content-Type",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(coords),
  };
};

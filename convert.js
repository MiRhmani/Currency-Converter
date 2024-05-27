function run() {
  const params = JSON.parse(Host.inputString());
  const { from, to, amount } = params;
  const apiKey = '14ba3a05495084fa0071f4613b098271';

  let url = `https://api.exchangeratesapi.io/v1/convert?access_key=${apiKey}&from=${from}&to=${to}&amount=${amount}`;
  const request = {
    method: 'GET',
    url,
  };

  const response = Http.request(request);

  if (response.status !== 200) {
    throw new Error(`Failed to convert currency: ${response.body}`);
  }

  const data = JSON.parse(response.body);

  if (!data.success) {
    throw new Error(`Failed to convert currency: ${data.error.message}`);
  }

  Host.outputString(JSON.stringify(data.result));
}

module.exports = { run };

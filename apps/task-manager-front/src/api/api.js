const OptionsByMethod = {
  GET: (options) => ({
    method: options.method,
    headers: options.headers,
  }),
  POST: (options) => ({
    method: options.method,
    headers: options.headers,
    body: options.body
  })
};

const BASE_URL = 'http://localhost:3005/api/v1'

async function sendRequest(requestOptions) {
  const method = requestOptions.method ?? 'GET';
  const prepareOptions = OptionsByMethod[method] ?? function() { return {} }; 

  try {
    const response = await fetch(`${BASE_URL}${requestOptions.endpoint}`, prepareOptions(requestOptions));

    if (!response.ok) {
      throw new Error('Ошибка при выполнении запроса');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Ошибка при выполнении запроса:', error);
    return error;
  }
}

export { sendRequest };
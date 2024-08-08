import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
  methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
});

// Helper method to wait for a middleware to execute before continuing
// @ts-ignore
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    // @ts-ignore
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

// @ts-ignore
export async function corsMiddleware(req, res) {
  // Run the CORS middleware
  await runMiddleware(req, res, cors);
}
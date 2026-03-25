export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Website1234</title>
  <style>
    body { font-family: sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #f0f4ff; }
    .card { background: white; border-radius: 12px; padding: 2rem 3rem; box-shadow: 0 4px 20px rgba(0,0,0,0.1); text-align: center; }
    h1 { color: #f6821f; }
    p { color: #555; }
  </style>
</head>
<body>
  <div class="card">
    <h1>🚀 Hello from Cloudflare Workers!</h1>
    <p>This is <strong>website1234</strong>, deployed at the edge.</p>
    <p>URL: <code>${request.url}</code></p>
  </div>
</body>
</html>`;
    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  },
};

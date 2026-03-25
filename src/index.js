export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Website1234</title>
  <style>
    :root {
      --bg: #f0f4ff;
      --card-bg: #ffffff;
      --text: #555;
      --shadow: rgba(0,0,0,0.1);
    }
    [data-theme="dark"] {
      --bg: #1a1a2e;
      --card-bg: #16213e;
      --text: #ccc;
      --shadow: rgba(0,0,0,0.5);
    }
    @media (prefers-color-scheme: dark) {
      :root:not([data-theme="light"]) {
        --bg: #1a1a2e;
        --card-bg: #16213e;
        --text: #ccc;
        --shadow: rgba(0,0,0,0.5);
      }
    }
    * { transition: background 0.3s, color 0.3s; }
    body {
      font-family: sans-serif;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      margin: 0;
      background: var(--bg);
    }
    .card {
      background: var(--card-bg);
      border-radius: 12px;
      padding: 2rem 3rem;
      box-shadow: 0 4px 20px var(--shadow);
      text-align: center;
    }
    h1 { color: #f6821f; }
    p { color: var(--text); }
    #theme-toggle {
      position: fixed;
      top: 1rem;
      right: 1rem;
      background: var(--card-bg);
      border: 2px solid #f6821f;
      border-radius: 50%;
      width: 2.5rem;
      height: 2.5rem;
      font-size: 1.2rem;
      cursor: pointer;
      box-shadow: 0 2px 8px var(--shadow);
      display: flex;
      align-items: center;
      justify-content: center;
      line-height: 1;
    }
    #theme-toggle:hover { transform: scale(1.1); }
  </style>
</head>
<body>
  <button id="theme-toggle" title="Toggle dark mode">🌙</button>
  <div class="card">
    <h1>🚀 Hello from Cloudflare Workers!</h1>
    <p>This is <strong>website1234</strong>, deployed at the edge.</p>
    <p>URL: <code>${request.url}</code></p>
  </div>
  <script>
    const root = document.documentElement;
    const btn = document.getElementById('theme-toggle');

    // Determine initial theme
    const saved = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = saved ? saved === 'dark' : prefersDark;

    function applyTheme(dark) {
      root.setAttribute('data-theme', dark ? 'dark' : 'light');
      btn.textContent = dark ? '☀️' : '🌙';
      localStorage.setItem('theme', dark ? 'dark' : 'light');
    }

    applyTheme(isDark);

    btn.addEventListener('click', () => {
      const currentlyDark = root.getAttribute('data-theme') === 'dark';
      applyTheme(!currentlyDark);
    });
  </script>
</body>
</html>`;
    return new Response(html, {
      headers: { "Content-Type": "text/html;charset=UTF-8" },
    });
  },
};

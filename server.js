const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');

const port = Number(process.env.PORT) || 3000;
const root = __dirname;

// The original pages remain untouched.  This map gives each one a stable URL
// while they are all served by the same Node process (and therefore one port).
const pages = {
  '/beranda': 'beranda/code.html',
  '/ensiklopedia': 'ensiklopedia/code.html',
  '/kalkulator-medis': 'kalkulator-medis/code.html',
  '/tanya-ai': 'tanya-ai/code.html',
  '/cek-gejala': 'cek-gejala/code.html',
};

// Each original page already labels its cross-page links with data-path.
// The bridge is added only to the HTTP response, so source files are not edited.
const navigationBridge = `
<script>
  (() => {
    const routes = {
      beranda: '/beranda',
      ensiklopedia: '/ensiklopedia',
      'kalkulator-medis': '/kalkulator-medis',
      'tanya-ai': '/tanya-ai',
      'cek-gejala': '/cek-gejala'
    };

    document.addEventListener('click', (event) => {
      const link = event.target.closest('a[data-path]');
      const destination = link && routes[link.dataset.path];
      if (!destination || event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      event.preventDefault();
      window.location.assign(destination);
    });
  })();
</script>`;

function sendHtml(response, file) {
  fs.readFile(path.join(root, file), 'utf8', (error, html) => {
    if (error) {
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end('Halaman tidak dapat dibaca.');
      return;
    }

    response.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
    response.end(html.replace('</body>', `${navigationBridge}</body>`));
  });
}

const server = http.createServer((request, response) => {
  const pathname = new URL(request.url, `http://${request.headers.host}`).pathname;

  if (pathname === '/') {
    response.writeHead(302, { Location: '/beranda' });
    response.end();
    return;
  }

  const file = pages[pathname.replace(/\/$/, '')];
  if (file) {
    sendHtml(response, file);
    return;
  }

  response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
  response.end('Halaman tidak ditemukan.');
});

server.listen(port, () => {
  console.log(`SehatPedia berjalan di http://localhost:${port}`);
});

module.exports = server;

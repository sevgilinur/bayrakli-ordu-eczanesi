const http = require('http');
const https = require('https');
const fs = require('fs');
const path = require('path');
const root = 'C:/Users/BURÇE/Desktop/6';
const types = { '.html':'text/html','.css':'text/css','.js':'application/javascript','.jpg':'image/jpeg','.jpeg':'image/jpeg','.png':'image/png','.webp':'image/webp','.ico':'image-x-icon','.json':'application/json' };
const handler = (req,res)=>{
  let f = req.url === '/' ? '/index.html' : decodeURIComponent(req.url.split('?')[0]);
  const fp = path.join(root, f);
  fs.readFile(fp, (err,data)=>{
    if(err){ res.writeHead(404); res.end('Not found'); return; }
    const ext = path.extname(f).toLowerCase();
    res.writeHead(200, { 'Content-Type': types[ext]||'application/octet-stream', 'Cache-Control':'no-cache' });
    res.end(data);
  });
};
http.createServer(handler).listen(3000);
const pfx = fs.readFileSync(path.join(root, 'localhost.pfx'));
https.createServer({ pfx, passphrase:'password' }, handler).listen(3443);

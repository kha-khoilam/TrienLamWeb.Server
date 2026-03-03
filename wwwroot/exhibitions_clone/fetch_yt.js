const https = require('https');

https.get('https://html.duckduckgo.com/html/?q=site:youtube.com+"T1+vs+BLG"+game+5+highlights', (res) => {
    let data = '';
    res.on('data', (d) => data += d);
    res.on('end', () => {
        // extract youtube IDs
        const regex = /v=([a-zA-Z0-9_-]{11})/g;
        let match;
        const ids = new Set();
        while ((match = regex.exec(data)) !== null) {
            ids.add(match[1]);
        }
        console.log(Array.from(ids));
    });
}).on('error', (e) => {
    console.error(e);
});

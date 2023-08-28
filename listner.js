const https = require('hyco-https');

const ns = "vgaradeBusTest";
const path = "vgarade-conn";
const keyrule = "RootManageSharedAccessKey";
const key = "gMYrDrELWwGXBLUIhcGLL5CGT77tJfvBI+ARmEo4S6U=";

var uri = https.createRelayListenUri(ns, path);
var server = https.createRelayedServer(
    {
        server : uri,
        token : () => https.createRelayToken(uri, keyrule, key)
    },
    (req, res) => {
        console.log('request accepted: ' + req.method + ' on ' + req.url);
        res.setHeader('Content-Type', 'text/html');
        res.end('<html><head><title>Hey!</title></head><body>Relayed Node.js Server!</body></html>');
    });

server.listen( (err) => {
        if (err) {
          return console.log('something bad happened', err)
        }
        console.log(`server is listening on ${port}`)
      });

server.on('error', (err) => {
    console.log('error: ' + err);
});
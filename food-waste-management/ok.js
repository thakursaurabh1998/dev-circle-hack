const https = require('https');

let myobj = {
    'location': {
        'latitude': '1.24',
        'longitude': '2.435'
    },
    'email': 'dasfas',
    'name': 'asdfaasdfa',
    'foodType': 'gfhg',
    'foodQuantity': '5',
    'address': 'asdgeryh',
    'contact': '86486'
}

var postData = JSON.stringify(myobj);

var options = {
    hostname: 'food-server.herokuapp.com',
    path: '/donors',
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'Content-Length': postData.length
    }
};

var req = https.request(options, (res) => {
    console.log('statusCode:', res.statusCode);
    console.log('headers:', res.headers);

    res.on('data', (d) => {
        process.stdout.write(d);
    });
});

req.on('error', (e) => {
    console.error("Error"+e);
});

req.write(postData);
req.end();
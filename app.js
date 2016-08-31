var mongoClient = require('mongodb').MongoClient,
    assert = require('assert');


mongoClient.connect('mongodb://rafi:999rmdb999@ds019856.mlab.com:19856/rmdb', function(err, db) {

    assert.equal(null, err);
    console.info("Successfully connected to server!");


    db.collection('movies').find({}).toArray(function(err, docs) {
        
        docs.forEach(function(doc) {
            console.log(doc.title);
        });
        db.close();
    });

    console.log('Called find()');
});


/*var express = require('express');

var http = require('http');

var connection = http.createServer(function(request, response) {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.end('Connected');
});

connection.listen(3000);
console.log('listening to port 3000');*/
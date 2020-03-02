const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flights',
//to avoid deprecation warnings
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}
);

const db = mongoose.connection;

db.on('connected', function (){
    console.log(`connected to ${db.name} MongoDB at ${db.host}:${db.port}`);
});

//in order for the code in here to run, 
//it must connect to the server.js by requiring it in..
//the server.js file
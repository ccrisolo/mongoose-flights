const Flight = require('../models/flight');
const Ticket = require('../models/ticket')



module.exports = {
    index,
    new: newFlight,
    create,
    show
}


function index(req, res) {
    Flight.find({}, function(err, flightsSchema) {
        res.render('flights/index', { 
            title: "Flights",
            flightsSchema
        });
    });
}

function show(req, res) {
    console.log(req.params.id);
    Flight.findById(req.params.id)
    .populate('tickets')
    .exec(function(err, flight){
        res.render('flights/show', {title: "Flights Details", flight})
    })
    // Flight.findById(req.params.id, function(err, flight) { //flight is referenced by show.ejs bc we use flight.flightNo, or flight.airline in the ejs file. You can pass in toast as long as you change flight.flightNo to toast.flightNo
    //     Ticket.find({flight: flight._id}, function(err, tickets) {
    //         res.render('flights/show', { title: "Flights Details", flight})
    //     });
    // });
}



function newFlight(req, res) {
    res.render('flights/new');
}

function create(req, res) {
    req.body.airline = req.body.airline;
    req.body.flightNo = req.body.flightNo;
    req.body.departs = req.body.departs;
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if(err) return res.render('flights/new');
        console.log(flight);
        res.redirect(`/flights/${flight._id}`);
    });
}

//now create the view (ejs file)for the controller to..
//display the info on


//don't forget to export the functions in this file
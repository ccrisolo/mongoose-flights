const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    create,
    new: newTicket
}

function create(req, res) {
    // Ticket.create(req.body, function(err, tickets){
    //     res.redirect('/tickets/new')
    // });
    Flight.findById(req.params.id, function(err, flight) {
        const ticket = new Ticket(req.body);
        flight.tickets.push(ticket);
        ticket.save(function(err) {
            flight.save(function(e) {
                console.log(ticket)
                if (e) res.redirect(`back`)
                res.redirect(`/flights/${flight._id}`);
            })
        })
    })
}

function newTicket(req, res) {
    Flight.findById(req.params.id, function(err, flight) {
        res.render('tickets/new', {
            title: 'Add Ticket',
            flight

        });
    })
}
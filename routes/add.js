var data = require("../data.json");

exports.addFriend = function(req, res) {    
	console.log(data);
	res.render('add',data);
    
    var name = req.query.name;
    var description = req.query.description;
    var newData = {
        "name": name,
        "description": description,
        "imageURL": "http://bridgesprep.org/wp-content/uploads/2013/10/Facebook-no-profile-picture-icon-620x389.jpg"
    };
    
    data["friends"].push(newData);
 }
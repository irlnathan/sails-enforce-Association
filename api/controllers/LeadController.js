/**
 * LeadController.js 
 *
 * @description ::
 * @docs        :: http://sailsjs.org/#!documentation/controllers
 */

module.exports = {

	foo: function(req, res) {

		User.update({id: 1}, {lead: 1}).exec(function(err, user){

			if (err) console.log(err);

			console.log(user);

			res.send(200);


		})
	},

	bar: function(req, res) {

		User.update({id: 2}, {lead: 1}).exec(function(err, user){

			if (err) console.log(err);

			console.log(user);

			res.send(200);


		})
	}
	
};

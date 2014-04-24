/**
 * Bootstrap
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.bootstrap = function (cb) {

  // It's very important to trigger this callack method when you are finished 
  // with the bootstrap!  (otherwise your server will never lift, since it's waiting on the bootstrap)


  User.count().exec(function(err, count) {

  	if(err) {
      sails.log.error('Already have data.');
      return cb(err);
    }

  	if(count > 0) return cb();

	  User.create({name: 'Nikola Tesla'}).exec(function(err, user){});

	  User.create({name: 'Neal Stephenson'}).exec(function(err, user){});

	  User.create({name: 'Boris Karloff'}).exec(function(err, user){});

	  Lead.create({name: 'Thomas Edison'}).exec(function(err, user){});

	  Lead.create({name: 'Hero Protagonist'}).exec(function(err, user){});

	  Lead.create({name: 'Aimee Mann'}).exec(function(err, user){});

	  Lead.create({name: 'Guy Montag'}).exec(function(err, user){});

	  Lead.create({name: 'Mustapha Mond'}).exec(function(err, user){});

	  Lead.create({name: 'Winston Smith'}).exec(function(err, user){});

	  Lead.create({name: 'Emanuel Goldstein'}).exec(function(err, user){});

	  Lead.create({name: 'John Galt'}).exec(function(err, user){});

	  Lead.create({name: 'Robert Frost'}).exec(function(err, user){});

	  Lead.create({name: 'Graham Parker'}).exec(function(err, user){});

	  cb();

    });

  
};
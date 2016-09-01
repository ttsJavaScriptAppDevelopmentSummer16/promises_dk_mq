$(document).ready(function() {

	$('#button').on("click", function() {
		var name = $("#userInput").val();

		var p = new Promise(function(resolve, reject){
		     $.get('http://jsonplaceholder.typicode.com/users?username=' + name, function(users){
		         if (users.length > 0) {
		         	var website = users[0].website;
		         	resolve(website);
		         } else {
		         	reject();
		         }
		    });
		});

		p.then(function(res) {
		 	console.log(res);
		 	$('#content').append('<p>The website for ' + name + ' is ' + res + '</p>');
		}, function() {
  			console.log('Fail!');
  			$('#content').append('<p>Sorry, there is no user with the username ' + name + '</p>');  
		});

	});

});



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
		}, function() {
  			console.log('Fail!');  
		});
	});

});



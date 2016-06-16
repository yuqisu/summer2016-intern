var root = 'http://jsonplaceholder.typicode.com';
var search=$(location).attr('search');
var id=search.substring(8);
$.ajax({
    url: root + '/users/'+id,
  	method: 'GET'
  	}).then(function(data) {
	console.log(data)
	$('#postpage ul').append("<li>Name: "+ data.name+ "<br> UserName: " + data.username +"<br> Email: "+ data.email +"<br>Phone: " + data.phone +"</li>");	
  	
});
  	
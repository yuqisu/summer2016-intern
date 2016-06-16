var root = 'http://jsonplaceholder.typicode.com';
var search=$(location).attr('search');
var id=search.substring(8);
$.ajax({
    url: root + '/posts/'+id,
  	method: 'GET'
  	}).then(function(data) {
	console.log(data);

	$('#postpage ul').append("<li><a href= 'userpage.html?userID="+data.userId+ "'><h3>"+ data.title + "</h3>UserID: " + data.userId 
		+"<br> ID: "+ data.id +"</p> <br>Body: " + data.body +"</a></li>");	
	
  	
});
  	
var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
url: root + '/posts',
method: 'GET'
}).then(function(data) {	
	console.log(data);
	var posts = [];
	for (var i=0; i<10; i++){
		posts[i] = data[i];
	};

	$(posts).each(function(index,post){
		console.log(index,post);
		$('#post ul').append("<li><a href='postpage.html?postID=" +post.id+ "'>"+ post.title + "<br>" + post.userId + "</a></li>" );	
		

	})		 	
 });





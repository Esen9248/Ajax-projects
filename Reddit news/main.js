var images;
$('#mainbtn').click(function(){
	$(this).text('Загружается...');
$.get("https://www.reddit.com/r/gaming.json?limit=20",
 function (response){
 	$('#mainbtn').text('Загружено')
 	var post = response.data.children;
	$.each(post, function(){
		if(this.data.preview == null){
			images = "404.jpg";
 		} else{
 			images = this.data.preview.images['0'].source.url;
 	};
		$('#maindiv').append('<div class="posts">' + 
		'<img src=' + images +
        '/>' +
		'<h4>' + this.data.title + '</h4>' +
		'</div>');
    });
});
});
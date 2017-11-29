$('#mainBtn').click(function(){
	$('#mainBtn').text('Searching...');
	$('#mainDiv').html('')
	var DescriptionUrlFromVal = encodeURIComponent($('#DescriptionInp').val());
	var LocationUrlFromVal = encodeURIComponent($('#LocationInp').val());
	$.ajax({
		method:"GET",
		url: `https://jobs.github.com/positions.json?description=${DescriptionUrlFromVal}&location=${LocationUrlFromVal}`,
		dataType:"jsonp",
	}).done(function(data){
		$('#mainBtn').text('Search');
		if(data.length == 0){
			$('#mainDiv').html('<h2>'+`Nothing found near ${$('#LocationInp').val()}`+'</h2>')
		} else{
			$.each(data, function(){
				$('#mainDiv').append('<div class="posts"><h3>' +
					this.title + '</h3><br><h4>' +
					'Created at: ' + this.created_at + '<br>' +
					'Location: ' + this.location + '<br>' +
					'Company: ' + this.company +
					'</h4></div>')
			});
		}
}).fail(function( jqXHR, TextStatus){
	console.log(TextStatus)
})
})

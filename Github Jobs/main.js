$('#mainBtn').click(function(){
	$('#mainBtn').text('Searching...');
	var DescriptionUrlFromVal = encodeURIComponent($('#DescriptionInp').val());
	var LocationUrlFromVal = encodeURIComponent($('#LocationInp').val());
	$.ajax({
		method:"GET",
		url: `https://jobs.github.com/positions.json?description=${DescriptionUrlFromVal}&location=${LocationUrlFromVal}`,
		dataType:"jsonp",
	}).done(function(done){
		$('#mainBtn').text('Search');
		if(done.lengh == 0){
			console.log('hey')
		} else{
			$.each(done, function(){
				$('#mainDiv').append('<div class="posts"><h3>' +
					this.title + '</h3><br><h4>' +
					'Created at: ' + this.created_at + '<br>' +
					'Location: ' + this.location + '<br>' +
					'Company: ' + this.company +
					'</h4></div>')
			});
		}
});
})

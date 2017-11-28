$('#mainbtn').click(function(){
	$('#maindiv').html('');
	$('#title').html('');
	$('#mainbtn').text('Имем...');
	var UrlFromVal = encodeURIComponent($('#maininp').val());
	$.get(`https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22${UrlFromVal}%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`,
		function(response){
			$('#mainbtn').text('Найти');
			var title = response.query.results.channel.location;
			$('#title').append(title.city + ', ' + title.country)
			$.each(response.query.results.channel.item.forecast, function(){
				$('#maindiv').append('<div class="ForecastDays"><h4>' + 
					'Дата: ' + this.date + '<br>' +
					'День недели: '+ this.day + '<br>' +
					'Максимальная t: ' + eval((this.high -32) * 5/9).toFixed(0) + '°C<br>' +
					'Минимальная t: ' + eval((this.low -32) * 5/9).toFixed(0) + '°C<br>' +
					 this.text +
					'</h4></div>')
			})
		})
})
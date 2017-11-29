$('#mainbtn').click(function(){
	$(this).text('Ищем...')
	$('#maindiv').html('');
	var EncodedUrl = encodeURIComponent($('#maininp').val())
	$.get(`https://anapioficeandfire.com/api/characters?name=${EncodedUrl}`,
		function(response){
			$('#mainbtn').text('Найти');
			$('#maindiv').append('<h4>Имя: ' +
			 response["0"].name + '<br>Положение: ' +
			 response['0'].titles['0'] + '<br>Культура: ' +
			 response['0'].culture + '<br>Прозвища: ' +
			 response['0'].aliases + '</h4>')
		})
})
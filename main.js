$(document).on('ready', function() {

	$('#quote-form').on('submit', function(){
		var quote = $(this).find('#quote-area').val();
		// console.log($(this).find('#quote-area').val());
		var quoteItem = $('<li></li>');
		var quoteContent = $('<blockquote></blockquote>');
		quoteContent.text(quote);
		quoteItem.append(quoteContent)
		$(this).closest('.section').find('.quote-list').append(quoteItem);

		$(this).find('#quote-area').val('');
		$(this).find('#quote-area').focus();

		return false;
	})
  
});






// 
// 
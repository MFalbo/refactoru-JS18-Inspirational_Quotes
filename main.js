$(document).on('ready', function() {

	$('#quote-form').on('submit', function(){
		var quote = $(this).find('#quote-area').val();
		var author = $(this).find('#quote-author').val();
		// console.log(author);
		var quoteItem = $('<li></li>');
		var quoteContent = $('<blockquote></blockquote>');
		var quoteAuthor = $('<cite>');
		quoteContent.text(quote);
		quoteAuthor.text(author);
		quoteItem.append(quoteContent).append(quoteAuthor);
		$(this).closest('.section').find('.quote-list').append(quoteItem);

		$(this).find('#quote-area').val('');
		$(this).find('#quote-area').focus();

		return false;
	})

	$('.page-flip').click(function(){
		$(this).closest('.quote-container').find(".personal-quotes").toggleClass('front-flip');
		$(this).closest('.quote-container').find(".shared-quotes").toggleClass('back-flip');
	});

	$('#form-toggle').click(function(){
		$(this).closest('.section').find('#quote-form').slideToggle();
	});
  
});






// 
// 
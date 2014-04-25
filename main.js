// Quote constructor
var Quote = function(name, quote){
	this.author = name;
	this.quote = quote;
};

// Function to create a DOM elements with values retrieved from a quote object
var quoteAppend = function(obj){
	// create individual HTML elements
	var quoteItem = $('<li></li>');
	var quoteContent = $('<blockquote></blockquote>');
	var quoteAuthor = $('<cite class=author-name>');
	var shareButton = $('<button class="share">Share</button>');

	// Apply retrieved values (text) to html elements
	quoteContent.text(obj.quote);
	quoteAuthor.text(obj.author);

	// Append html elements together in proper order
	quoteItem.append(quoteContent).append(quoteAuthor).append(shareButton);
	// console.log('a', $(this));

	// Store an arbitrary data tag to the created DOM element (li) that can be referenced later
	quoteItem.data('key', obj);
	// Return full constructed html element to be appended to the DOM
	return quoteItem;
}

// Declare an empty quotes array that will consist of all created quote objects
var quotesArr = [];

$(document).on('ready', function() {

	// Event handler to add user inputted quotes to user's 'personal quotes' section
	$('#quote-form').on('submit', function(){
		// Retrieve user inputted values of quote and author
		var quote = $(this).find('#quote-area').val();
		var author = $(this).find('#quote-author').val();

		// Create a new instance of a quote object
		var currentQuote = new Quote(author, quote);
		quotesArr.push(currentQuote);
		// console.log(quotesArr);
		
		// Construct new DOM element with 'quoteAppend' function.  Append returned element to the DOM.
		var quoteItem = quoteAppend(currentQuote);
		$(this).closest('.section').find('.personal-quotes .quote-list').append(quoteItem);

		// Reset input fields and focus
		$(this).find('#quote-area').val('');
		$(this).find('#quote-author').val('');
		$(this).find('#quote-area').focus();


		// Push full array of quotes to local storage
		localStorage.setItem('all quotes', JSON.stringify(quotesArr));

		return false;
	});

	// Event handler to populate friends' pages with shared quotes
	$(document).on('click', '.share', function(){
		// Use jquery data method to retrieve object instance from closes li when share button is clicked
		var sharedQuote = $(this).closest('li').data('key');
		console.log(sharedQuote);
		
		// Construct new DOM element with 'quoteAppend' function.  Append returned element to the DOM.
		var quoteItem = quoteAppend(sharedQuote);
		$(this).closest('.container').find('.shared-quotes .quote-list').append(quoteItem);
	})

	// Event handler to swap between personal quotes and shared quotes on button click
	$('.page-flip').click(function(){
		$(this).closest('.quote-container').find(".personal-quotes").toggleClass('front-flip');
		$(this).closest('.quote-container').find(".shared-quotes").toggleClass('back-flip');

		var pQuotes = $(this).closest('.quote-container').find('.personal-quotes').height();
		var sQuotes = $(this).closest('.quote-container').find('.shared-quotes').height();
		console.log('a',pQuotes.toString(), 'b', sQuotes.toString());

		if(sQuotes > pQuotes){
			$(this).closest('.quote-container').css('height', sQuotes.toString() + 'px');

		}
		else{
			$(this).closest('.quote-container').css('height', pQuotes.toString() + 'px');
		}
	});

	// Event handler to show and hide forms for user to input new quotes
	$('#form-toggle').click(function(){
		$(this).closest('.section').find('#quote-form').slideToggle();
	});




	// quotesArr = localStorage.getItem('all quotes');
	// JSON.parse(quotesArr);
	// console.log(quotesArr);
	// for(var i=0; i<quotesArr.length; i++){
	// 	// Reappend quote properties to appropriate quote section;
	// }

  
});






// TO DO
// create class constructors
// pull quote construction functionality into a separate function and call it in submit handler
// Add quote delete button
// Add Random Quote Selection button
// Use jquery data method to retrieve object instance from closes li when share button is clicked
// Write a function to find the height of shared quotes and personal quotes, find which is larger,
	// and force the height of the containers to the larger size.



















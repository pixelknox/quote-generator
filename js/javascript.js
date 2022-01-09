const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');



let apiQuotes = [];

// show loader

function loading(){
loader.hidden = false;
quoteContainer.hidden = true;

}

// hide loader

function complete(){
quoteContainer.hidden = false;
loader.hidden = true;

}


//show New Qoute

function newQuote(){
loading();
// Pick a random quote from apiQuotes array

const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

// to check if author is blank && with unknown

if(!quote.author){
    authorText.textContent = 'unknown';
}else
{
    authorText.textContent = quote.author;
}

// check quote lenght
if(quote.text.length > 120){

    quoteText.classList.add('long-quote');
}else{
    quoteText.classList.remove('long-quote');
}

//set quote, Hide loader
quoteText.textContent = quote.text;

complete();
}

// Get quotes from API
async function getQuotes(){
loading();
const apiUrl = 'https://type.fit/api/quotes';

try{
const response = await fetch(apiUrl);
apiQuotes = await response.json();
newQuote(); 

}catch (error)
{
    // Catch error here
}

}


// tweet a quote

function tweetQuote(){
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event listners

newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);





// on load
getQuotes();






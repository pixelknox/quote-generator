const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter-button');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

// loader functios
// run loader
function loading(){
quoteContainer.hidden = true;
loader.hidden = false;
};

// loading completed
function completed(){
quoteContainer.hidden = false;
loader.hidden = true;
};




// fetch data from API

async function getQuote(){
loading();
const apiUrl = 'https://type.fit/api/quotes';

// to capture data in json

const response = await fetch(apiUrl);
const data = await response.json();
const apiQuotes = data[Math.floor(Math.random() * data.length)];

// now to run try and catch condition

try{

    if(apiQuotes.text.length > 120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.innerText = apiQuotes.text;


    if(!apiQuotes.author){
        authorText.innerText = 'Unknown';
        
    }else{
        authorText.innerText = apiQuotes.author;
    }


}catch(error){
    getQuote();
    console.log('whoops,No Quotes fetched',error);
}
completed();
};

// twitter post function
function tweetQuote(){
const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.innerText} - ${authorText.innerText}`;
window.open(twitterUrl,'_blank');
};

// button clicks events
twitterBtn.addEventListener('click',tweetQuote);
newQuoteBtn.addEventListener('click',getQuote);

// on laod
getQuote();
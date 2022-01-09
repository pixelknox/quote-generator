// let apiQuotes = [];


// //show New Qoute

// function newQuote(){
// // Pick a random quote from apiQuotes array

// const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
// console.log(quote);

// }

// // Get quotes from API
// async function getQuotes(){
// const apiUrl = 'https://type.fit/api/quotes';

// try{
// const response = await fetch(apiUrl);
// apiQuotes = await response.json();
// newQuote();

// }catch (error)
// {
//     // Catch error here
// }

// }

// // on load
// // getQuotes();


//show New Qoute locally

function newQuote(){
    // Pick a random quote from apiQuotes array
    
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
    
    }
    
    // on load
    newQuote();


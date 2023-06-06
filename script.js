// Get quotes form api
// so we will use an asynchronous fetch request with try catch sequence 
const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');



let apiQuotes = [];

function newQuote(){
    const quote=apiQuotes[Math.floor(Math.random * apiQuotes.length)];
    // to check if the author field is blank
    if(!quote.author){
        authorText.textContent='Unknown';
    }
    else{
    authorText.textContent=quote.content;
    }
    
    quoteText.textContent=quote.text;
}


async function getQuotes() {
    const apiUrl='https://api.quotable.io/random';
    try{
        const response = await fetch(apiUrl);
        apiQuotes= await response.json();
        // console.log(apiQuotes)
    }catch(error){
        console.log("you have an error");
    }
}

// On load
getQuotes();
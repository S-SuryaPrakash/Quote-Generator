// Get quotes form api
// so we will use an asynchronous fetch request with try catch sequence 
const quoteContainer=document.getElementById('quote-container');
const quoteText=document.getElementById('quote');
const authorText=document.getElementById('author');
const twitterBtn=document.getElementById('twitter');
const newQuoteBtn=document.getElementById('new-quote');
const loader=document.getElementById('loader');

function loading(){
    loader.hidden=false
    quoteContainer.hidden=true;
}

function complete(){
    if(!loader.hidden){
        quoteContainer.hidden=false;
        loader.hidden=true;
    }
}

let apiQuotes = [];

function newQuote(){
    const quote=apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // to check if the author field is blank
    console.log(quote)
    if(!quote.author){
    authorText.textContent='Unknown';
    }
    else{
        authorText.textContent=quote.author;
    }
    if(quote.text.length>120){
        quoteText.classList.add('long-quote');
    }else{
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent=quote.text;
}


async function getQuotes() {
    loading();
    const apiUrl='https://type.fit/api/quotes';
    try{
        const response = await fetch(apiUrl);
        apiQuotes= await response.json();
        newQuote();
        complete()
    }catch(error){
        getQuotes();
    }
}

// 
function tweetQuote(){
    const twitterUrl=`https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank')
}
// event listeners
newQuoteBtn.addEventListener('click',newQuote);
twitterBtn.addEventListener('click',tweetQuote)

// On load
getQuotes();
// loading();
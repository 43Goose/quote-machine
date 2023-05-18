import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { useEffect, useState } from "react";
import './index.css';


const quoteUrl = 'https://gist.githubusercontent.com/43Goose/c78d683d8a3cb0aab8b048d6f5999f4e/raw/3e3b0ce5620a865d5c82ed4782fd966c589e1027/quotes.json';
const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857',
  '#242424'
];

const App = () => {
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const fetchQuote = async () => {
    try {
      // Uses fetch api to grab quotes object from json db... I think
      const fetchRes = await fetch(quoteUrl).then(res => res.json())
      const quotes = fetchRes.quotes;
        
      // Picks a random quote from the quotes object and formats it
      const randomIndex = Math.floor(Math.random() * Object.keys(quotes).length);
      const quote = [quotes[randomIndex].author, quotes[randomIndex].quote];

      setQuote(quote);
      document.getElementById('tweet-quote').href = 'https://twitter.com/intent/tweet?hashtags=quotes&text=' + encodeURIComponent('"' + quote[1] + '" -' + quote[0]);
    } catch(error) {
      console.log(error);
      setIsError(true);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchQuote();
  }, [])

  const handleClick = () => {
    fetchQuote();

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
    document.body.style.color = randomColor;
    document.getElementById('new-quote').style.backgroundColor = randomColor;
    document.getElementById('tweet-quote').style.backgroundColor = randomColor;
    document.getElementById('copy-quote').style.backgroundColor = randomColor;
  }

  const copyText = () => {
    const formattedQuote = '"' + quote[1] + '" -' + quote[0];
    navigator.clipboard.writeText(formattedQuote);

    alert("Copied: " + formattedQuote);
  }

  if(isError) {
    return (
      <h1 style={{color: "white"}}>ERROR!</h1>
    );
  }

  return (
    <div id='wrapper'>
        <div id='quote-box'>
            <div className='quote-text'>
                <span id='text'>
                    <i id='quote-mark' className='fa-solid fa-quote-left left' />
                    {isLoading ? 'Loading...' : quote[1]}
                    <i id='quote-mark' className='fa-solid fa-quote-right right' />
                </span>
            </div>
            <div className='quote-author'>
                {'- '}
                <span id='author'>{isLoading ? 'Loading...' : quote[0]}</span>
            </div>
            <div id='buttons-container'>
                <a className='button' id='tweet-quote' title='Tweet this quote!' target='_blank' href=''>
                    <i className='fa-brands fa-twitter' />
                </a>
                <a className='button' id='copy-quote' title='Copy quote' onClick={copyText}>
                    <i className='fa-sharp fa-regular fa-clipboard' />
                </a>
                <button id='new-quote' className='button' onClick={handleClick}>New Quote</button>
            </div>
        </div>
        <div className='footer'>
            <p>by goose</p>
        </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById(('root')));
root.render(
    <App />,
);
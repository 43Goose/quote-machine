import './quote_machine.css';
import { useEffect, useState } from "react";

const quoteUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

const QuoteMachine = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
      const fetchQuote = async () => {
        try {
          // Uses fetch api to grab quotes object from json db... I think
          const fetchRes = await fetch(quoteUrl).then(res => res.json())
          const quotes = fetchRes.quotes;
          
          // Picks a random quote from the quotes object and formats it
          const randomIndex = Math.floor(Math.random() * Object.keys(quotes).length);
          const q = [quotes[randomIndex].author, quotes[randomIndex].quote];

          console.log(q);
        } catch(error) {
          console.log(error);
        }
      };
      fetchQuote();
    }, [])

    const handleClick = () => {
    }

    return (
      <div id="quote-box">
        <h1 id="text">Quote:</h1>
        <h2 id="author">Author:</h2>
        <div id="buttons-container">
          <a id="tweet-quote" />
          <a id="copy-qoute" />
          <button id="new-quote" onClick={handleClick}>New Quote!</button>
        </div>
      </div>
    );
  }

  export default QuoteMachine;
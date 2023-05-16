import { useState } from "react";

function NewQuote() {
  return $.ajax({
    headers: {
      Accept: 'application/json'
    },
    url: 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',
    success: function (jsonQuotes) {
      if (typeof jsonQuotes === 'string') {
        quotesData = JSON.parse(jsonQuotes);
        console.log('quotesData');
        console.log(quotesData);
      }
    }
  });
}

const QuoteMachine = () => {
    const [quote, setQuote] = useState('');

    const handleClick = () => {
      setQuote(quote);
    }

    return (
      <div id="quote-box">
        <h1 id="text"></h1>
        <h2 id="author" />
        <div id="buttons-container">
          <a id="tweet-quote" />
          <a id="copy-qoute" />
          <button id="new-quote" />
        </div>
      </div>
    );
  }

  export default QuoteMachine;
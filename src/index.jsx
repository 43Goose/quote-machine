import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import QuoteMachine from "./quote_machine";
import './index.css'

/* async function NewQuote() {
    const quoteUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    
    // Uses fetch api to grab quotes object from json db... I think
    const fetchRes = await fetch(quoteUrl).then(res => res.json())
    const quotes = fetchRes.quotes;

    // Picks a random quote from the quotes object and formats it
    const randomIndex = Math.floor(Math.random() * Object.keys(quotes).length);
    const q = [quotes[randomIndex].author, quotes[randomIndex].quote];
  
    return q;
} */

function Test(){
    return (
        <>
            <QuoteMachine />
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById(('root')));
root.render(
    <Test />,
);
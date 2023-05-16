import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import './index.css'

const quoteUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';

function Test(){
    console.log(RenderQuote());
    return (
        <h1>Test</h1>
    );
}

async function FetchTest() {
    try {
        let response = await fetch(quoteUrl)
        .then(res => res.json());
        return response.quotes;
    } catch(error) {
        console.log(error);
    }
}

async function RenderQuote() {
    const quotes = await FetchTest();
    let q = '';
    quotes.forEach(quote => {
        let infoSegment = "Quote: " + quote.quote + " Author: " + quote.author + " || ";
        q += infoSegment;
    });

    return q;
}

const root = ReactDOM.createRoot(document.getElementById(('root')));
root.render(
    <StrictMode>
        <Test />
    </StrictMode>,
);
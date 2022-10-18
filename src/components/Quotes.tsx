import { useEffect, useState } from "react";
import { Quote } from '../models/Quote';
import { getQuote } from "../services/QuoteService";


export function Quotes() {

    const [quotesData, setQuotesData] = useState<Quote[]>([]);

    useEffect(() => {
        getQuote().then((response) => {
            const { data } = response;
            setQuotesData(data);
        });
    }, [])


    return (
        <div className="Quotes">
            {quotesData.map((quote) => (
            <ul>
                <li>{quote.text}</li>
                <li>{quote.author}</li>
            </ul>
            ))}
        </div>
    );
}
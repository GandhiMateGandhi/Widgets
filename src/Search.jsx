import React, {useEffect, useState} from 'react';
import axios from 'axios';


const Search = () => {
    const [term, setTerm] = useState('scrubs');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState([]);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term])

    useEffect(() => {
        const search = async () => {
            const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                },
            });

            setResults(data.query.search)
        };
        if (debouncedTerm) {
            search();
        }
    }, [debouncedTerm]);

    const renderedResults = results.map(result => {
        return (
            <div className="item" key={result.pageid}>
                <div className="right floated content">
                    <a className="ui button"
                       href={`https://en.wikipedia.org?curid=${result.pageid}`}
                    >Link</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}/>
                </div>
            </div>
        )
    })

    return (
        <div className="ui segment">
            <div className="ui form">
                <div className="field">
                    <label htmlFor="search">Enter search term</label>
                    <input
                        value={term}
                        onChange={(e) => setTerm(e.target.value)}
                        type="text"
                        id="search"
                        className="input"/>
                </div>
            </div>
            <div className="ui celled list">
                {renderedResults}
            </div>
        </div>
    )
}

export default Search;
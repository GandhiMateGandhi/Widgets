import React, {useState} from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";

/*const API = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';*/

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Russian',
        value: 'ru'
    },
    {
        label: 'English',
        value: 'en'
    }
];

const Translate = () => {
    const [language, setLanguage] = useState(options[0]);
    const [text, setText] = useState('');

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            {console.log(text)}
            <Dropdown options={options} selected={language} onSelectedChange={setLanguage} label='Select a language'/>
            <hr />
            <h3>Output</h3>
            <Convert text={text} language={language}/>
        </div>
    )
}

export default Translate;
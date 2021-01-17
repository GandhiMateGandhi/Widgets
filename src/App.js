import React, {useState} from 'react';
import Accordion from "./Accordion";
import Search from "./Search";
import Translate from "./Translate";
import Route from "./Route";
import Dropdown from "./Dropdown";
import Header from "./Header";

const items = [
    {
        title: 'What is React?',
        content: 'React is a frontend JA library'
    },
    {
        title: 'Why use React?',
        content: 'React is a very popular and maintaining technology'
    },
    {
        title: 'How do you use React?',
        content: 'You use React by creating components'
    }
]

const options = [
    {
        label: 'The Color Red',
        value: 'red'
    },
    {
        label: 'The Green Color',
        value: 'green'
    },
    {
        label: 'A Shape of Blue',
        value: 'blue'
    },
]


const App = () => {
    const [selected, setSelected] = useState(options[0])
    
    return (
        <div>
            <Header />
            <Route path="/">
                <Accordion items={items}/>
            </Route>

            <Route path="/search">
                <Search/>
            </Route>

            <Route path="/translate">
                <Translate/>
            </Route>

            <Route path="/dropdown">
                <Dropdown
                    options={options}
                    label="Select a color"
                    selected={selected}
                    onSelectedChange={setSelected}
                />
            </Route>
        </div>
    )
}

export default App;
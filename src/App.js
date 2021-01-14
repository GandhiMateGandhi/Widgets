import React, {useState} from 'react';

// import Accordion from "./Accordion";
// import Search from "./Search";
import Dropdown from "./Dropdown";

/*const items = [
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
]*/

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
    const [selected, setSelected] = useState(options[0]);

    return (
        <div>
            {/*<Accordion items={items} />*/}
            {/*<Search />*/}
            <Dropdown
                selected={selected}
                options={options}
                onSelectedChange={setSelected}
            />
        </div>
    )
}

export default App;
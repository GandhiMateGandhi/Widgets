import React, {useState} from 'react';

const Accordion = ({ items }) => {

    const [activeIndex, setActiveIndex] = useState(null)

    const onTitleClick = index => {
         setActiveIndex(index);
    }

    const renderedItems = items.map((item, index) => {
        const active = index === activeIndex ? 'active' : '';

            return (
                <React.Fragment key={item.title}>
                    <div
                        onClick={() => onTitleClick(index)}
                        className={`title ${active}`} >

                        <i className="dropdown icon"/>
                        {item.title}
                    </div>
                    <div className={`content ${active}`}>
                        <p>{item.content}</p>
                    </div>
                </React.Fragment>
            )
        }
    )

    const [clickCount, setClickCount] = useState(0);
    const onButtonCLick = () => {
        setClickCount(clickCount + 1)
    }

    return (
        <div className="ui styled accordion">
                {renderedItems}

                <div className="ui segment">
                    <button onClick={onButtonCLick} className="ui button">Click me!</button>
                    <h1>Current count: {clickCount}</h1>
                </div>

        </div>
    )
};

export default Accordion;
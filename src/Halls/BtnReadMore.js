import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import './BtnReadMore.css';
import { useState } from 'react';

function ContextAwareToggle({ children, eventKey, callback }) {
    const decoratedOnClick = useAccordionButton(eventKey, () => callback && callback(eventKey));

    return (
        <button type="button" onClick={decoratedOnClick} className='btn-readMore'>
        {children}
        </button>
    );
}

function BtnReadMore(props) {
    const [showFullContent, setShowFullContent] = useState(false);

    const toggleContent = () => {
        setShowFullContent(!showFullContent);
    };

    return (
        <Accordion defaultActiveKey="0">
        <ContextAwareToggle eventKey="1" callback={toggleContent}>
            {showFullContent ? 'Read Less !' : 'Read More !'}
        </ContextAwareToggle>
        <Accordion.Collapse eventKey="1">
            <p>{showFullContent ? props.content : props.content.substring(0, 100)}</p>
        </Accordion.Collapse>
        </Accordion>
    );
    }

export default BtnReadMore;

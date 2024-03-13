import Accordion from 'react-bootstrap/Accordion';
import { useAccordionButton } from 'react-bootstrap/AccordionButton';
import './Halls.css'
import BtnReadMore from './BtnReadMore'
import './BtnReadMore.css'



function ContextAwareToggle({ children, eventKey, callback }) {

    const decoratedOnClick = useAccordionButton(
        eventKey,
        () => callback && callback(eventKey),
    );

    return (
        <button
        type="button"
        onClick={decoratedOnClick}
        className='btn-readMore'
        >
        {children}
        </button>
    );
}

function BtnReadMore(props) {
    return (
        <Accordion defaultActiveKey="0">
            <ContextAwareToggle eventKey="1">Read More !</ContextAwareToggle>
            <Accordion.Collapse eventKey="1">
                <p>{props.content}</p>
            </Accordion.Collapse>
        </Accordion>
    );
}

export default BtnReadMore

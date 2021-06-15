import React from 'react';
import { Container } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import { ReactComponent as UpArrow } from '../media/curved-up-arrow-.svg';


const Prompt = () => {
    return (
			<>
				<Container className="prompt">
					Sign up or log in to your existing account in order to add items to your own shopping list!
				</Container>
				<CSSTransition timeout={300}>
					<UpArrow className="up-arrow" />
				</CSSTransition>
			</>
    )
}

export default Prompt;
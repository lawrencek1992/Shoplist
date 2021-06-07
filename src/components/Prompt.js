import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as UpArrow } from '../media/curved-up-arrow-.svg';


const Prompt = () => {
    return (
			<>
        <Container className="prompt">
            Sign up or log in to your existing account in order to add items to your own shopping list!
        </Container>
				<UpArrow className="up-arrow" />
			</>
    )
}

export default Prompt;
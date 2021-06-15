import React from 'react';
import { 
    TransitionGroup,
    CSSTransition
} from 'react-transition-group'
import { Container, ListGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const List = ({listItems, deleteItem}) => {
    const handleDelete = (item) => {
        deleteItem(item);
    }

    return (
        <>
        { (listItems.length === 0)
            ? (
                <Container className="empty-list" fluid>
                    <p>Use the add button to create a shopping list!</p>
                </Container>
            )
            : (
                <ListGroup className="list-group">
                    <TransitionGroup timeout={500}>
                    {listItems
                        .map((item) => (
                            <CSSTransition
                                key={item.key}
                                timeout={500}
                                classNames="item-fade"
                            >
                                <ListGroup.Item id={item.category} key={item.key} className="bg-gradient item">
                                    <Row>
                                        <Col className="col-9">
                                        {item.name}
                                        </Col>
                                        <Col>
                                            <FontAwesomeIcon icon={faTrashAlt} className="col-1 icon" onClick={()=> {
                                                handleDelete(item)
                                            }}
                                        />
                                        </Col>
                                    </Row>   
                                </ListGroup.Item>
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
            </ListGroup>
            )
        }
        </>
    )
}

export default List;
import React from 'react';
import { 
    TransitionGroup,
    CSSTransition
} from 'react-transition-group'
import { ListGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const List = ({listItems, deleteItem}) => {

    const handleDelete = (item) => {
        deleteItem(item);
    }

    return (
        <ListGroup className="list-group">
            <TransitionGroup>
                {listItems && listItems
                    .map((item) => (
                        <CSSTransition
                            key={item.key}
                            timeout={500}
                            classNames="item-fade"
                        >
                            <ListGroup.Item id={item.category} key={item.key}className="bg-gradient">
                                <Row>
                                    <Col className="col-10">
                                    {item.name}
                                    </Col>
                                    <Col>
                                        <FontAwesomeIcon icon={faTrashAlt} className="col-2 icon" onClick={()=> {
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

export default List;
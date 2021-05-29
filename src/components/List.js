import React from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const List = ({listItems, deleteItem}) => {

    const handleDelete = (item) => {
        deleteItem(item);
    }

    return (
        <ListGroup>
            {listItems && listItems.map((item) => (
                <ListGroup.Item id={item.category} key={item.key}> 
                    <Row>
                        <Col className="col-10">
                            {item.name}
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faTrashAlt} className="col-2 icon" onClick={() => handleDelete(item)
                            }/>
                        </Col>
                    </Row>   
                </ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default List;
import React, { useState } from 'react';
import { ListGroup, Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const List = ({listItems, deleteItem}) => {
    const [isFadingOut, setIsFadingOut] = useState(false);

    const fadeOut = (cb) => {
        setIsFadingOut(true);
    };

    const handleDelete = (item) => {
        deleteItem(item);
        setIsFadingOut(false);
    }

    return (
        <ListGroup className="list-group">
            {listItems && listItems
                .map((item) => (
                    <ListGroup.Item id={item.category} key={item.key} className={isFadingOut ? 'item-fadeout bg-gradient' : 'item bg-gradient'}> 
                        <Row>
                            <Col className="col-10">
                                {item.name}
                            </Col>
                            <Col>
                                <FontAwesomeIcon icon={faTrashAlt} className="col-2 icon" onClick={() => fadeOut( 
                                    setTimeout(() => handleDelete(item), 300))}
                                />
                            </Col>
                        </Row>   
                    </ListGroup.Item>
                ))
                // sort function here
            }
        </ListGroup>
    )
}

export default List;
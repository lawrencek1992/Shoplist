import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const List = ({listItems}) => {
    return (
        <ListGroup>
            {listItems && listItems.map((item) => (
                <ListGroup.Item id={item.category}>{item.name}</ListGroup.Item>
            ))}
        </ListGroup>
    )
}

export default List;
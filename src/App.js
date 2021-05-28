import React, { useState } from 'react';
import './App.css';
import './custom.scss';

import List from './components/List';
import AddItemForm from './components/AddItemForm';

function App() {
  const [showModal, setShowModal] = useState(false);
  // const [listItems, setListItems] = useState([]);

  const handleButtonClick = () => {
    setShowModal(true);
  }

  const handleHide = () => {
    setShowModal(false);
  }

  // function handleClose () {
  //   setShowModal(false);
  // }

  // const handleShow = () => {
  //   setShow(true);
  // }

  // useEffect(() => {
  //   handleShow();
  // }, [show])

  return (
    <div className="App">
      <List />
      <AddItemForm showModal={showModal} handleHide={handleHide}/>
      <div className="AddButton btn-danger bg-gradient" onClick={handleButtonClick}>
            +
        </div>
    </div>
  );
}

export default App;

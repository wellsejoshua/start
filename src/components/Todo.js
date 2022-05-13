import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";
function Todo(props) {
  //useState is a react hook which can only be called in a react function or a custom hook it returns an array with two elements
  const [modalIsOpen, setModalIsOpen] = useState(false);
  //props is an object that has a text properti with different values for text properties
  //look like regualr html elements but are actually react components
  //nested function inside of todo function is standard javascript you can define functions inside of functions in javascript
  function deleteHandler() {
    /*in the functions here we can write standard javascript */
    /* {modalIsOpen ? <Modal /> : null} this can be used below*/
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.text}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {modalIsOpen && <Backdrop onClick={closeModalHandler} />}
    </div>
  );
}

export default Todo;

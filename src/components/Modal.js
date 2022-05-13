//every component gets the props parameter but if you don't use it you can omit
function Modal(props) {

    function cancelHandler(){
        props.onCancel();

    }
    function confirmHandler(){
        props.onConfirm();
    }

  return(
  <div className="modal">
    <p>Are You Sure</p>
    <button className="btn  btn--alt" onClick={cancelHandler}>Cancel</button>
    <button className="btn" onClick={confirmHandler}>Confirm</button>
  </div>);
}
export default Modal;

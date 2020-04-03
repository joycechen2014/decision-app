import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
     <Modal
       isOpen = {!!props.selectedOption}
       onRequestClose={props.handleDeleteSelected}
       contentLabel="selected Option" 
       closeTimeoutMS={200}
       className="modal"
      > 
     <h3 className="modal_title">Selected Option</h3>
    {props.selectedOption && <p className="modal_content">{props.selectedOption}</p>}
    <button className="button" onClick={props.handleDeleteSelected}>Okay</button>
     </Modal>   
);
export default OptionModal;
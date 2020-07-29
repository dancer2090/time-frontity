import React, { useEffect, useState } from "react";
import { connect, styled } from "frontity";
import {
  ModalBackground, ModalButton, ModalButtonWrapper, ModalText, ModalTitle, CModal,
} from './styles';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

// http://reactcommunity.org/react-modal/accessibility/
Modal.setAppElement('#root');
 
function ModalComponent({title, text, isOpen, afterOpen, handleClose, state, libraries}) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      borderRadius: 'none'
    },
    overlay: {
      position: 'fixed',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      background: 'rgba(30, 30, 30, 0.9)',
      zIndex: '1000',
    }
  };
  const Html2React = libraries.html2react.Component;
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onAfterOpen={afterOpen}
        onRequestClose={handleClose}
        style={customStyles}
        contentLabel="Modal"
      >
        <CModal>
          <ModalTitle><Html2React html={title} /></ModalTitle>
          <ModalText><Html2React html={text} /></ModalText>
          <ModalButtonWrapper>
            <ModalButton onClick={handleClose}>
              <svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"></path></svg>
            </ModalButton>
          </ModalButtonWrapper>
        </CModal>
      </Modal>
    </div>
  );
}


export default connect(ModalComponent);

import React from 'react';
import { connect } from 'frontity';
import Modal from 'react-modal';
import {
  ModalButton,
  ModalTitle,
  CModal,
  ModalWrapper,
} from './styles';
import SvgSprite from '../SvgSprite';

Modal.setAppElement('#root');

function ModalComponent({
  title,
  children,
  isOpen = true,
  afterOpen,
  handleClose,
  libraries,
  fullSize = false,
  renderTitle = false,
}) {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      padding: '0',
      borderRadius: 'none',
      border: 'none',
    },
    overlay: {
      position: 'fixed',
      top: '0px',
      left: '0px',
      right: '0px',
      bottom: '0px',
      background: 'rgba(40, 40, 40, 0.8)',
      zIndex: '1000',
    },
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
        <CModal size={fullSize}>
          {
            title && (
              <ModalTitle>
                <Html2React html={title} />
              </ModalTitle>
            )
          }
          {
            renderTitle && (
              <ModalTitle>
                { renderTitle() }
              </ModalTitle>
            )
          }
          <ModalWrapper>
            { children }
          </ModalWrapper>
          <ModalButton onClick={handleClose}>
            <SvgSprite name="close" />
          </ModalButton>
        </CModal>
      </Modal>
    </div>
  );
}


export default connect(ModalComponent);

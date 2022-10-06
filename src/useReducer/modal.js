import { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 2000);
  });
  return (
    <>
      <p className='modal'>{modalContent}</p>
    </>
  );
};

export default Modal;

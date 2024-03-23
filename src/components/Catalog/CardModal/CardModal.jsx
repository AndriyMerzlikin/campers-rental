import { CustomModal } from "./CardModal.styled";

// eslint-disable-next-line react/prop-types
const CardModal = ({ closeModal }) => {
  return (
    <CustomModal>
      <h2>Modal Title</h2>
      <p>Modal content goes here.</p>
      <button onClick={closeModal}>Close Modal</button>
    </CustomModal>
  );
};

export default CardModal;

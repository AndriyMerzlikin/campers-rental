// eslint-disable-next-line react/prop-types
const CardModal = ({ closeModal }) => {
  return (
    <div>
      <h2>Modal Title</h2>
      <p>Modal content goes here.</p>
      <button onClick={closeModal}>Close Modal</button>
    </div>
  );
};

export default CardModal;

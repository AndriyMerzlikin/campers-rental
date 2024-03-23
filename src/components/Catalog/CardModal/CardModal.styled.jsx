import Modal from "react-modal";
import styled from "styled-components";

// export const ModalContainer = styled.div`
//   border-radius: 20px;
//   padding: 40px;
//   width: 982px;
//   height: 720px;
export const CustomModal = styled(Modal)`
  /* Стилі для оверлею */
  .ReactModal__Overlay {
    background-color: rgba(0, 0, 0, 0.5);
  }

  /* Стилі для контенту модального вікна */
  .ReactModal__Content {
    border: 1px solid #ccc;
    background-color: white;
    padding: 20px;
    /* Додайте будь-які інші стилі, які вам потрібні */
  }
`;

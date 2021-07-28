import Swal from "sweetalert2";
import './Modal.css';

/**
 * Componente that represents the
 * message display to user after an error
 * with the api call
 */
const ModalMessage = (title, text, timer) => {
  Swal.fire({
    title: title,
    text: text,
    icon: 'warning',
    showConfirmButton: false,
    showCancelButton: false,
    confirmButtonColor: '#8937C0',
    cancelButtonColor: '#fafdfd',
    timer: timer,
  });
};

export { ModalMessage };
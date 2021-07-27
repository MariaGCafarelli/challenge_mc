import Swal from "sweetalert2";
import './Modal.css';

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
/* eslint-disable react/no-unescaped-entities */
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastContainer } from "react-bootstrap";
import Toast from "react-bootstrap/Toast";
import { useSelector, useDispatch } from "react-redux";
import { setShowToast } from "../redux/actions/cartActions";

function ToastElement() {
  const show = useSelector((state) => state.toast);
  const dispatch = useDispatch();
  return (
    <ToastContainer className="position-static">
      <Toast
        className="toast"
        show={show}
        onClose={() => dispatch(setShowToast(false))}
        delay={3000}
        autohide
      >
        <Toast.Body className="toastBody">
          <FontAwesomeIcon icon={faCircleCheck} className="checkIcon" />
          Plant added to basket shop!
        </Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

export default ToastElement;

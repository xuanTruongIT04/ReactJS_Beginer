import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { getUsers } from "../../services/apiSerivce";

import "../Admin/Content/ManageUser.scss";

const ModalViewUser = (props) => {
  const { show, setShow, dateUserView } = props;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState(false);

  useEffect(() => {
    setEmail(dateUserView.email);
    setUsername(dateUserView.username);
    setPassword(dateUserView.password);
    setRole(dateUserView.role);
    if (dateUserView.image) {
      setImage(`data:image/jpeg;base64,${dateUserView.image}`);
    }
  }, [dateUserView]);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setUsername("");
    setPassword("");
    setRole("User");
    setImage(false);
    props.resetUpdateData();
  };

  return (
    <>
      <Modal
        size="xl"
        backdrop="static"
        show={show}
        onHide={handleClose}
        className="modal-view-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Detail user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                disabled
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                disabled
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                disabled
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select className="form-select" value={role} disabled>
                <option selected value="USER">
                  User
                </option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="col-md-12 image-preview">
              {image ? <img src={image} /> : <span>Image user</span>}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { ModalViewUser };

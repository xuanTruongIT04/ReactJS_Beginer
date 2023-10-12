import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import { putUpdateUser } from "../../services/apiSerivce";
import _ from "lodash";

import "../Admin/Content/ManageUser.scss";

const ModalUpdateUser = (props) => {
  const { show, setShow, dataUserUpdate } = props;

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState(false);

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setUsername("");
    setPassword("");
    setRole("User");
    setImage("");
    setPreviewImage(false);
    props.resetUpdateData();
  };

  useEffect(() => {
    if (!_.isEmpty(dataUserUpdate)) {
      setEmail(dataUserUpdate.email);
      setUsername(dataUserUpdate.username);
      setRole(dataUserUpdate.role);
      setImage("");
      if (dataUserUpdate.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUserUpdate.image}`);
      }
    }
  }, [dataUserUpdate]);

  const handleUpdateImage = (event) => {
    if (event?.target?.files?.[0]) {
      let file = event.target.files[0];
      let url = URL.createObjectURL(file);
      setPreviewImage(url);
      setImage(file);
    } else {
      // setPreviewImage(false)
    }
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSubmitUpdateUser = async () => {
    // Validated
    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      toast.error("Invalid email");
      return;
    }

    let data = await putUpdateUser(dataUserUpdate.id, username, role, image);

    if (!data?.EC) {
      toast.success(data.EM);
      handleClose();
      await props.fetchListUsers();
    } else {
      toast.error(data.EM);
    }
  };

  return (
    <>
      <Modal
        size="xl"
        backdrop="static"
        show={show}
        onHide={handleClose}
        className="modal-create-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Update a user</Modal.Title>
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
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                disabled
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select
                className="form-select"
                onChange={(event) => setRole(event.target.value)}
                value={role}
              >
                <option selected value="User">
                  User
                </option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="col-md-12">
              <label
                className="form-label label-upload-image"
                htmlFor="label-upload"
              >
                <FcPlus />
                Upload File Image
              </label>
              <input
                type="file"
                hidden
                id="label-upload"
                onChange={(event) => handleUpdateImage(event)}
              />
            </div>
            <div className="col-md-12 image-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span>Preview image</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => handleSubmitUpdateUser()}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export { ModalUpdateUser };

import { ModalCreateUser } from "../../Modal/ModalCreateUser";
import { FcPlus } from "react-icons/fc";
import "./ManageUser.scss";
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

  return (
    <div className="manage-user-container">
      <div className="title">
        <span>Manage User</span>
      </div>
      <div className="users-content">
        <div>
          <button
            className="btn btn-success d-flex gap-2 align-items-center"
            onClick={() => setShowModalCreateUser(true)}
          >
            <FcPlus />
            Add new users
          </button>
        </div>
        <div className="table-users-container">
          <TableUser />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;

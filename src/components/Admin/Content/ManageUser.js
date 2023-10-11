import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { getUsers } from "../../../services/apiSerivce";
import { ModalCreateUser } from "../../Modal/ModalCreateUser";
import "./ManageUser.scss";

const ManageUser = (props) => {
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);

  useEffect(async () => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let data = await getUsers();
    if (data.EC === 0) {
      setListUsers(data.DT);
    }
  };

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
          <TableUser listUsers={listUsers} />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;

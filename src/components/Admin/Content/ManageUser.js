import { ModalCreateUser } from "../../Modal/Modal";

const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="title">
        <span>Manage User</span>
      </div>
      <div className="users-content">
        <div>
          <button>Add new users</button>
        </div>
        <div>
          Table users
          <ModalCreateUser />
        </div>
      </div>
    </div>
  );
};

export default ManageUser;

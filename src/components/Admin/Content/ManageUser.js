import { useEffect, useState } from "react";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { getUsers, getUsersWithPaginate } from "../../../services/apiSerivce";
import "./ManageUser.scss";
import { ModalCreateUser } from "../../Modal/ModalCreateUser";
import { ModalUpdateUser } from "../../Modal/ModalUpateUser";
import { ModalViewUser } from "../../Modal/ModalViewUser";
import ModalDeleteUser from "../../Modal/ModalDeleteUser";
import TableUserPaginate from "./TableUserPaginate";

const ManageUser = (props) => {
  const LIMIT_USER = 8;

  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  const [listUsers, setListUsers] = useState([]);
  const [dataUserUpdate, setDataUserUpdate] = useState({});
  const [dataUserDelete, setDataUserDelete] = useState({});
  const [pageCount, setPageCount] = useState(0);

  useEffect(() => {
    fetchListUsersPaginate(1);
  }, []);

  const fetchListUsers = async () => {
    let data = await getUsers();
    if (data.EC === 0) {
      setListUsers(data.DT);
    }
  };

  const fetchListUsersPaginate = async (page) => {
    let data = await getUsersWithPaginate(page, LIMIT_USER);
    if (data.EC === 0) {
      setListUsers(data.DT.users);
      setPageCount(data.DT.totalPages);
    }
  };

  const handleClickUpdateUser = (user) => {
    setShowModalUpdateUser(true);
    setDataUserUpdate(user);
  };

  const handleClickViewUser = (user) => {
    setShowModalViewUser(true);
    setDataUserUpdate(user);
  };

  const handleClickDeleteUser = (user) => {
    setShowModalDeleteUser(true);
    setDataUserDelete(user);
  };

  const resetUpdateData = () => {
    setDataUserUpdate({});
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
          <TableUserPaginate
            listUsers={listUsers}
            handleClickUpdateUser={handleClickUpdateUser}
            handleClickViewUser={handleClickViewUser}
            handleClickDeleteUser={handleClickDeleteUser}
            fetchListUsersPaginate={fetchListUsersPaginate}
            pageCount={pageCount}
          />
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUsers={fetchListUsers}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUserUpdate={dataUserUpdate}
          fetchListUsers={fetchListUsers}
          resetUpdateData={resetUpdateData}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dateUserView={dataUserUpdate}
          resetUpdateData={resetUpdateData}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataUserDelete={dataUserDelete}
          fetchListUsers={fetchListUsers}
        />
      </div>
    </div>
  );
};

export default ManageUser;

import { useEffect, useState } from "react";
import { getUsers } from "../../../services/apiSerivce";

const TableUser = (props) => {
  const [listUsers, setListUsers] = useState([]);

  useEffect(async () => {
    fetchListUsers();
  }, []);

  const fetchListUsers = async () => {
    let data = await getUsers();
    if(data.EC === 0) {
      setListUsers(data.DT)
    }
  };

  return (
    <>
      <table className="mt-3 table table-striped table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers &&
            listUsers.length > 0 &&
            listUsers.map((item, index) => {
              return (
                <tr key={`table-user-${index}`}>
                  <td>{index + 1}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                  <td>
                    <button className="btn btn-primary">View</button>
                    <button className="btn btn-warning mx-3">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}

          {listUsers && listUsers.length === 0 && (
            <tr>
              <td colSpan={"4"}>Not found data</td>
            </tr>
          )}
        </tbody>
      </table>
    </>
  );
};

export default TableUser;

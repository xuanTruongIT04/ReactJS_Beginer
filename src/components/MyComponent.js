import React, { useState } from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

const MyComponent = () => {
  const [listUsers, setListUser] = useState([
    {
      id: 1,
      name: "An",
      age: 18,
      address: "Thái nguyên",
    },
    {
      id: 2,
      name: "Dũng",
      age: 20,
      address: "Thái nguyên",
    },
    {
      id: 3,
      name: "Trường",
      age: 21,
      address: "Thái nguyên",
    },
    {
      id: 4,
      name: "Giang",
      age: 21,
      address: "Nam Định",
    },
    {
      id: 5,
      name: "Trang",
      age: 17,
      address: "Thái nguyên",
    },
  ]);

  const handleAddUser = (user) => {
    setListUser([user, ...listUsers]);
  };

  const handleDeleteUser = (userId) => {
    let listUsersClone = [...listUsers];
    let listUsersNew = listUsersClone.filter((item) => item.id !== userId);
    setListUser(listUsersNew);
  };

  // JSX
  // DRY: Don't Repeat Yourself
  return (
    <>
      <div className="a">
        <AddUserInfo handleAddUser={handleAddUser} />
      </div>
      <div className="b">
        <DisplayInfo
          listUsers={listUsers}
          handleDeleteUser={handleDeleteUser}
        />
      </div>
    </>
  );
};

export default MyComponent;

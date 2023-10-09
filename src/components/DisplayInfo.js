import React, { useEffect, useState } from "react";
import "./DisplayInfo.scss";

const DisplayInfo = (props) => {
  const { listUsers } = props;
  // Destructuring array/objectFit

  const [isShowHideListUser, setShowHideListUser] = useState(true);

  const handleShowHideListUser = () => {
    setShowHideListUser(!isShowHideListUser);
  };

  console.log("Run mounted");

  useEffect(() => {
    if(listUsers.length === 0) {
      alert("Bạn đã xoá toàn bộ item")
    }
    console.log("Run useEffect");
  }, [listUsers]);

  return (
    // Show object or array in template => JSON.stringify(object)
    <>
      <div className="display-info-container">
        <button
          onClick={() => handleShowHideListUser()}
          style={{ marginTop: "12px" }}
        >
          {isShowHideListUser ? "Hide list user" : "Show list user"}
        </button>
        {isShowHideListUser && (
          <>
            {listUsers.map((user) => {
              return (
                <div key={user.id} className="user-info">
                  <hr />
                  <p className={user.age > 18 ? "blue" : "red"}> 
                    My name is <b>{user.name}</b>, <b>{user.age}</b> years old
                    and I'm from <b>{user.address}</b>
                  </p>
                  <button onClick={() => props.handleDeleteUser(user.id)}>
                    Delete
                  </button>
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default DisplayInfo;

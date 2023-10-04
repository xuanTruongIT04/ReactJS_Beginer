import React from "react";
import AddUserInfo from "./AddUserInfo";
import DisplayInfo from "./DisplayInfo";

class MyComponent extends React.Component {
  state = {
    listUsers: [
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
    ],
  };

  handleAddUser = (user) => {
    this.setState({
      listUsers: [user, ...this.state.listUsers],
    });
  };

  handleDeleteUser = (userId) => {
    let listUsersClone = [...this.state.listUsers];
    let listUsersNew = listUsersClone.filter(item => item.id !== userId);
    console.log(listUsersNew);

    this.setState({
      listUsers: listUsersNew,
    });
  };

  // JSX
  render() {
    // DRY: Don't Repeat Yourself
    return (
      <>
        <div className="a"> 
          <AddUserInfo handleAddUser={this.handleAddUser} />
        </div>
        <div className="b">
          {/* <DisplayInfo listUsers={this.state.listUsers} /> */}
          <DisplayInfo listUsers={this.state.listUsers} handleDeleteUser={this.handleDeleteUser} />
        </div>
      </>
    );
  }
}

export default MyComponent;

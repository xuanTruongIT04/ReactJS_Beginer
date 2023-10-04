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
    console.log(user);
    this.setState({
      listUsers: [...this.state.listUsers, user],
    });
  };
  // JSX
  render() {
    // DRY: Don't Repeat Yourself
    return (
      <>
        <div className='a'>
          <AddUserInfo handleAddUser={this.handleAddUser} />
        </div>
        <div className='b'>
          <DisplayInfo listUsers={this.state.listUsers} />
        </div>
      </>
    );
  }
}

export default MyComponent;

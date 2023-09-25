import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "School",
    address: "Phú Bình - Thái Nguyên",
    age: 21,
  };
  // JSX
  render() {
    return (
      <div>
        My name is {this.state.name}, {this.state.age} years old and I'm from{" "}
        {this.state.address}
      </div>
    );
  }
}

export default MyComponent;

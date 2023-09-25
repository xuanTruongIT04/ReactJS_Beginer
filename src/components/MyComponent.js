import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "School",
    address: "Phú Bình - Thái Nguyên",
    age: 21,
  };

  handleClick(e) {
    console.log("Hello mọi người");
    console.log(e);
  }

  // JSX
  render() {
    return (
      <div>
        <p>
          My name is {this.state.name}, {this.state.age} years old and I'm from{" "}
          {this.state.address}
        </p>
        <button onClick={this.handleClick}>Trò chuyện</button>
      </div>
    );
  }
}

export default MyComponent;

import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "School",
    address: "Phú Bình - Thái Nguyên",
    age: 21,
  };

  handleClick(e) {
    console.log("Hello mọi người, tui tên " + this.state.name);
    this.setState({
      name: "Xuân Trường",
      address: "Thanh Ninh - Phú Bình - Thái Nguyên",
      age: 22,
    })
  }

  // JSX
  render() {
    return (
      <div>
        <p>
          My name is <b>{this.state.name}</b>, <b>{this.state.age}</b> years old and I'm from <b>{this.state.address}</b>
        </p>
        <button onClick={(e) => { this.handleClick(e) }}>Trò chuyện</button>
      </div>
    );
  }
}

export default MyComponent;

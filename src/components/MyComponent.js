import React from "react";

class MyComponent extends React.Component {
  state = {
    name: "School",
    address: "Phú Bình - Thái Nguyên",
    age: 21,
  };

  handleOnChange(e) {
    this.setState({
      name: e.target.value
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    console.log(this.state)
  }

  // JSX
  render() {
    return (
      <div>
        <p>
          My name is <b>{this.state.name}</b>, <b>{this.state.age}</b> years old and I'm from <b>{this.state.address}</b>
        </p>

        <form onSubmit={(e) => { this.handleOnSubmit(e) }}>
          <input type="text" onChange={(e) => { this.handleOnChange(e) }} />
          <input type="submit" value="Cập nhật" />
        </form>
      </div>
    );
  }
}

export default MyComponent;

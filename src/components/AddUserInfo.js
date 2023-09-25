import React from "react";

class AddUserInfo extends React.Component {
  state = {
    name: "School",
    address: "Phú Bình - Thái Nguyên",
    age: 21,
  };

  handleOnChangeName(e) {
    this.setState({
      name: e.target.value,
    });
  }

  handleOnChangeAge(e) {
    this.setState({
      age: e.target.value,
    });
  }

  handleOnChangeAddress(e) {
    this.setState({
      address: e.target.value,
    });
  }

  handleOnSubmit(e) {
    e.preventDefault();
    this.props.handleAddUser({
      id: Math.floor(Math.random() * 1000 + 1) + "-random",
      name: this.state.name,
      age: this.state.age,
      address: this.state.address,
    });
  }

  render() {
    return (
      <div>
        <p>
          My name is <b>{this.state.name}</b>, <b>{this.state.age}</b> years old
          and I'm from <b>{this.state.address}</b>
        </p>

        <form
          onSubmit={(e) => {
            this.handleOnSubmit(e);
          }}
        >
          <input
            type="textq"
            value={this.state.name}
            onChange={(e) => {
              this.handleOnChangeName(e);
            }}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            value={this.state.age}
            onChange={(e) => {
              this.handleOnChangeAge(e);
            }}
          />
          <br />
          <br />
          <input
            type="text"
            value={this.state.address}
            onChange={(e) => {
              this.handleOnChangeAddress(e);
            }}
          />
          <br />
          <br />
          <input type="submit" value="Thêm mới" />
        </form>
      </div>
    );
  }
}

export default AddUserInfo;

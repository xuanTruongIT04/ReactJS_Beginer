import React, { useState } from "react";

const AddUserInfo = (props) =>  {
  const [info, setInfo] = useState({
    name: "School",
    address: "Phú Bình - Thái Nguyên",
    age: 21,
  })

  const handleOnChangeName = (e) => {
    console.log(e.value)
    setInfo({
      ...info,
      name: e.target.value
    })
  }

  const handleOnChangeAge = (e) => {
    setInfo({
      ...info,
      age: e.target.value
    })
  }

  const handleOnChangeAddress = (e) => {
    setInfo({
      ...info,
      address: e.target.value
    })
    
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    props.handleAddUser({
      id: Math.floor(Math.random() * 1000 + 1) + "-random",
      name: info.name,
      age: info.age,
      address: info.address,
    });
  }

    return (
      <div>
        <p>
          My name is <b>{info.name}</b>, <b>{info.age}</b> years old
          and I'm from <b>{info.address}</b>
        </p>

        <form
          onSubmit={(e) => {
            handleOnSubmit(e);
          }}
        >
          <input
            type="textq"
            value={info.name}
            onChange={(e) => {
              handleOnChangeName(e);
            }}
          />{" "}
          <br />
          <br />
          <input
            type="text"
            value={info.age}
            onChange={(e) => {
              handleOnChangeAge(e);
            }}
          />
          <br />
          <br />
          <input
            type="text"
            value={info.address}
            onChange={(e) => {
              handleOnChangeAddress(e);
            }}
          />
          <br />
          <br />
          <input type="submit" value="Thêm mới" />
        </form>
      </div>
    );
  }

export default AddUserInfo;

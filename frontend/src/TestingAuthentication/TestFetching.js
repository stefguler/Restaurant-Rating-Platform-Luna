import React from "react";

const TestFetching = () => {
  const data = {
    first_name: "Gio",
    last_name: "Fuochetto",
    email: "gio@example.com",
    password: "encrypted",
    passwordConfirm: "encrypted",
  };

  console.log(data);
  return (
    <div>
      <p>{data.first_name}</p>
      <p>{data.last_name}</p>
      <p>{data.email}</p>
      <p>{data.password}</p>
      <p>{data.passwordConfirm}</p>
      <h1>Fake Data Base</h1>
    </div>
  );
};

export default TestFetching;

import React from "react";

function Display() {
  const employees = [
    { id: 1, name: "John", age: 21 },
    { id: 2, name: "Tim", age: 31 },
    { id: 3, name: "Sam", age: 41 },
  ];

  const emp_data = employees.map((e) => {
    return (
      <div>
        <h1>
          Id: {e.id} | Name: {e.name} | Age: {e.age}
        </h1>
      </div>
    );
  });

  const employee = {
    id: 1,
    name: "John",
    email: "john@gmail.com",
  };

  const emp1 = Object.keys(employee).map((k) => {
    return (
      <div>
        <h2>
          {k}: {employee[k]}
        </h2>
      </div>
    );
  });

  return (
    <div>
      {emp_data}
      {emp1}
    </div>
  );
}

export default Display;

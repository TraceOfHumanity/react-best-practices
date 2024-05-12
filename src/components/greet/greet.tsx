import React from "react";

export const Greet = () => {
  const [name, setName] = React.useState("");
  return <div>
    <input type="text" value={name} onChange={e => setName(e.target.value)} />
    <h1>Hello, {name || "World"}!</h1>
  </div>;
};

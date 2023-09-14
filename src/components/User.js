
import { useState } from "react";
const User = ({name}) => {
    const [count, setCount] = useState(0);
  return (
    <div className="user-card">
      <h1>count={count}</h1>
      <button onClick={()=>{
        setCount(count+1);
      }} >countIncrease</button>
      <h2>Name: {name}</h2>
      <h3>Location: Bihar</h3>
      <h4>Contact: @ravish1996</h4>
    </div>
  );
};

export default User;

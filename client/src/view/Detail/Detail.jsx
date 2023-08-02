import React from "react";

function Detail() {
  return (
    <div>
      <NavLink to="/home">
        <button className={style.returnBack}>Home</button>
      </NavLink>
    </div>
  );
}

export default Detail;

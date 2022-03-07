import React from "react";

const Rank = ({ name, entries }) => {
  return (
    <div>
      <div className="white f2">
        {`Hello, ${name}! Your number of submitted entries is:`}
      </div>
      <div className="red f1">{`${entries}`}</div>
    </div>
  );
};

export default Rank;

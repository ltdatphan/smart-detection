import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        {/* <p className="f3 link dim black underline pa3 pointer" onClick={() => onRouteChange('signout')} >Sign Out</p> */}
        <div className="ph3 pd3">
          <p
            className="f3 grow no-underline br-pill pa3 pv2 mb2 dib white bg-black pointer"
            onClick={() => onRouteChange("signout")}
          >
            Sign Out
          </p>
        </div>
      </nav>
    );
  } else {
    return (
      <nav style={{ display: "flex", justifyContent: "flex-end" }}>
        <div className="ph3 pd3">
          <p
            className="f3 grow no-underline br-pill pa3 pv2 mr3 dib white bg-black pointer"
            onClick={() => onRouteChange("signin")}
          >
            Sign In
          </p>
          <p
            className="f3 grow no-underline br-pill pa3 pv2 mb2 dib white bg-black pointer"
            onClick={() => onRouteChange("register")}
          >
            Register
          </p>
        </div>
      </nav>
    );
  }
};

export default Navigation;

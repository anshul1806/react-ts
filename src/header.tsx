import React, { Component, Fragment } from "react";

type UserT = {
  name: string;
  address: string;
};

type HeaderProps = {
  user: UserT;
  clickedEvent(): void;
};

// function Header(props) {
// const { name, address } = props;
export const Header: React.FC<HeaderProps> = ({ user, clickedEvent }) => {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  const lclicked = () => {
    console.log("clocked inside child");
    alert("hi from child ");
    clickedEvent();
  };

  return (
    <Fragment>
      <div className="divMain">
        <h1>{user.name}</h1>
      </div>
      <div className="container" onClick={lclicked}>
        <div className="row">
          <div className="col-sm">
            {user.name} has address {user.address} <br />
          </div>
          <div className="col-sm">One of three columns</div>
        </div>
      </div>
    </Fragment>
  );
};
export default Header;

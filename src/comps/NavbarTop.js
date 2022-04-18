import React from "react";

//React-Bootstrap
 import { Navbar } from "react-bootstrap";

// Icons
import { GrHomeRounded } from "react-icons/gr";
import { MdOutlineAddBox } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { ImCompass2 } from "react-icons/im";
import { BsHeart } from "react-icons/bs";


const NavbarTop = () => {
  return (
    <div>
      <Navbar className="navbar fixed">
        <div className="nav-wrapper">
          <h3 className="navbar-title">DaBelagram</h3>
          <input type="text" class="search-box" placeholder="search" />
          <div className="nav-items">
            <i className="icon hide"> <GrHomeRounded /></i>
            <i className="icon hide"> <RiMessengerLine /></i>
            <i className="icon hide"> <MdOutlineAddBox /></i>
            <i className="icon hide"> <ImCompass2/></i>
            <i className="icon"> <BsHeart/></i>
            <div className="icon user-profile"></div>
            
          </div>
        </div>
      </Navbar>
    </div>
  );
};

export default NavbarTop;

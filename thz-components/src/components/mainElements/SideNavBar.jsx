import React, { useState } from "react";
import sidenav from "../../assets/sideNav.svg";
import DropDownNav from "../uiElements/DropDownNav";

const SideNavBar = ({ customClassName = "", position = "left" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle the sidebar state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Determine the position class based on the 'position' prop
  const positionClass = position === "right" ? "right-0" : "left-0";

  const subItems1 = [
    { label: "Sub Item 1", link: "#subitem1" },
    { label: "Sub Item 2", link: "#subitem2" },
    { label: "Sub Item 3", link: "#subitem3" }
  ];

  const subItems2 = [
    { label: "Another Sub Item 1", link: "#subitem1" },
    { label: "Another Sub Item 2", link: "#subitem2" }
  ];

  return (
    <div
      className={`sideNav fixed top-0 ${positionClass} h-full p-4 bg-neutral-800 bg-opacity-15 backdrop-blur-xl ${
        isOpen ? "open" : "closed"
      } ${customClassName}`}
    >
      <button onClick={toggleMenu} className="icon">
        <img src={sidenav} alt="Side Navigation" />
      </button>

      {/* Side Navigation Menu */}
      <ul className="menu mt-4 flex flex-col gap-2">
        {/* Dropdown Item */}
        
        {/* First dropdown with dynamic sub-items */}
        <DropDownNav title="Links" customClassName={"border-b-neutral-800"} subItems={subItems1} />

        {/* Second dropdown with different dynamic sub-items */}
        <DropDownNav title="Navs" customClassName={"border-b-neutral-800"} subItems={subItems2} />
      </ul>
    </div>
  );
};

export default SideNavBar;
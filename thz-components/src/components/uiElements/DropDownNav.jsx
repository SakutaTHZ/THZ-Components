import React, { useState } from "react";
import DropDownSubNav from '../uiElements/DropDownSubNav'

const DropDownNav = ({ title, subItems,customClassName,subCustomClassName}) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Toggle dropdown state
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <li className={`nav-item list-none border-b pb-1 rounded-md ${customClassName}`}>
      <button
        onClick={toggleDropdown}
        className="dropdown-toggle flex items-center justify-between w-full"
      >
        <span>{title}</span>
        <span>{isDropdownOpen ? "-" : "+"}</span>
      </button>

      {/* Sub-items for the dropdown */}
      <ul
        className={`dropdown-list list-none flex flex-col gap-.5 py-2 transition-all duration-300 ease-in-out ${
          isDropdownOpen ? "block" : "hidden"
        }`}
      >
        {subItems.map((item, index) => (
          <DropDownSubNav subCustomClassName={subCustomClassName} index={index} link={item.link} label={item.label}></DropDownSubNav>
        ))}
      </ul>
    </li>
  );
};

export default DropDownNav;
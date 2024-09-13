import React from 'react';
import PropTypes from 'prop-types';

const NavLink = ({ href, children, className, isActive, ...props }) => {
  // Define the base styles for the link
  const baseStyles = "w-fit px-4 py-2 rounded-lg transition-all hover:bg-slate-500";

  // Define the active styles
  const activeStyles = "bg-slate-500 text-white";

  // Combine base styles with conditional styles
  const combinedClassName = `${baseStyles} ${isActive ? activeStyles : 'text-gray-500'} ${className}`;

  return (
    <a href={href} className={combinedClassName} {...props}>
      {children}
    </a>
  );
};

// Define PropTypes for the component
NavLink.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isActive: PropTypes.bool,
};

// Set default props
NavLink.defaultProps = {
  className: '',
  isActive: false,
};

export default NavLink;

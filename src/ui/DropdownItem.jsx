import React from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de tener react-router-dom instalado

export const DropdownItem = ({
  tag = 'button',
  to,
  className = '',
  children,
}) => {
  const baseClassName =
    'block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900';
  const combinedClasses = `${baseClassName} ${className}`.trim();

  if (tag === 'a' && to) {
    return React.createElement(
      Link,
      { to, className: combinedClasses },
      children
    );
  }

  return React.createElement(
    'button',
    { className: combinedClasses },
    children
  );
};
export default DropdownItem;
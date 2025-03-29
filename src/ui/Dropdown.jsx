import React, { useEffect, useRef } from 'react';

export const Dropdown = ({
  isOpen,
  onClose,
  children,
  className = '',
}) => {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !event.target.closest('.dropdown-toggle')
      ) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  if (!isOpen) return null;

  const dropdownClasses = `absolute z-40 right-0 mt-2 rounded-xl border border-gray-200 bg-white shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark ${className}`;

  return (
    <div ref={dropdownRef} className={dropdownClasses}>
      {children}
    </div>
  );
};
export default Dropdown;
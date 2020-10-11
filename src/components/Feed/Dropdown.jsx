import PropTypes from 'prop-types';
import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

import styles from '../../scss/dropdown.module.scss';


const  Dropdown  = ({ title, items, multiSelect = false }) => {
  const [open, setOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);
  Dropdown.handleClickOutside = () => setOpen(false);

  function handleOnClick(item) {
    if (!selection.some(current => current.id === item.id)) {
      if (!multiSelect) {
        setSelection([item]);
      } else if (multiSelect) {
        setSelection([...selection, item]);
      }
    } else {
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(
        current => current.id !== item.id
      );
      setSelection([...selectionAfterRemoval]);
    }
  }

  function isItemInSelection(item) {
    if (selection.some(current => current.id === item.id)) {
      return true;
    }
    return false;
  }

  return (
    <div className={styles["dd-wrapper"]}>
      <div
        tabIndex={0}
        className={styles["dd-header"]}
        role="button"
        onKeyPress={() => toggle()}
        onClick={() => toggle()}
      >
        <div className={styles["dd-header__title"]}>
          <p className={styles["dd-header__title--bold"]}>{title}</p>
        </div>
        <div className={styles["dd-header__action"]}>
        <img src="https://img.icons8.com/ios-filled/50/000000/sort-down.png" className={styles.dropdownImg} alt="dropdown"/>
          {/* <p>{open ? 'Close' : 'Open'}</p> */}
        </div>
      </div>
      {open && (
        <ul className={styles["dd-list"]}>
          {items.map(item => (
            <li className={styles["dd-list-item"]} key={item.id}>
              <button type="button" onClick={() => handleOnClick(item)}>
                <span>{item.value}</span>
                <span>{isItemInSelection(item) && 'Selected'}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

const clickOutsideConfig = {
  handleClickOutside: () => Dropdown.handleClickOutside,
};

Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    items: PropTypes.string.isRequired,
    multiSelect: PropTypes.bool.isRequired,
  };

export default onClickOutside(Dropdown, clickOutsideConfig);
import React, { useState, useRef, useCallback, useEffect } from "react";
import { Manager, Reference, Popper } from "react-popper";

import SubMenu from "./SubMenu";

const DropdownButton = ({ buttonText, options }) => {
  const [dropdownOpen, setDropdownToggle] = useState(false);
  const [subMenus, setSubMenus] = useState({});
  const dropdownListRef = useRef(null);
  const dropdownButtonRef = useRef(null);

  useEffect(() => {
    options.forEach(opt => {
      if (opt.subMenu) {
        const tempSubMenus = subMenus;
        tempSubMenus[opt.name] = false;
        setSubMenus(tempSubMenus);
      }
    });
  }, [options]);

  const showSub = name => {
    console.log(subMenus);
    const tempSubMenus = { ...subMenus };
    // tempSubMenus[name] = !tempSubMenus[name];

    Object.keys(tempSubMenus).forEach(key => {
      if (key === name) {
        tempSubMenus[key] = true;
      } else {
        tempSubMenus[key] = false;
      }
    });
    setSubMenus(tempSubMenus);
  };

  const setButtonRef = useCallback((node, ref) => {
    dropdownButtonRef.current = node;
    return ref(node);
  }, []);

  const setListRef = useCallback((node, ref) => {
    dropdownListRef.current = node;
    return ref(node);
  }, []);

  const dropdownToggle = () => {
    setDropdownToggle(!dropdownOpen);
  };

  const modifiers = {
    preventOverflow: {
      padding: 0
    },
    shift: {
      enabled: true
    },
    flip: {
      enabled: true,
      flipVariationsByContent: true,
      behavior: "flip"
    }
  };

  return (
    <Manager>
      {console.log(subMenus)}
      <div>
        <Reference>
          {({ ref }) => (
            <button
              onClick={dropdownToggle}
              ref={node => setButtonRef(node, ref)}
            >
              {buttonText}
            </button>
          )}
        </Reference>
        {dropdownOpen && (
          <Popper placement="bottom-end" modifiers={modifiers}>
            {({ ref, style, placement, arrowProps }) => (
              <ul
                ref={node => setListRef(node, ref)}
                style={style}
                data-placement={placement}
                className={`dropdown-button__list ${(dropdownOpen &&
                  "dropdown-button__list--open") ||
                  ""}`}
              >
                {options.map(item => {
                  return (
                    <li
                      className={`dropdown-button__list-item
                ${(item.name && `dropdown-button__list-item--${item.name}`) ||
                  ""}`}
                      key={item.name}
                      onClick={() => showSub(item.name)}
                    >
                      {item.label}
                      {item.subMenu && (
                        <SubMenu
                          open={subMenus[item.name]}
                          options={item.subMenu}
                          listRef={dropdownListRef}
                        />
                      )}
                    </li>
                  );
                })}
              </ul>
            )}
          </Popper>
        )}
      </div>
    </Manager>
  );
};

export default DropdownButton;

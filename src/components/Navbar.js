import React from "react";

const Navbar = () => {
  return (
    <nav
      style={{
        // temporary before we decide on css
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: "7vh",
        backgroundColor: "pink",
      }}
    >
      <span
        style={{
          // temporary before we decide on css
          marginLeft: "40px",
        }}
      >
        IMAGE PLACEHOLDER
      </span>
      <ul
        style={{
          // temporary before we decide on css
          listStyle: "none",
          display: "flex",
          flexDirection: "row",
          marginRight: "40px",
          justifyContent: "flex-end",
        }}
      >
        <li
          style={{
            // temporary before we decide on css
            marginLeft: "40px",
          }}
        >
          Link 1
        </li>
        <li
          style={{
            // temporary before we decide on css
            marginLeft: "40px",
          }}
        >
          Link 2
        </li>
        <li
          style={{
            // temporary before we decide on css
            marginLeft: "40px",
          }}
        >
          Link 3
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

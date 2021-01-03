import React, { useEffect, useRef, useState } from "react";

const Dropdown = ({ options, text, selected, onSelected }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const bodyClick = (e) => {
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      setOpen(false);
    };
    document.body.addEventListener("click", bodyClick);
    return () => {
      document.removeEventListener("click", bodyClick);
    };
  }, []);

  const renderdOptions = options.map((option) => {
    if (selected.value === option.value) {
      return null;
    }
    return (
      <div
        onClick={() => onSelected(option)}
        className="item"
        key={option.value}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div ref={ref} className="ui form">
      <div className="field">
        <label className="label">{text}</label>
        <div
          onClick={() => setOpen(!open)}
          className={`ui selection dropdown ${open ? "visible active" : ""}`}
        >
          <i className="dropdown icon"></i>
          <div className="text">{selected.label}</div>
          <div className={`menu ${open ? "visible transition" : ""}`}>
            {renderdOptions}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dropdown;

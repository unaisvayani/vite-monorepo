import React, { useState } from "react";
import "./Textbox.css";

interface Props {
  placeholder: string;
}

export const Textbox: React.FC<Props> = ({ placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="textbox-container">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="textbox"
      />
    </div>
  );
};

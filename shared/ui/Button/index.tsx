import React from "react";
import "./FancyButton.css";

interface FancyButtonProps {
  onClick: () => void;
  text: string;
}

export const FancyButton: React.FC<FancyButtonProps> = ({ text, onClick }) => (
  <button className="fancy-button" onClick={onClick}>
    {text}
  </button>
);

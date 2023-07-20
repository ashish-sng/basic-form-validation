import React, { useState } from "react";
import "./LanguageSelect.css";

const LanguageDropdown = () => {
  const languages = [
    { value: "en", label: "English" },
    { value: "fr", label: "French" },
    { value: "es", label: "Spanish" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState("Languages");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language.label);
    setDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="language__container">
      <div
        className={`language__select ${dropdownOpen ? "open" : ""}`}
        onClick={toggleDropdown}
      >
        <i className="fa fa-globe"></i>
        <span>{selectedLanguage}</span>
        <i className="fa fa-chevron-down"></i>
      </div>
      {dropdownOpen && (
        <ul className="language__options">
          {languages.map((language) => (
            <li
              key={language.value}
              onClick={() => handleLanguageChange(language)}
            >
              {language.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;

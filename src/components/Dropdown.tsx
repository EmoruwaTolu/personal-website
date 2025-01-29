import React, { useEffect, useState } from 'react';
import './dropdown.css';

interface DropdownProps {
    title: string;
    teams: string[];
    onSelect: (team: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({title, teams, onSelect}) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleSelect = (team: string) => {
        onSelect(team);
        setIsOpen(false); 
    };

    return(
        <div className="dropdown">
            <button className="dropdown-button" onClick={toggleDropdown}>
                {title}
            </button>
            {isOpen && (
            <div className="dropdown-menu">
                {teams.map((team) => (
                    <a
                    key={team}
                    href="#"
                    className="dropdown-item"
                    onClick={(e) => {
                        e.preventDefault();
                        handleSelect(team); 
                    }}
                    >
                    {team}
                    </a>
                ))}
                </div>
            )}
        </div>
    )
};

export default Dropdown;
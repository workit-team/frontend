import React, {FC, useRef, useState} from 'react';
import DownArrow from "../../assets/down-arrow.svg";
import styles from "./dropdown.module.css";

const containerStyles = "relative h-[2rem] w-[7rem] dark-3 rounded-md border-solid border-2 text-black text-xs";

const menuStyles = "w-full hidden dark-3 border-solid border-2 text-xs";

const options = [
    { value: "front", label: "frontend dev"},
    { value: "graphic", label: "graphic artist"},
    { value: "back", label: "backend dev"},
    { value: "fullstack", label: "fullstack dev"},
]

export const Dropdown = () => {
    const dropMenu = useRef<HTMLDivElement>(null);
    const [currentSelection, setCurrentSelection] = useState<string>("Select...");

    const handleInputClick = () => {
        if(dropMenu.current !== null) {
            if(dropMenu.current.classList.contains("block")){
                dropMenu.current.classList.remove("block");
                dropMenu.current.classList.add("hidden");
            } else {
                dropMenu.current.classList.remove("hidden");
                dropMenu.current.classList.add("block");
            }
        }
        
    }

    const handleItemClick = (label: string, value: string) => {
        setCurrentSelection(label);
    }

    return (
        <div id="drop-contain" className={containerStyles}>
            <div id="drop-input"  onClick={handleInputClick} className="p-2 flex items-center justify-between w-full h-full" style={{userSelect: "none"}}>
                {currentSelection}
                <DownArrow />
                <div id="drop-menu" ref={dropMenu} className={`${menuStyles} ${styles.dropMenu}`}>
                    {options.map((option) => (
                        <div id="drop-item" key={option.value} className={styles.dropItem} onClick={() => handleItemClick(option.label, option.value)}>{option.label}</div>
                        ))}
                    
                </div>
            </div>
        </div>
    )
}
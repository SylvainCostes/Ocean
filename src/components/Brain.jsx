// src/components/Heart.js
import React, { useState } from "react";
import headImage from "../assets/brain.png";

const Brain = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                position: "absolute",
                top: "10%", // Position initiale
                left: isHovered ? "45.5%" : "47.5%", // Position initiale
                width: isHovered ? "7%" : "4%", // Taille agrandie si survolé
                zIndex: 2,
                opacity: isHovered ? "100%" : "50%", // Opacité augmentée si survolé
                transition: "all 0.3s ease-in-out", // Transition fluide
            }}
            onMouseEnter={() => setIsHovered(true)} // Survol de la souris
            onMouseLeave={() => setIsHovered(false)} // Quitte le survol
        >
            <img
                src={headImage}
                alt="Heart"
                style={{
                    width: "100%", // L'image remplit le conteneur
                    display: "block", // Évite les marges indésirables
                }}
            />
        </div>
    );
};

export default Brain;

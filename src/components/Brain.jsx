// src/components/Brain.js
import React, { useState } from "react";
import brainImage from "../assets/brain.png"; // Assurez-vous que le chemin est correct

const Brain = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                position: "absolute",
                top: "10%", // Position verticale relative
                left: isHovered ? "45.5%" : "44.5%", // Position horizontale réactive
                transform: "translate(-50%, -50%)", // Centrage exact
                width: isHovered ? "7%" : "4%", // Taille réactive
                zIndex: 3,
                opacity: isHovered ? "1" : "0.5", // Opacité réactive
                transition: "all 0.3s ease-in-out", // Transition fluide
                cursor: "pointer", // Indicateur de survol
            }}
            onMouseEnter={() => setIsHovered(true)} // Survol de la souris
            onMouseLeave={() => setIsHovered(false)} // Quitte le survol
        >
            <img
                src={brainImage}
                alt="Brain"
                style={{
                    width: "400%", // Remplit le conteneur
                    height: "auto", // Maintient le ratio d'aspect
                    display: "block",
                }}
            />
        </div>
    );
};

export default Brain;

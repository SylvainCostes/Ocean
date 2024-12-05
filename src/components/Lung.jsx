// src/components/Heart.js
import React, { useState } from "react";
import lungImage from "../assets/lung.png";

const Lung = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                position: "absolute",
                top: "24%", // Position initiale
                left: isHovered ? "43.5%" : "45.8%", // Position initiale
                width: isHovered ? "13%" : "7.5%", // Taille agrandie si survolé
                zIndex: 2,
                opacity: isHovered ? "100%" : "50%", // Opacité augmentée si survolé
                transition: "all 0.3s ease-in-out", // Transition fluide
            }}
            onMouseEnter={() => setIsHovered(true)} // Survol de la souris
            onMouseLeave={() => setIsHovered(false)} // Quitte le survol
        >
            <img
                src={lungImage}
                alt="Heart"
                style={{
                    width: "100%", // L'image remplit le conteneur
                    display: "block", // Évite les marges indésirables
                }}
            />
        </div>
    );
};

export default Lung;

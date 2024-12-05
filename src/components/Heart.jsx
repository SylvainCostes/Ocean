// src/components/Heart.js
import React, { useState } from "react";
import heartImage from "../assets/heart.png";

const Heart = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                position: "absolute",
                top: "26%", // Position initiale
                left: "51.1%", // Position initiale
                width: isHovered ? "3%" : "1.7%", // Taille agrandie si survolé
                zIndex: 3,
                opacity: isHovered ? "100%" : "50%", // Opacité augmentée si survolé
                transition: "all 0.3s ease-in-out", // Transition fluide
            }}
            onMouseEnter={() => setIsHovered(true)} // Survol de la souris
            onMouseLeave={() => setIsHovered(false)} // Quitte le survol
        >
            <img
                src={heartImage}
                alt="Heart"
                style={{
                    width: "100%", // L'image remplit le conteneur
                    display: "block", // Évite les marges indésirables
                }}
            />
        </div>
    );
};

export default Heart;

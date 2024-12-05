// src/components/Lung.js
import React, { useState } from "react";
import lungImage from "../assets/lung.png"; // Assurez-vous que le chemin est correct

const Lung = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                position: "absolute",
                top: "24%", // Position verticale relative
                left: isHovered ? "43.5%" : "45.8%", // Position horizontale réactive
                transform: "translate(-50%, -50%)", // Centrage exact
                width: isHovered ? "60%" : "34%", // Taille réactive
                zIndex: 3,
                opacity: isHovered ? "1" : "0.5", // Opacité réactive
                transition: "all 0.3s ease-in-out", // Transition fluide
                cursor: "pointer", // Indicateur de survol
            }}
            onMouseEnter={() => setIsHovered(true)} // Survol de la souris
            onMouseLeave={() => setIsHovered(false)} // Quitte le survol
        >
            <img
                src={lungImage}
                alt="Lung"
                style={{
                    width: "100%", // Remplit le conteneur
                    height: "auto", // Maintient le ratio d'aspect
                    display: "block",
                }}
            />
        </div>
    );
};

export default Lung;

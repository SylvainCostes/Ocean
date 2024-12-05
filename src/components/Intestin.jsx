// src/components/Intestin.js
import React, { useState } from "react";
import IntestinImage from "../assets/intestin.png"; // Assurez-vous que le chemin est correct

const Intestin = () => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            style={{
                position: "absolute",
                top: "34.9%", // Position verticale relative
                left: "47%", // Position horizontale relative
                transform: "translate(-50%, -50%)", // Centrage exact
                width: isHovered ? "50%" : "6%", // Taille réactive
                zIndex: 3,
                opacity: isHovered ? "1" : "0.5", // Opacité réactive
                transition: "all 0.3s ease-in-out", // Transition fluide
                cursor: "pointer", // Indicateur de survol
            }}
            onMouseEnter={() => setIsHovered(true)} // Survol de la souris
            onMouseLeave={() => setIsHovered(false)} // Quitte le survol
        >
            <img
                src={IntestinImage}
                alt="Intestin"
                style={{
                    width: "100%", // Remplit le conteneur
                    height: "auto", // Maintient le ratio d'aspect
                    display: "block",
                }}
            />
        </div>
    );
};

export default Intestin;

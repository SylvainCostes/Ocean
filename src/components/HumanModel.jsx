import React from "react";
import bodyImage from "../assets/body.png"; // Chemin correct vers l'image

const HumanModel = () => {
    return (
        <div
            style={{
                position: "absolute", // Nécessaire pour être le fond
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: "23%", // Ajustez selon vos besoins
                zIndex: 1, // En arrière des organes
                pointerEvents: "none", // Empêche les interactions avec la souris
            }}
        >
            <img
                src={bodyImage}
                alt="Human Body"
                style={{
                    width: "100%", // L'image remplit le conteneur
                    opacity: 0.8, // Transparence pour un meilleur rendu
                }}
            />
        </div>
    );
};

export default HumanModel;

// src/components/Head.js
import React from "react";
import headImage from "../assets/head.png";

const Head = () => {
    return (
        <div>
        <img
            src={headImage}
            alt="Head"
            style={{
                position: "absolute",
                top: "9.5%", // Ajustez en fonction de l'image globale
                left: "47.57%", // Ajustez pour aligner correctement
                width: "4.5%", // Ajustez la taille
                zIndex: 2,
            }}
        />
        </div>
    );
};

export default Head;

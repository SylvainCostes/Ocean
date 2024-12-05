import React from "react";
import Organ from "./Organ";
import lungImage from "../assets/lung.png";

const Lung = () => {
    return (
        <Organ
            image={lungImage}
            alt="Lung"
            initialStyles={{
                position: "absolute",
                top: "24%",
                left: "45.8%",
                width: "7.5%",
                zIndex: 2,
                opacity: "50%",
            }}
            hoverStyles={{
                left: "43.5%",
                width: "13%",
                opacity: "100%",
            }}
            info={{
                title: "Poumons",
                description: "Les poumons assurent les échanges gazeux avec le sang.",
            }}
        />
    );
};

export default Lung;

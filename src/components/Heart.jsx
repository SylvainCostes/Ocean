import React from "react";
import Organ from "./Organ";
import heartImage from "../assets/heart.png";

const Heart = () => {
    return (
        <Organ
            image={heartImage}
            alt="Heart"
            initialStyles={{
                position: "absolute",
                top: "26%",
                left: "51.1%",
                width: "1.7%",
                zIndex: 3,
                opacity: "50%",
            }}
            hoverStyles={{
                width: "3%",
                opacity: "100%",
            }}
            info={{
                title: "Cœur",
                description: "Le cœur pompe le sang à travers le système circulatoire.",
            }}
        />
    );
};

export default Heart;

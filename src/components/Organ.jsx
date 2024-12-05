import React, { useState } from "react";
import InfoCard from "./InfoCard";

const Organ = ({ image, alt, initialStyles, hoverStyles, info }) => {
    const [isHovered, setIsHovered] = useState(false);

    const styles = {
        ...initialStyles,
        ...(isHovered ? hoverStyles : {}),
        transition: "all 0.3s ease-in-out",
    };

    return (
        <div
            style={styles}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <img
                src={image}
                alt={alt}
                style={{
                    width: "100%",
                    display: "block",
                }}
            />
            <InfoCard
                title={info.title}
                description={info.description}
                isVisible={isHovered}
            />
        </div>
    );
};

export default Organ;

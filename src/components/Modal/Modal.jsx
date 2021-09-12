import { useEffect } from "react";
import s from "./Modal.module.css";
import PropTypes from "prop-types";

export default function Modal({ onClose, onLeft, onRight, src, tags }) {
    useEffect(() => {
        window.addEventListener("keydown", handleKeyDown);
        // console.log("add handleKeyDown " + Date.now());
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            // console.log("remove handleKeyDown " + Date.now());
        };
    });

    const handleKeyDown = (e) => {
        if (e.code === "Escape") {
            onClose();
        } else if (e.code === "ArrowLeft") {
            onLeft();
        } else if (e.code === "ArrowRight") {
            onRight();
        }
    };

    const handleOverlayClick = (event) => {
        if (event.currentTarget === event.target) {
            onClose();
        }
    };

    return (
        <div className={s.Overlay} onClick={handleOverlayClick}>
            <div>
                <img src={src} alt={tags} className={s.Modal} />
            </div>
        </div>
    );
}

Modal.propTypes = {
    src: PropTypes.string,
    tags: PropTypes.string,
};
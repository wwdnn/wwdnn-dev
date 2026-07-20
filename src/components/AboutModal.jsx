import { useEffect, useRef } from "react";
import { PROFILE } from "../data/profile";

export function AboutModal({ open, onClose }) {
    const dialogRef = useRef(null);

    useEffect(() => {
        const dialog = dialogRef.current;
        if (!dialog) return;
        if (open) {
            if (!dialog.open) dialog.showModal();
        } else {
            if (dialog.open) dialog.close();
        }
    }, [open]);

    const handleClick = (event) => {
        if (event.target === dialogRef.current) {
            onClose();
        }
    };

    return (
        <dialog ref={dialogRef} className="about-modal" onClose={onClose} onClick={handleClick} aria-label="About Me">
            <div className="about-panel">
                <div className="about-ribbon">About Me</div>
                <button className="about-close" type="button" onClick={onClose} aria-label="Close">
                    <i className="fa-solid fa-xmark" aria-hidden="true" />
                </button>

                <div className="about-body">
                    <div className="about-header-meta">
                        <div className="about-portrait">
                            <img className="pixelart" src={PROFILE.avatar} alt={`${PROFILE.name} pixel portrait`} />
                        </div>

                        <div className="about-meta-fields">
                            <div className="about-field">
                                <i className="fa-solid fa-user about-field-icon" aria-hidden="true" />
                                <div className="about-field-content">
                                    <dt>Name</dt>
                                    <dd>{PROFILE.name}</dd>
                                </div>
                            </div>
                            <div className="about-field">
                                <i className="fa-solid fa-briefcase about-field-icon" aria-hidden="true" />
                                <div className="about-field-content">
                                    <dt>Position</dt>
                                    <dd>{PROFILE.position}</dd>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="about-description-field">
                        <div className="about-field-title-row">
                            <i className="fa-solid fa-star about-field-icon" aria-hidden="true" />
                            <dt>Desc</dt>
                        </div>
                        <dd>{PROFILE.description}</dd>
                    </div>
                </div>

                <section className="about-contact" aria-label="Contact">
                    <div className="about-contact-tab">Contact</div>
                    <ul className="about-contact-list">
                        {PROFILE.contacts.map((contact) => (
                            <li key={contact.id}>
                                <a className="about-contact-link" href={contact.href} target="_blank" rel="noreferrer">
                                    <i className={`${contact.icon} about-contact-icon`} aria-hidden="true" />
                                    <span>{contact.label}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </dialog>
    );
}

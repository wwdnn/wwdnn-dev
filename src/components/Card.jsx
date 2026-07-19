import { useEffect, useRef } from "react";

export function Card({ project, isActive, children }) {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        if (isActive) video.play().catch(() => {});
        else video.pause();
    }, [isActive]);

    return (
        <div className={`card ${isActive ? "card-active" : "card-inactive"}`}>
            <div className="card-preview">
                <video
                    ref={videoRef}
                    className="card-video"
                    src={project.video}
                    muted
                    loop
                    playsInline
                    preload="metadata"
                />
            </div>

            <h2 className="card-title">{project.title}</h2>

            <ul className="card-tags">
                {project.tags.map((tag) => (
                    <li key={tag} className="card-tag">{tag}</li>
                ))}
            </ul>

            {children}
        </div>
    );
}

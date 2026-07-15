import { useCarousel } from "../context/CarouselContext";
import { PROJECTS } from "../data/projects";

export function NavCarousel({ onNavigate }) {
    const { active } = useCarousel();

    return (
        <div className="nav-container">
            <button className="nav-button" type="button" onClick={() => onNavigate(-1)} aria-label="Previous project">
                <i className="fa-solid fa-chevron-left" aria-hidden="true" />
            </button>

            <div className="nav-dots" aria-hidden="true">
                {PROJECTS.map((project, index) => (
                    <span key={project.id} className={`nav-dot ${index === active ? "nav-dot-active" : ""}`} />
                ))}
            </div>

            <button className="nav-button" type="button" onClick={() => onNavigate(1)} aria-label="Next project">
                <i className="fa-solid fa-chevron-right" aria-hidden="true" />
            </button>
        </div>
    );
}

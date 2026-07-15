export function Card({ project, isActive, children }) {
    return (
        <div className={`card ${isActive ? "card-active" : "card-inactive"}`}>
            <div className="card-preview">
                <div className="card-icon" style={{ background: isActive ? project.accent : undefined }} />
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

import { useEffect, useRef, useState } from "react";

import { Card } from "./Card";
import { Character } from "./Character";
import { NavCarousel } from "./NavCarousel";

import { useCarousel } from "../context/CarouselContext";
import { PROJECTS } from "../data/projects";
import { SLIDE_MS } from "../data/sprite";

export function Carousel() {
    const idleTimer = useRef(null);
    const [pose, setPose] = useState("idle");
    const { active, go } = useCarousel();

    useEffect(() => () => clearTimeout(idleTimer.current), []);

    function getCardOffset(index) {
        const offset = index - active;
        if (offset > PROJECTS.length / 2) return offset - PROJECTS.length;
        if (offset < -PROJECTS.length / 2) return offset + PROJECTS.length;
        return offset;
    }

    function handleNavigate(direction) {
        setPose(direction > 0 ? "pull" : "push");
        go(direction);

        clearTimeout(idleTimer.current);
        idleTimer.current = setTimeout(() => setPose("idle"), SLIDE_MS);
    }

    return (
        <div className="carousel-container">
            <div className="cards-container" id="projects">
                {PROJECTS.map((project, index) => {
                    const isActive = index === active;
                    const offset = getCardOffset(index);

                    return (
                        <div
                            key={project.id}
                            className={`card-position ${isActive ? "card-position-active" : ""}`}
                            style={{ "--offset": offset }}
                        >
                            <Card project={project} isActive={isActive}>
                                {isActive && <Character pose={pose} />}
                            </Card>
                        </div>
                    );
                })}
            </div>

            <NavCarousel onNavigate={handleNavigate} />
        </div>
    );
}

import { useState } from "react";

import { Card } from "./Card";
import { Character } from "./Character";

import { PROJECTS } from "../data/projects";




export function Carousel() {
    const [ pose, setPose ] = useState('pull');

    return (
        <div className="carousel-container">
            <div className="cards-container">
                {PROJECTS.map((project) => (
                    <Card project={project}/>
                ))}
            </div>

            <div className="nav-container">

            </div>
        </div>
    );
}

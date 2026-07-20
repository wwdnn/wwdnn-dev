import { useState } from "react";
import { PROJECTS } from "./data/projects";

import { Floor } from "./components/Floor";
import { Carousel } from "./components/Carousel";
import { HeroOverlay } from "./components/HeroOverlay";
import { AboutModal } from "./components/AboutModal";
import { CarouselProvider } from "./context/CarouselContext";

import "./App.css";

export default function App() {
    const [aboutOpen, setAboutOpen] = useState(false);

    return (
        <CarouselProvider total={PROJECTS.length}>
            <HeroOverlay onOpenAbout={() => setAboutOpen(true)} />
            <Carousel />
            <Floor />
            <AboutModal open={aboutOpen} onClose={() => setAboutOpen(false)} />
        </CarouselProvider>
    );
}

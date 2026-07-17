import { PROJECTS } from "./data/projects";

import { Floor } from "./components/Floor";
import { Carousel } from "./components/Carousel";
import { HeroOverlay } from "./components/HeroOverlay";
import { CarouselProvider } from "./context/CarouselContext";

import "./App.css";

export default function App() {
    return (
        <CarouselProvider total={PROJECTS.length}>
            <HeroOverlay />
            <Carousel />
            <Floor />
        </CarouselProvider>
    );
}

import { PROJECTS } from "./data/projects";

import { Floor } from "./components/Floor";
import { Carousel } from "./components/Carousel";
import { CarouselProvider } from "./context/CarouselContext";

import "./App.css";

export default function App() {
    return (
        <CarouselProvider total={PROJECTS.length}>
            <Carousel />
            <Floor />
        </CarouselProvider>
    );
}

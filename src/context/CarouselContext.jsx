import { 
    createContext, 
    useCallback, 
    useContext, 
    useRef, 
    useState 
} from "react";



const CarouselContext = createContext(null);
export function CarouselProvider({ total, children }) {
    const [active, setActive] = useState(0);

    const go = useCallback((direction) => {
        setActive((value) => (value + direction + total) % total);
    }, [total]);

    return (
        <CarouselContext.Provider value={{ active, go }}>
            {children}
        </CarouselContext.Provider>
    )
}

export function useCarousel() {
    const ctx = useContext(CarouselContext);
    if (!ctx) throw new Error("useCarousel harus di dalam <CarouselProvider>");
    return ctx;
}

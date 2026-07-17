import { useEffect } from "react";

import layer1 from "../assets/parallax/layer-1.png";
import layer3 from "../assets/parallax/layer-3.png";
import layer4 from "../assets/parallax/layer-4.png";
import layer5 from "../assets/parallax/layer-5.png";

const LAYERS = [
    { className: "is-sky", src: layer1 },
    { className: "is-float-ui", src: layer3 },
    { className: "is-horizon", src: layer4 },
    { className: "is-foreground", src: layer5 },
];

export function Floor() {
    useEffect(() => {
        if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        let mx = 0,
            my = 0,
            raf = 0,
            dirty = false;
        const onMove = (e) => {
            mx = (e.clientX / innerWidth - 0.5) * 2;
            my = (e.clientY / innerHeight - 0.5) * 2;
            dirty = true;
        };
        const loop = () => {
            if (dirty) {
                dirty = false;
                document.body.style.setProperty("--mx", mx.toFixed(4));
                document.body.style.setProperty("--my", my.toFixed(4));
            }
            raf = requestAnimationFrame(loop);
        };
        addEventListener("mousemove", onMove, { passive: true });
        loop();
        return () => {
            removeEventListener("mousemove", onMove);
            cancelAnimationFrame(raf);
        };
    }, []);

    return (
        <div className="parallax" aria-hidden="true">
            {/* Fallback solid sky color in case of transparent gap */}
            <div className="parallax-sky-fallback" />
            <div className="parallax-floor" />
            {LAYERS.map((layer, index) => (
                <div
                    key={layer.src}
                    className={`parallax-layer ${layer.className}`}
                    style={{ "--img": `url(${layer.src})`, "--depth": index, zIndex: index + 1 }}
                />
            ))}
        </div>
    );
}

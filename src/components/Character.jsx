import { SPRITE_URL } from "../data/sprite";

export function Character({ pose }) {
    return (
        <div className="character">
            <img src={SPRITE_URL} className={`character_spritesheet pixelart pose-${pose}`} alt="Character" />
        </div>
    );
}

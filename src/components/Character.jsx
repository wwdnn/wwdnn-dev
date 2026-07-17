import { SPRITE_URL } from "../data/sprite";

export function Character({ pose }) {
    return (
        <div className="character">
            <span className={`character-shadow shadow-${pose}`} aria-hidden="true" />
            <img src={SPRITE_URL} className={`character_spritesheet pixelart pose-${pose}`} alt="Character" />
        </div>
    );
}

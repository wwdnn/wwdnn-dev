export function HeroOverlay() {
    return (
        <section className="hero-overlay" aria-label="Portfolio introduction">
            {/* <aside className="player-card" aria-label="Profile card">
                <div
                    className="player-avatar pixelart"
                    role="img"
                    aria-label="Wildan pixel avatar"
                    style={{ backgroundImage: `url(${SPRITE_URL})` }}
                />
                <div className="player-info">
                    <p className="player-name">Wildan</p>
                    <p className="player-role">Fullstack Developer</p>
                    <div className="player-meter" aria-label="Level 5 experience 3700 of 5000">
                        <span>Lv.5</span>
                        <div className="player-exp">
                            <span />
                        </div>
                        <span>3700 / 5000</span>
                    </div>
                </div>
            </aside> */}

            <div className="hero-copy">
                <h1>Hi! I'm Wildan</h1>
                <p>Fullstack Developer</p>
                <p>Turning ideas into impactful systems.</p>
                <div className="hero-actions">
                    <a className="hero-button hero-button-primary" href="#projects">About Me</a>
                    <button className="hero-button" type="button" disabled>Download CV</button>
                </div>
            </div>
        </section>
    );
}

import heroBackground from '/src/images/hero-background.jpg';

function HeroSection() {
    return (
        <div
            className="relative h-[280px] md:h-[340px] lg:h-[400px] xl:h-[460px] w-full bg-cover bg-center mb-12"
            style={{ backgroundImage: `url(${heroBackground})` }}
        >
            <div id="filter-bakground-layer" className="absolute inset-0 bg-filter-brown opacity-30"></div>
            <div id="hero-text-container"className="absolute inset-0 flex flex-col items-center justify-center text-light-beige">
                <p className="text-2xl md:text-3xl lg:text-4xl font-bold">Find it. Love it.</p>
                <p className="text-7xl md:text-8xl lg:text-9xl mt-2">Shop it!</p>
            </div>
        </div>
    );
}

export default HeroSection;

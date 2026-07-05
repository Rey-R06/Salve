import { useEffect, useState } from "react";
import "./Hero.css"

// Datos del slider
const heroSlides = [
  {
    id: 1,
    title: "SALVE PUNK",
    subtitle: "Punk Rock • Medellín",
    description:
      "No hacemos música para encajar. Hacemos ruido para despertar.",
    buttonPrimary: "Escuchar Ahora",
    buttonSecondary: "Conoce la Banda",
    image: "/img1.jpeg",
  },
  {
    id: 2,
    title: "NUEVO ÁLBUM",
    subtitle: "Disponible en todas las plataformas",
    description:
      "Escucha nuestro nuevo trabajo cargado de energía, rebeldía y la esencia del punk underground.",
    buttonPrimary: "Escuchar",
    buttonSecondary: "Ver Canciones",
    image: "/img2.jpeg",
  },
  {
    id: 3,
    title: "PRÓXIMO TOQUE",
    subtitle: "Nos vemos en el pogo",
    description:
      "Compra tus entradas y acompáñanos en nuestro próximo concierto.",
    buttonPrimary: "Comprar Entradas",
    buttonSecondary: "Más Información",
    image: "/img3.jpeg",
  },
];

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = heroSlides.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const previousSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? totalSlides - 1 : prev - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-slider"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
        }}
      >
        {heroSlides.map((slide) => (
          <article
            key={slide.id}
            className="hero-slide"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          >
            <div className="hero-overlay"></div>

            <div className="hero-bg-text">
              SALVE
              <br />
              PUNK
            </div>

            <div className="hero-content">
              <span className="hero-subtitle">
                {slide.subtitle}
              </span>

              <h1 className="hero-title">
                {slide.title}
              </h1>

              <p className="hero-description">
                {slide.description}
              </p>

              <div className="hero-buttons">
                <button className="btn-primary">
                  {slide.buttonPrimary}
                </button>

                <button className="btn-secondary">
                  {slide.buttonSecondary}
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <button
        className="hero-arrow hero-arrow-left"
        onClick={previousSlide}
      >
        &#10094;
      </button>

      <button
        className="hero-arrow hero-arrow-right"
        onClick={nextSlide}
      >
        &#10095;
      </button>

      <div className="hero-dots">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            className={`hero-dot ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Ir al slide ${index + 1}`}
          />
        ))}
      </div>

      <div className="hero-scroll">
        <span>SCROLL</span>
        <div className="hero-scroll-line"></div>
      </div>
    </section>
  );
}

export default Hero;
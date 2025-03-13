import GalaxyBackground from "../components/GalaxyBackground";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <GalaxyBackground />
      <div className="hero-content">
        <h1>Руслан Пастика</h1>
        <p>Frontend Developer | Создаю цифровые вселенные</p>
      </div>
    </section>
  );
}

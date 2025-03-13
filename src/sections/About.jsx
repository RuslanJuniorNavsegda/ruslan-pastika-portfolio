export default function About() {
  return (
    <section className="about" id="about">
      <div className="about-content">
        <div className="about-text">
          <h2>Обо мне</h2>
          <p>
            Я — фронтенд-разработчик с фокусом на создании интуитивных и
            производительных веб-приложений. Использую современные технологии,
            такие как React и GSAP, чтобы оживить цифровые продукты. Люблю
            решать сложные задачи и превращать идеи в код.
          </p>
          <a href="/resume.pdf" download className="download-btn">
            Скачать резюме
          </a>
        </div>
        {/* Добавьте ваше фото в папку public и раскомментируйте: */}
        {/* <img src="/photo.jpg" alt="Руслан Пастика" className="about-photo" /> */}
      </div>
    </section>
  );
}

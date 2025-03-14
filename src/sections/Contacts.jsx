import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Contacts() {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="contacts section" id="contacts">
      <div className="container">
        <h2>Свяжитесь со мной</h2>
        <form ref={formRef} className="contact-form">
          <input type="text" placeholder="Имя" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Сообщение" rows="5" required></textarea>
          <button type="submit" className="btn">
            Отправить
          </button>
        </form>
      </div>
    </section>
  );
}

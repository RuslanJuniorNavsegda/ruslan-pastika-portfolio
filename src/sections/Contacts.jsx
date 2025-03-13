import { useRef, useEffect } from "react";
import { gsap } from "gsap";

export default function Contacts() {
  const formRef = useRef(null);

  useEffect(() => {
    gsap.from(formRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      scrollTrigger: {
        trigger: formRef.current,
        start: "top 80%",
      },
    });
  }, []);

  return (
    <section className="contacts" id="contacts">
      <div className="contacts-content">
        <h2>Связаться со мной</h2>
        <form
          ref={formRef}
          action="https://formspree.io/f/your-form-id"
          method="POST"
        >
          <input type="text" name="name" placeholder="Ваше имя" required />
          <input type="email" name="email" placeholder="Email" required />
          <textarea
            name="message"
            placeholder="Сообщение"
            rows="5"
            required
          ></textarea>
          <button type="submit">Отправить</button>
        </form>
      </div>
    </section>
  );
}

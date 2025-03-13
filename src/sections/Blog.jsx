import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import sanityClient from "@sanity/client";
import { PortableText } from "@portabletext/react";

// Инициализация GSAP
gsap.registerPlugin(ScrollTrigger);

// Конфигурация Sanity
const client = sanityClient({
  projectId: "ВАШ_PROJECT_ID",
  dataset: "production",
  useCdn: true,
  apiVersion: "2023-05-03",
});

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc) {
        _id,
        title,
        slug,
        publishedAt,
        excerpt,
        body,
        mainImage {
          asset->{
            url,
            metadata {
              dimensions,
              lqip
            }
          }
        }
      }`;

      const data = await client.fetch(query);
      setPosts(data);
    };

    fetchPosts();
  }, []);

  // Анимация секции
  useEffect(() => {
    if (posts.length > 0) {
      gsap.from(sectionRef.current.querySelectorAll(".post-card"), {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
      });
    }
  }, [posts]);

  return (
    <section className="blog" id="blog" ref={sectionRef}>
      <div className="blog-content">
        <h2>Последние статьи</h2>

        <div className="posts-grid">
          {posts.map((post) => (
            <article key={post._id} className="post-card">
              {post.mainImage && (
                <img
                  src={post.mainImage.asset.url}
                  alt={post.title}
                  loading="lazy"
                  className="post-image"
                />
              )}
              <div className="post-content">
                <h3>{post.title}</h3>
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("ru-RU", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                {post.excerpt && <p className="excerpt">{post.excerpt}</p>}
                <a href={`/blog/${post.slug.current}`} className="read-more">
                  Читать статью →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

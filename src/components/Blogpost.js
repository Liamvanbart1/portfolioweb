import styles from "./Blogpost.module.css";

const BlogPost = ({ title, author, date, content, reflection, imageUrl }) => {
  return (
    <div className={styles.blogPost}>
      <header className={styles.header}>
        <div className={styles.authorInfo}>
          {/* <img className={styles.authorImage} src={imageUrl} alt={author} /> */}
          <div className={styles.authorDetails}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.meta}>
              <span className={styles.author}>{author}</span> |{" "}
            </p>
          </div>
        </div>
      </header>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
      <section className={styles.reflection}>
        <h2>Reflectie</h2>
        <p>{reflection}</p>
      </section>
    </div>
  );
};

export default BlogPost;

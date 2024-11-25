import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      <h1>Добро пожаловать в мой магазин</h1>
      <p>
        Это проект просто для портфолио, поэтому тут нет строго дизайна,
        отнеситесь с пониманием :)
      </p>
    </div>
  );
};

export default Home;

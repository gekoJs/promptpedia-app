import style from "./home.module.scss";
import { Feed } from "@components";

const Home = () => (
  <section className={style.container}>
    <h1 className={style.h1}>
      Discover & Share
      <br />
      <span className="span_gradient"> AI-Powered Prompts</span>
    </h1>
    <p className={style.p}>
      Promptopia is an open-source AI prompting tool for modern world to
      discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;

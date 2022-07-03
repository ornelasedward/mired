import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Spline from "@splinetool/react-spline";
import styled from "styled-components";
import slogan from "../assets/slogan.png";

export default function Home() {
  return (
    <section className="showcase">
      <Spline
        className="spline"
        scene="https://prod.spline.design/3wa-76lTmEy1U9T3/scene.splinecode"
      />
      <div className="content">
        <h1>Coming soon!</h1>
        <h3>Thank you for checking out our website </h3>
        <h4>for more info email us @ contactmired@gmail.com</h4>
        <h3>Call us: (469) 619-7722</h3>
      </div>

      <div className="slogan">
        <Image src={slogan} />
      </div>
    </section>
  );
}

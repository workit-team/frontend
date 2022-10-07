import type { NextPage } from "next";
import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Layout } from "../components/Layout";

const containerStyles =
  "w-full h-auto min-h-[900px] relative overflow-hidden z-0";

const titleStyles = "text-black xs:text-5xl sm:text-6xl mb-10";

const buttonStyles =
  "dark-1 rounded-md m-4 p-2 hover:bg-[#590e40] min-w-[10rem]";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Workit.team</title>
        <meta name="description" content="Team up and get to work" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="h-full w-full">
        <Layout>
          <div className={containerStyles}>
            <div className={styles.bg1}></div>
            <div className={`${styles.bg1} ${styles.bg2}`}></div>
            <div className={`${styles.bg1} ${styles.bg3}`}></div>
            <div className="z-10 absolute w-full h-full flex xs:flex-col lg:flex-row items-center justify-center p-4 ">
              <div className="flex flex-col xs:w-full lg:w-1/2 items-center justify-center">
                <h1 className={titleStyles}>Find a team.</h1>
                <h1 className={titleStyles}>Get to work!</h1>
                <h4>Need help finding a project, a team or members?</h4>
                <h4>Find what you need, and Workit!</h4>
              </div>
              <div className="flex flex-col w-1/2">
                <div className=" flex flex-col items-center justify-center">
                  <Link href="/">
                    <button className={buttonStyles}>Log in</button>
                  </Link>
                  <div className="flex flex-col w-[10rem] items-center">
                    Not signed up?
                    <Link href="/">
                      <button className={buttonStyles}>Sign up</button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </div>
  );
};

export default Home;

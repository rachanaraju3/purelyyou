"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Quiz from "@/app/quiz/page";
import Recs from "@/components/recs";
import Chatbot from "@/components/chatbot";
import Homepage from "./homepage/page";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

export default function Home() {
  return (
      <div>
        <Homepage/>
      </div>
    // <div>
    //   {/* <Router>
    //     <Routes>
    //       <Route path="/recs" element={<Recs className={styles.rec} cleanser={{Product: "HI", Features: ["dkflajfla"]}} toner={{Product: "YO", Features: ["dkflajfla, water based"]}} cream={{Product: "SUP", Features: ["moisturizing"]}}></Recs>}/>
    //     </Routes>
    //   </Router> */}
    //   <main className={styles.main}>
    //     <Homepage></Homepage>
    //     <Quiz></Quiz>
    //   {/* <Chatbot className={styles.chatbot}></Chatbot> */}
    // </main>
    // </div>
    
    
    // <main className={styles.main}>
    //   <Recs></Recs>
    //   {/* <Quiz></Quiz> */}
    //   {/* <div className={styles.description}>
    //     <p>
    //       Get started by editing&nbsp;
    //       <code className={styles.code}>app/page.js</code>
    //     </p>
    //     <div>
    //       <h2>Purely You</h2>
    //     </div>
    //     <div>
    //       <a
    //         href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         By{" "}
    //         <Image
    //           src="/vercel.svg"
    //           alt="Vercel Logo"
    //           className={styles.vercelLogo}
    //           width={100}
    //           height={24}
    //           priority
    //         />
    //       </a>
    //     </div>
    //   </div>

    //   <div className={styles.center}>
    //     <Image
    //       className={styles.logo}
    //       src="/next.svg"
    //       alt="Next.js Logo"
    //       width={180}
    //       height={37}
    //       priority
    //     />
    //   </div> */}

    //   <div className={styles.grid}>
    //     <a
    //       href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Docs <span>-&gt;</span>
    //       </h2>
    //       <p>Find in-depth information about Next.js features and API.</p>
    //     </a>

    //     <a
    //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Learn <span>-&gt;</span>
    //       </h2>
    //       <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Templates <span>-&gt;</span>
    //       </h2>
    //       <p>Explore starter templates for Next.js.</p>
    //     </a>

    //     <a
    //       href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
    //       className={styles.card}
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       <h2>
    //         Deploy <span>-&gt;</span>
    //       </h2>
    //       <p>
    //         Instantly deploy your Next.js site to a shareable URL with Vercel.
    //       </p>
    //     </a>
    //   </div>
    // </main>
  );
}

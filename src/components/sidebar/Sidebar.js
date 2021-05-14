import styles from "../sidebar/sidebar.module.css";
import Head from "next/head";
import Link from "next/link";
import Heading from "../heading/Heading";
import Subtitle from "../subtitle/Subtitle";
import Button from "../button/Button";
import ArrowRightAltIcon from '@material-ui/icons/ArrowRightAlt';

export default function Sidebar({subtitle, score, btnText, onClickBtn}) {
  return (
    <>
      <Head>
        <title>
          {subtitle}
        </title>
      </Head>
      <div className={styles.wrapper}>
        <Heading>
          Chess Trainer
        </Heading>
        <Subtitle>
          {subtitle}
        </Subtitle>
        <div className={styles.score}>
          <span>Best score: {score}</span>
        </div>
        <Link href="/">
          <a>
            <Button variant="transparent">
              <ArrowRightAltIcon className={styles.icon}/>
              Back
            </Button>
          </a>
        </Link>
      </div>
      <div className={styles.background}>

      </div>
    </>
  );
}

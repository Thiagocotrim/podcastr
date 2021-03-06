import { Header } from '../components/Header';
import '../styles/global.scss';

import styles from "../styles/app.module.scss";
import { Player } from '../components/Player';
import { PlayerContextProvaider } from '../contexts/PlayerContext';

function MyApp({ Component, pageProps }) {
  return (
    <PlayerContextProvaider >
      <div className={styles.wrapper}>
        <main>
          <Header />
          <Component {...pageProps} />
        </main>
        <Player />
      </div>
    </PlayerContextProvaider>
  )  
}

export default MyApp

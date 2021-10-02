import './App.css';
import Header from './Components/Header';
import MainSection from './Components/MainSection';
import NewsNotifications from './Components/NewsNotifications';
import SideSection from './Components/SideSection';
import styles from './Style/Main.module.css'

const NewsNotificationData = [
  {
    topic: 'KOLUMNI',
    body: 'Yhteiskunta pyörii aamu­virkkujen ehdoilla, ja se vaarantaa monen terveyden'
  },
  {
    topic: 'PÄIVÄN TIMANTTI',
    body: 'Uupumukseen auttaa harvoin sairausloma, psykiatrian erikoislääkäri sanoo – on kuitenkin olemassa yllättäviäkin keinoja, joista voi olla apua'
  }
]

function App() {
  return (
    <div>

      <Header />

      <div className={styles.body}>

        <div className={styles.container}>

          {
            NewsNotificationData.map(element => <NewsNotifications topic={element.topic} body={element.body} />)
          }

          <div className={styles.content}>
            <MainSection />
            <SideSection />
          </div>
          
        </div>

      </div>

    </div>
  );
}

export default App;

import { Post} from './Post';
import { Header } from './components/header';
import './global.css';
import styles from './App.module.css';

function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <aside>

        </aside>

        <main>
          <Post 
            author="Gabriel"
            content="blablabla" 
          />
        </main>
      </div>      
    </>
    
  )
}

export default App

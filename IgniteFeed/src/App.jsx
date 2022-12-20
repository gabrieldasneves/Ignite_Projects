import { Post} from './Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';


function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

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

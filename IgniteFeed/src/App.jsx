import { Post} from './Post';
import { Header } from './components/header';
import './global.css'
function App() {

  return (
    <>
      <Header />
      <Post 
        author="Gabriel"
        content="blablabla" 
      />
      
    </>
    
  )
}

export default App

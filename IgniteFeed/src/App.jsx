import { Post } from './components/Post';
import { Header } from './components/header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import styles from './App.module.css';


const posts = [
  {
    id:1,
    author:{
      avatarUrl:"https://github.com/MateusRodrigues95.png",
      name:"Mateus Rodrigues",
      role:"CTO"
    },
    content: [{
        type: 'paragraph',
        content:'Lorem ipsum dolor '
      },
      {
        type: 'paragraph',
        content: 'sit amet consectetur adipisicing elit. Velit iste tempora omnis dicta! Magnam necessitatibus pariatur'
      },
      {
        type: 'paragraph',
        content:'sit amet consectetur adipisicing elit. Velit iste tempora omnis dicta! Magnam necessitatibus pariatur'
      },
      {
        type: 'paragraph',
        content:'minus non ducimus, repudiandae praesentium nam. Nemo,harum iure'
      },
      {
        type: 'link',
        content:'#repudiandae!'
      }    
    ],
    publishedAt: new Date('2022-05-03 20:00:00')

  },
  {
    id:2,
    author:{
      avatarUrl:"https://github.com/gabrieldasneves.png",
      name:"Gabriel das Neves",
      role:"Chef"
    },
    content: [{
        type: 'paragraph',
        content:'Lorem ipsum dolor '
      },
      {
        type: 'paragraph',
        content: 'sit amet consectetur adipisicing elit. Velit iste tempora omnis dicta! Magnam necessitatibus pariatur'
      },
      {
        type: 'paragraph',
        content:'sit amet consectetur adipisicing elit. Velit iste tempora omnis dicta! Magnam necessitatibus pariatur'
      },
      {
        type: 'paragraph',
        content:'minus non ducimus, repudiandae praesentium nam. Nemo,harum iure'
      },
      {
        type: 'link',
        content:'#repudiandae!'
      }    
    ],
    publishedAt: new Date('2022-05-10 20:00:00')

  }
];

export default function App() {

  return (
    <>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          {posts.map(post => {
            return (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}  />
          )
          })}
        </main>
      </div>      
    </>
    
  )
}



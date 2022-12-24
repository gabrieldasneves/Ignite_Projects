import { Comment } from './Comment'
import styles from './Post.module.css'

export function Post(){
    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.avatar} src="https://github.com/gabrieldasneves.png" alt="" />
                    <div className={styles.authorInfo}>
                        <strong>Gabriel das Neves</strong>
                        <span>Software Eng.</span>
                    </div>
                </div>

                <time title="21 de Dezembro às 18:32 " dateTime="2022-12-21">Publicado há </time>
            </header>

            <div className={styles.content}>
                <p>Lorem ipsum dolor  </p>
                   <p>sit amet consectetur adipisicing elit. Velit iste tempora omnis dicta! Magnam necessitatibus pariatur
                     minus non ducimus, repudiandae praesentium nam. Nemo,
                     harum iure <a href="#"> voluptates blanditiis</a> doloremque molestiae</p> 
                     <p> <a href="#">#repudiandae!</a> {" "}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe seu comentário'></textarea>
                <footer>
                    <button type='submit'>Comentar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>

        
        
    )
}
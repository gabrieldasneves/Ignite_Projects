import { ThumbsUp, Trash } from "phosphor-react"
import { Avatar } from "./avatar"
import styles from "./Comment.module.css"

export function Comment(){
    return (
        <div className={styles.Comment}>
            <Avatar hasBorder={false} src="https://github.com/gabrieldasneves.png" alt="" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong></strong>
                            <time title="21 de Dezembro às 18:32 " dateTime="2022-12-21">Publicado há </time>
                        </div>
                        <button title="Deletar comentário"><Trash size={20} /></button>
                    </header>
                    <p>Muito bom, parabéns!</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
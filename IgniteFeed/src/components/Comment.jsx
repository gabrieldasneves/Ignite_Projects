import { ThumbsUp, Trash } from "phosphor-react"
import { useState } from "react";
import { Avatar } from "./avatar"
import styles from "./Comment.module.css"

export function Comment(props){

    const [likeCount, setLikeCount] = useState(0)

    function handleLikeComment(){
        setLikeCount(likeCount + 1);
    }

    function handleDeleteComment(){
        props.onDeleteComment(props.content);
    }
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
                        <button onClick={handleDeleteComment} title="Deletar comentário"><Trash size={20} /></button>
                    </header>
                    <p>{props.content}</p>
                </div>
                <footer>
                    <button onClick={handleLikeComment}>
                        <ThumbsUp />
                        Aplaudir <span>{likeCount}</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}
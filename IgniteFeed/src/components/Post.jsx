import { Avatar } from './avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';
import {format, formatDistanceToNow} from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';
import { useState } from 'react';



export function Post(props){

    const [comments, setComments] = useState([]);
    const [newCommentText, setNewCommentText] = useState('');

    const publishedDateFormatted = format(props.publishedAt, "d 'de' LLLL 'às' HH:mm'h'", {
        locale:ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(props.publishedAt,{
        locale:ptBR,
        addSuffix:true,
    })


    function handleCreateNewComment(){
        event.preventDefault();
        setComments([...comments,newCommentText]) 
        setNewCommentText('')
    }

    function handleNewComment(){
        setNewCommentText( event.target.value)
        event.target.setCustomValidity('')
    }

    function deleteComment(commentToDelete){
        const commentsWithoutDeletedOne = comments.filter(comment => {
            return comment !== commentToDelete
        })
        setComments(commentsWithoutDeletedOne)
    }

    function handleNewCommentInvalid(){
        event.target.setCustomValidity('Esse campo é obrigatório')
    }

    return(
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar  src={props.author.avatarUrl} alt="" />
                    <div className={styles.authorInfo}>
                        <strong>{props.author.name}</strong>
                        <span>{props.author.role}</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={props.publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </header>

            <div className={styles.content}>
                {props.content.map(line => {
                    if(line.type === "paragraph"){
                        return <p key={line.content}>{line.content}</p>
                    }else if(line.type === "link"){
                        return <p key={line.content}> <a href="#">{line.content}</a> </p>
                    }
                })}
            </div>

            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    onInvalid={handleNewCommentInvalid}
                    required 
                    value={newCommentText} 
                    name = "comment" 
                    onChange={handleNewComment} 
                    placeholder='Deixe seu comentário'
                />

                <footer>
                    <button  
                        type='submit' 
                        disabled={newCommentText.length === 0}>
                            Comentar
                    </button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment 
                        onDeleteComment={deleteComment} 
                        key={comment} 
                        content={comment}
                    />
                })}
            </div>
        </article>
    )
}
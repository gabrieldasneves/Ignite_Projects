import styles from "./Sidebar.module.css";
import {PencilLine} from 'phosphor-react';

export function Sidebar(){
    return (
        <aside className = {styles.sidebar}>
            <img 
                className={styles.cover} 
                src="https://images.unsplash.com/photo-1641380184601-06e153dec2fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cnVuZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="" />
            
            <div className={styles.profile}>
                <img className={styles.avatar} src="https://github.com/gabrieldasneves.png" alt="" />
                <strong>Gabriel das Neves</strong>
                <span>Web Dev</span>
              
            </div>

            <footer>
                <a href="#">
                     <PencilLine size={20}/>
                     Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}
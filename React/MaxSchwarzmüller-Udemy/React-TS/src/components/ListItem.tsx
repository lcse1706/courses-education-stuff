import React from "react";

import styles from './ListItem.module.css'

const ListItem:React.FC<{ text: string, removeItem: () => void}> = (props) => {
    return(
        <li className={styles.item} onClick={props.removeItem}>{props.text}</li>
        
    )
}

export default ListItem;
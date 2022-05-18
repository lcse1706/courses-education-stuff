import React from "react";
import Todo from "../models/todo";
import ListItem from "./ListItem";

const Todos:React.FC<{items: Todo[]}> = (props) => {
    return(
    <ul>
        {props.items.map((item) => (
            <ListItem id={item.id} text={item.text}/>
        ))}
    </ul>
    );
}

export default Todos;
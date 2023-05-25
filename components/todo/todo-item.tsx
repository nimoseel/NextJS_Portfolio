import { ChangeEvent } from 'react'

type TodoItemProps = {
    id: string;
    content: string;
};

export default function TodoItem({id, content}: TodoItemProps){
    return(
        <li className="list-none border-solid border-2 border-indigo-600 rounded-md mb-3 p-4 flex justify-between items-center" key={id}>
            <p className="pl-1">{content}</p>
            <button className="btn-styled text-sm" id={id} onClick={(e)=>{console.log(e.target.id)}}>delete</button>
        </li>
    )
}
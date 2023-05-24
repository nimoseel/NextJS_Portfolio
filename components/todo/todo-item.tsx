import { ChangeEvent } from 'react'
import { useRecoilState } from 'recoil';
import { todoState } from '../../recoil/TodoAtom'

type TodoItemProps = {
    id: string;
    content: string;
};

export default function TodoItem({id, content}: TodoItemProps){
    const [ todoList, setTodoList ] = useRecoilState(todoState);

    const onDelete = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // const newTodoList = todoList.filter((v) => v.id !== e.target.id)
        // setTodoList(newTodoList)
        console.log(e.target.id)
    }

    return(
        <li className="list-none border-solid border-2 border-indigo-600 rounded-md mb-3 p-4 flex justify-between items-center" key={id}>
            <p className="pl-1">{content}</p>
            <button className="btn-styled text-sm" id={id} onClick={(e)=>{console.log(e.target.id)}}>delete</button>
        </li>
    )
}
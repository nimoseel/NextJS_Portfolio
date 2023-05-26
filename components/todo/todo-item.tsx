import { MouseEvent } from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../../recoil/TodoAtom';

interface TodoItemProps {
    id: string;
    content: string;
};

export default function TodoItem({id, content}: TodoItemProps){
    const [ todoList, setTodoList ] = useRecoilState(todoState);

    const onDelete = (e : MouseEvent<HTMLButtonElement>) => {
        const newTodoList = todoList.filter((v : TodoItemProps ) => v.id !== e.currentTarget.id);
        return setTodoList(newTodoList);
    }

    return(
        <li className="list-none border-solid border-2 border-indigo-600 rounded-md mb-3 p-4 flex justify-between items-center" key={id} id={id} draggable="true">
            <p className="pl-1" id={id}>{content}</p>
            <button className="btn-styled text-sm" id={id} onClick={onDelete}>delete</button>
        </li>
    )
}
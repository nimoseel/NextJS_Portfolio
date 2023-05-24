import Layout from "@/components/layout"
import TodoItem from "@/components/todo/todo-item"
import { useState, ChangeEvent } from "react"

export default function Todo(){
    const [ todoTxt, setTodoTxt ] = useState('');
    const [ todoList, setTodoList ] = useState([]);

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTodoTxt(e.target.value);
    }

    const onSave = () => {
        const trimTodoTxt = todoTxt.trim();

        if(trimTodoTxt){
            setTodoList(prev => [...prev, todoTxt]);
            setTodoTxt('');
        }else{
            alert('내용을 입력해주세요')
        }
    }

    return (
        <Layout>
            <div className="flex min-h-screen mb-10 px-6 gap-x-8">
                <div className="flex-1 ">
                    <h2 className="text-xl font-medium mb-3">할 일을 적어보자</h2>
                    <textarea className="bg-transparent w-full border-double border-4 border-indigo-600 rounded-md h-96 mb-3 p-4" name="todoTextArea" value={todoTxt} onChange={onChange} />
                    <button className="btn-styled text-sm" onClick={onSave}>save</button>
                </div>

                <div className="flex-1">
                    <h2 className="text-xl font-medium mb-3">할 일이.... {todoList.length}개다....</h2>
                    <ul>
                        {todoList.map((v: string, index: number) => (
                        <TodoItem key={index} id={index} content={v} />
                        ))}
                    </ul>
                </div>
            </div>
        </Layout>
    )
}
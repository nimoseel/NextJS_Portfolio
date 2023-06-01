import Layout from '@/components/layout';
import TodoItem from '@/components/todo/todo-item';

import { useState, ChangeEvent, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { todoState } from '../recoil/TodoAtom';

interface Todo {
    id: string;
    content: string;
}

export default function Todo(){
    const [ todoTxt, setTodoTxt ] = useState('');
    const [ todoList, setTodoList ] = useRecoilState(todoState);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
    }, []);

    const onChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setTodoTxt(e.target.value);
    }

    const onSave = () => {
        const trimTodoTxt = todoTxt.trim();

        const todoObj = {
            id : 'todo' + todoList.length,
            content: todoTxt,
        }

        if(trimTodoTxt){
            setTodoList((prev:Todo[]) => [...prev, todoObj]);
            setTodoTxt('');
        }else{
            alert('내용을 입력해주세요');
        }
    }

    const onReset = () => {
        setTodoList([]);
    }

    return (
        <>
            <Layout>
                <div className='container mx-auto flex flex-col min-h-screen mb-10 gap-x-8 items-start md:flex-row px-6 '>
                    <div className='flex-auto md:flex-1'>
                        <h2 className='text-xl font-medium mb-3'>할 일을 적어보자</h2>
                        <textarea className='bg-transparent w-full border-double border-4 border-indigo-600 rounded-md h-96 mb-3 p-4' name='todoTextArea' value={todoTxt} onChange={onChange} />
                        <button className='btn-styled text-sm' onClick={onSave}>save</button>
                    </div>

                    <div className='flex-auto md:flex-1'>
                        {
                            loading ? (
                                <p>loading...</p>
                            ) : (
                                <>
                                    <h2 className='text-xl font-medium mb-3'>할 일이.... {todoList.length}개다....</h2>
                                    <ul>
                                        {todoList.map((v:Todo)=> (
                                            <TodoItem key={v.id} id={v.id} content={v.content} />
                                            ))}
                                    </ul>
                                    { (todoList.length > 1) && 
                                        <button className='btn-styled text-sm' onClick={onReset}>reset</button>
                                    }
                                </>
                            )
                        }
                    </div>
                </div>
            </Layout>
        </>
        
    )
}
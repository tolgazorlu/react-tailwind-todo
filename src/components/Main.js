import React, { useEffect, useState } from 'react';
import { FcTodoList } from 'react-icons/fc'
import Todo from './Todo';
import db from '../firebase';
import { collection, getDocs, addDoc, orderBy, serverTimestamp, query} from "firebase/firestore";

function Main() {
    
    
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    
    /*
    useEffect(() => {
        db.collection('todos').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => doc.data().todo))
         });
    }, []);
    */
/*
    useEffect(() => {
        const q = query(collection(db, "todos"))
        const todos = onSnapshot(q, (querySnapshot) => {
          console.log("Data", querySnapshot.docs.map(d => doc.data()));
        });
      }, [])

      
*/
    async function fetchData(){
        const q = query(collection(db, 'todos'), orderBy('timestamp', 'desc'));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            setTodos((querySnapshot.docs.map(doc=>doc.data().todo) ));
        });
    };

    useEffect(() => {
        fetchData()
    }, []);



    const addTodo = (event) => {
        event.preventDefault();

        //setTodos([...todos, input]);
/*
        db.collection('todos').add({
            todo: input
        })*/

        addDoc(collection(db, "todos"), {
            todo: input,
            timestamp: serverTimestamp()
          });

        setInput('');
        fetchData()
    }

    return (

        <div className="h-5/6 w-full flex items-center flex-col">

            <div className="mt-16">

                {/* TITLE SECTION */}

                <div className="text-3xl font-bold text-light mb-8 text-center">
                    React Tailwind Todo
                </div>

                {/* INPUT SECTION */}
            <div className="flex items-center relative">
                <label className="block">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2 text-light">
                        <FcTodoList />
                    </span>
                    <input value={input} onChange={event => setInput(event.target.value)} 
                    type="text" placeholder="What do you want today?"
                    className="placeholder:italic placeholder:text-gray block bg-bgdark w-full rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-pink focus:ring-pink focus:ring-1 sm:text-sm text-light"/>
                </label>
                <button type="button" onClick={addTodo} className="text-white bg-gray hover:bg-blue text-sm px-8 py-2 ml-2 rounded-md">Add Todo</button>
        
            </div>
                </div>
           
           {todos.map(todo => (
                <Todo text={todo} key={todo}/>
           ))}

        </div>
    )
}

export default Main;
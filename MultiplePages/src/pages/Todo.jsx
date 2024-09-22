import React, { useState } from 'react';
import { FiEdit } from "react-icons/fi";
import { RiDeleteBin6Line } from "react-icons/ri";

function Todo() {
  const [todo, setTodo] = useState('');
  const [allTodo, setAllTodo] = useState([]);

  const handleChange = (event) => {
    setTodo(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (todo.trim()) {
      setAllTodo([...allTodo, { text: todo, isCompleted: false }]);
      setTodo('');
    }
  }

  const handleDelete = (index) => {
    setAllTodo(allTodo.filter((_, i) => i !== index));
  }

  const handleComplete = (index) => {
    const updatedTodos = allTodo.map((item, i) => 
      i === index ? { ...item, isCompleted: !item.isCompleted } : item
    );
    setAllTodo(updatedTodos);
  }

  return (
    <div>
      <div className='w-[70vw] min-h-[70vh] bg-[#cba8f6] mx-auto my-auto mt-14 rounded-lg'>
        <h1 className='text-2xl font-bold text-center mt-5 '>iTask: Manage your Todos at one place</h1>
        <div className='ml-auto mr-auto mt-1 mb-[1.5px] w-3/4  h-[1.5px] bg-black'></div>
        <div className='ml-auto mr-auto  mb-3 w-3/4  h-[1.5px] bg-black'></div>
        <h1 className='text-3xl font-bold text-violet-700 ml-5 mt-4'>Add a todo</h1>

        <div className='input'>
          <input 
            type="text" 
            onChange={handleChange} 
            className='w-1/2 bg-white px-5 py-2 rounded-l-full ml-5 mt-3 cursor-pointer' 
            value={todo} 
          />
          <input 
            type="submit" 
            value="Add" 
            className='px-5 py-2 bg-violet-700 ml-1 rounded-r-full text-white font-bold cursor-pointer' 
            onClick={handleSubmit} 
          />
        </div>

        <div className="todos flex flex-col gap-2 mt-6 ml-5">
          {
            allTodo.map((item, index) => (
              <div className='w-1/2 flex mt-2' key={index}>
                <input 
                  type="checkbox" 
                  name="isCompleted" 
                  id="isCompleted"  
                  className='w-4 cursor-pointer' 
                  checked={item.isCompleted} 
                  onChange={() => handleComplete(index)} 
                />
                <h1 
                  className={`ml-2 text-xl font-bold w-[25%] ${item.isCompleted ? 'line-through' : ''}`}
                >
                  {item.text}
                </h1>
                <button className='px-2 py-1 bg-violet-700 ml-2 rounded-lg text-white font-bold'>
                  <FiEdit />
                </button>
                <button 
                  className='px-2 py-1 bg-violet-700 ml-1 rounded-lg text-white font-bold' 
                  onClick={() => handleDelete(index)}
                >
                  <RiDeleteBin6Line />
                </button>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default Todo;

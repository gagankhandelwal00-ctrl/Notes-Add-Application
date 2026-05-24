import React from 'react'
import { useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('')
  const [detail, setDetail] = useState('')
  const [task, setTask] = useState([])
  const submitHandler=(e)=>{
    e.preventDefault();
    const copyTask=[...task];
    copyTask.push({title:title,detail:detail})
    console.log(title); 
    console.log(detail);
    console.log(task)
    setTask(copyTask);
    console.log(copyTask)
    setTitle('')//re empty input box
    setDetail('');//re empty of details box
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }
  return (
    <div className='h-screen lg:flex bg-black text-white'>
      <form onSubmit={(e)=>{
        submitHandler(e);
      }} className='flex p-10 items-start justify-between'>
        <div className='flex gap-4 flex-col items-start w-1/2'>
         <input type="text" placeholder='Enter your topic' 
         className='px-5  py-2 border-2 p-10 w-full rounded outline-none font-medium focus:,shadow-[0_0_10px_cyan]' value={title} onChange={(e)=>{
          setTitle(e.target.value)
         }}/>
        <textarea placeholder='Enter details'name='' id='' 
        className='px-5 py-2 border-2 p-10 w-full rounded max-h-40 outline-none font-medium items-start flex-row'
        value={detail} onChange={(e)=>{
          setDetail(e.target.value);
        }}/>
        <button className='bg-white text-black px-5 py-2 p-10 border-2 w-full outline-none active:bg-black'>Add Notes</button>
        </div>
      </form>
      <div className='lg:w-1/2 lg:border-1-2 p-10'>
      <h1 className='text-4xl font-bold'>Recent Notes</h1>
      <div className='flex flex-wrap gap-5 mt-6 h-full overflow-auto items-start'>
        {task.map(function(elem,idx){
          return <div key={idx} className=" flex justify-between flex-col item-start relative h-52 bg-cover w-40 rounded-xl bg-white text-black p-4 transition duration-300 ease-in-out hover:scale-105 bg-url[('https://static.vecteezy.com/system/resources/thumbnails/060/465/386/small_2x/blank-lined-notepad-isolated-on-transparent-background-png.png')]">
            <h3 className='leading-tight text-lg font-bold'>{elem.title}</h3>
            <p className='mt-3 leading-tight text-sm font-medium text-gray-550'>{elem.detail}</p>
          <button onClick={()=>{
            deleteNote(idx);
          }} className='w-full cursor-pointer active:scale-95 bg-red-500 py-1 text-xs rounded font-bold text-white'>Delete</button>
          </div>
        })}
      </div>
      </div>
    </div>
  )
}

export default App
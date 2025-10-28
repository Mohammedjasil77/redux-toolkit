// import React from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { add,edit,remove } from './slice'
// import { useState } from 'react'
// function App() {
//   const dispatch = useDispatch()
// const todos = useSelector((state)=> state.todoapp.value)
// const [text,setText] = useState('')

//   return (
//     <div>
//       <input type="text"
//       placeholder='enter a task'
//       value={text} 
//       onChange={(e)=> setText(e.target.value)}
//       />
//       <button onClick={()=> {
//         if(text.trim() === "") return ;
//         dispatch(add(text))
//         setText('')
//       }}> addd</button>

//       <ol>
//         {todos.map((todo)=>(
//           <li key={todo.id}>{todo.text}
//           <button onClick={() => dispatch(remove(todo.id))}>x </button>
//           <button onClick={() => {
//             const newtext = prompt('enter text',todo.text)
//             if(newtext)dispatch(edit({id:todo.id,text:newtext}))
//           }}>edit</button>
//           </li>
          
//         ))}
//       </ol>
//     </div>

    
//   )
// }

// export default App


import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, addBy } from "./counterSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(addBy(5))}>Add 5</button>
    </>
  );
}

export default App;

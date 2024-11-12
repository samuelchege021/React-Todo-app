import { useState } from "react"

import Form from "./Form";
import Todolist from "./Todolist";
import Footer from "./footer";




export default function Todo(){

    const[tasks,settasks]=useState([]);
   const completedtasks= tasks.filter((task)=>task.done).length;
   const totalTasks=tasks.length;
   



//     function add(){

// newtask=[];

//         settask(t=>t(...t,newtask));
//     }


return( <div>


    

<h1>todo</h1>


    
<Form tasks={tasks} settasks={settasks}/>
<Todolist tasks={tasks} settasks={settasks}/>

<Footer completedtasks={completedtasks} totalTasks={totalTasks}/>


{console.log(tasks)}


</div>)

}
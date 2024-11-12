import { useState } from "react";
import styles from "./form.module.css";

export default function Form({tasks,settasks}){



    // const[task,settask]=useState("");
    const[task,settask]=useState({name:"",done:false});
   

function handlesubmit(e){



        e.preventDefault();
    
        settasks([...tasks,task]);
        settask({name:"",done:false});
        
    
        
    }

    return (



<form   className={styles.todoform} onSubmit={handlesubmit} >



<div className={styles.inputcontainer}>

<ul>

<input  placeholder="Enter todo item ..." className={styles.moderninput} type="text" onChange={e=>settask({name:e.target.value,done:false})} value={task.name}/>

<button  className={styles.modernButton} type="submit">add</button>


</ul>





</div>



</form>


    )
}
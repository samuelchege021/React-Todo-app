
import styles from "./todoitem.module.css";

export default function Todoitem({item,tasks,settasks}){



 function handledelete(item){



console.log("delete button clicked item",item);

settasks(tasks.filter((task)=>task!==item));


    };

    function handleclick(name){

    const newarray= tasks.map((task)=>task.name===name?{...task,done:!task.done}:task)



    settasks(newarray)
        // console.log(tasks)
    }

    const classname=item.done ? styles.completed:"";

    return(
    
    <div className={styles.item}>
    
    
    <div  className={styles.itemname} >
    
    <span className={classname}    onClick={()=>handleclick(item.name)}>{item.name}</span>
    
    
    </div>

    <span>   
        <button  onClick={()=>handledelete(item)}              className={styles.deletebutton}>x</button>
    </span>

    <hr className={styles.line}/>
    
     </div>)
}
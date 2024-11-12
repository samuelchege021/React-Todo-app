
import Todoitem from "./Todoitem";

import styles from "./todolist.module.css";

export default function Todolist({tasks,settasks}){
const sortedtasks=tasks.slice().sort((a,b)=>Number(a.done)-Number(b.done))

return <div className={styles.list}> 




{sortedtasks.map((item)=>(<Todoitem key={item.name} item={item}  tasks={tasks} settasks={settasks} />))}





</div>


    
}
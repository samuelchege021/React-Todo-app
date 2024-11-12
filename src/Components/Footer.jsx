

import styles from './footer.module.css'

export default function Footer({completedtasks,totalTasks}){



    return <div className={styles.footer}>

        
<span><h1>Total tasks:{totalTasks}</h1></span>
<span className={styles.item}>


<h1>completed tasks:{completedtasks}</h1>

</span>



    </div>
}
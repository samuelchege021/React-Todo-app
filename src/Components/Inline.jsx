
// import "../css/style.css"


import styles from './inline.module.css'

export default function Inline(){



const header={color:"blue",fontSize:"140px"}


return(


<div>
<h4 style={header}>inline component </h4>



<h5  className={styles.header}>outside styling</h5>

</div>
)



}
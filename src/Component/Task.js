
import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle}) => {

  return (

    <div
     className={`task ${task.reminder ?'reminder' : ''}`}
      onDoubleClick={() => onToggle(task.id)}>
        <h4 style={{color:'blue'}}>{task.text}{' '}
        <FaTimes className='fatimes'onClick={()=> onDelete(task.id)}/></h4>
      <small className='small'>{task.day}</small><hr />
    </div>
  )
}

export default Task

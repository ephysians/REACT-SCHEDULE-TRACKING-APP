import { useState } from "react"


const AddTask = ({ onAdd }) => {

const[text, setText] = useState('')   // This is making sure that each input field has it own component level state
const[day, setDay] = useState('')
const[reminder, setReminder] = useState(false)     // The reninder is set as fault by default


const onSubmit= (e)=>{
e.preventDefault()   // The onsubmit takes an eveent object (e) to prevent the form from submitting to a page



if (!text || !day || !reminder ) {          
                                          /*This function alert if the user tries
                                            to submit without adding a task in 
                                            either of the input field*/
  alert('Task, Date & Check box are required');   
  return
}




onAdd({ text, day, reminder })    /*  If the above condition is passed, we call "onAdd" & pass an
                                    object with text,day and reminder
                                        */

setText('')       // All fields are clear once all condition are met & form submitted
setDay('')
setReminder(false)
}




  return (
                                                      /* It's import to put the onsubmit props inside the form tag as 
                                                         it's the entir form we submit to the App.js via props */
    <form className='add-form' onSubmit={onSubmit}>                                 

        <div className='form-control'>
            <label>Task</label>
            <input type='text' placeholder='Enter Task' value={text} onChange={(e) =>setText(e.target.value)} />
        </div>

        <div className= 'form-control' >
        <label> Day & Time </label>
        <input type='text' placeholder='Enter Date & Time' value={day} onChange={(e) =>setDay(e.target.value)} />
        </div>

        <div className='form-control form-control-check'>
        <label>Set Reminder</label>
            <input type='checkbox' checked={reminder} value={reminder}
            onChange={(e)=>setReminder(e.currentTarget.checked)} />
        </div>

        <input type='submit' value= 'save Task' className='btn btn-block'/>
        
    </form>

  )
}

export default AddTask

import {useState} from "react"
import Header from "./Component/Header"
import Tasks from "./Component/Tasks"
import AddTask from "./Component/AddTask"


const App = () => {

const [showAddTask, setShowAddTask] = useState(false)  /* So by default the out will not show
                                        cause it's on fals except if button is toggle the value cahnges to true*/

    const [tasks, setTasks] = useState([

          {
            id: 1,
            text: "Attend my US Visa appointment & get my Visa",
            day: "24th June 2023 at 11:05am",
            reminder: true,
          },

          {
            id: 2,
            text: "Travel to the State 2 months after ",
            day: "12th July 2023 at 10:00pm",
            reminder: true,
          },

          {
            id: 3,
            text: "Get a remote full-stack gig in US",
            Date: "4th September 2023 at 10:45am",
            reminder: false,
          },

          {
            id: 4,
            text: "Buy a House in Alaska 12 months after",
            day: "12th September 2023 at 10:45am",
            reminder: true,
          },

          {
            id: 5,
            text: "File for my family as they join me in October",
            day: "10th October 2023 at 10:45am",
            reminder: false,
          },
        ])


    /*  Add Tasks f()
     ---------------------*/ 
  /* Now We have to add this to our state but we dont have an id, so we create an id for this with Math.floor*/

  const addTask= (task) =>{     
  const id = Math.floor(Math.random() * 10000) + 1       // This allows us generate random digits for our id each time need to ask new task.
  const newTask = { id, ...task }                        // The new Task is an object with all the initial task & the id
  setTasks([...tasks, newTask])                         // Finally, setTask allows to pass add new tasks to the initial task(s) we had
}


   /*  Deleting Tasks f()
     ---------------------*/
  const deleteTask = (id)=>{
    setTasks(tasks.filter((task)=>task.id !==id))     // Show all tasks other except the one with current task.id 
  }

  
  /* Task Green reminder & Toggle f()
     ---------------------------*/
     const onToggleReminder = (id)=> {
      setTasks(tasks.map((task)=>
      task.id === id ? {...task, reminder:!task.reminder}: task))  /*if the ontoggle id (task.id) is the same, let all the tasks
                                                                    remain the same except the remainder become opposite*/
    }



/*Since the button to toggle the showAdd f() is in the 'Header', we then
emeploy the 'setShowadd' inside to set the opposite of showAdd f() as seen in Line 85
& finally send to onAdd to 'Header' as a props*/

  return (

    <div className='container'>
    <Header onAdd={() => setShowAddTask(!showAddTask)} 
    showAdd={showAddTask}/>   
    {showAddTask && <AddTask onAdd={addTask} />}                
    {tasks.length > 0 ? 
    <Tasks tasks={tasks} onDelete= {deleteTask} onToggle= {onToggleReminder} />
    :'Add new task to show'}
    </div>

  )
}


export default App

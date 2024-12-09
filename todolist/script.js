const taskInput = document.getElementById("input-text");
const addTaskBtn = document.getElementById("add-task-btn");
const taskList = document.getElementById("task-list");
const completedtaskList = document.getElementById("completed-list");



// addTaskBtn.addEventListener("click",()=>{addTask(form)})

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let completetasks= JSON.parse(localStorage.getItem("completetasks")) || [];

function renderTask(){
    taskList.innerHTML="";
    completedtaskList.innerHTML="";

    tasks.forEach((task,index)=>{

        //initialize elements
        const li = document.createElement("li");
        const checkbox=document.createElement("input")
        checkbox.type="checkbox"
        const titleText=document.createElement("span")
        titleText.textContent=task.title;
        const deleteBtn=document.createElement("button")
        deleteBtn.textContent="Delete"
        
        li.appendChild(checkbox)
        li.appendChild(titleText)
        li.appendChild(deleteBtn)
        li.className=task.priority
        taskList.appendChild(li)

        deleteBtn.addEventListener("click", ()=>deleteTask(index))
        checkbox.addEventListener("click",()=>{
            if(checkbox.checked){
            // taskList.removeChild(li)
            completetasks.push(tasks[index]) 
            tasks.splice(index,1);
             
            localStorage.setItem("tasks", JSON.stringify(tasks)); 
            localStorage.setItem("completetasks", JSON.stringify(completetasks)); 
            
            // Update localStorage
            renderTask();
            }
        })
    })

    completetasks.forEach((task,index)=>{
        const li = document.createElement("li");
        const checkbox=document.createElement("input")
        checkbox.type="checkbox"
        checkbox.checked=true
        const titleText=document.createElement("span")
        titleText.textContent=task.title;
        const deleteBtn=document.createElement("button")
        deleteBtn.textContent="Delete"
        li.appendChild(checkbox)
        li.appendChild(titleText)
        li.appendChild(deleteBtn)
        completedtaskList.appendChild(li)

        deleteBtn.addEventListener("click", ()=>deleteCompletedTask(index))

        checkbox.addEventListener("click",()=>{
            if(!checkbox.checked){
            // completedtaskList.removeChild(li)
            tasks.push(completetasks[index]) 
            completetasks.splice(index,1);
             
            localStorage.setItem("tasks", JSON.stringify(tasks)); 
            localStorage.setItem("completetasks", JSON.stringify(completetasks)); 
            
            // Update localStorage
            renderTask();
            }
        })
    })
}

function addTask(form){
    const taskTitle = form.title.value;
    const priority=form.priority.value;
    if (taskTitle) {
        const newTask = { title: taskTitle ,priority: priority,completed: false};
        tasks.push(newTask);  // Add new task to array
        localStorage.setItem("tasks", JSON.stringify(tasks));  // Save tasks to localStorage
        renderTask();  // Re-render task list
        // taskInput.value = "";  // Clear input field
      }
      form.reset()
      document.getElementById("dialog").style.display="none"
}

function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    renderTask();
}

function deleteCompletedTask(index){
    completetasks.splice(index,1);
    localStorage.setItem("completetasks", JSON.stringify(completetasks));
    renderTask();
}

renderTask();


document.getElementById("add-task").addEventListener("click",()=>{
   document.getElementById("dialog").style.display="flex"
})

document.getElementById("close").addEventListener("click",()=>{
    document.getElementById("dialog").style.display="none"
 })
 
function filter(){

    const filterValue=document.getElementById("filter").value;
    if(filterValue=="none")
        {renderTask();
            return;}

    taskList.innerHTML="";
    

    tasks.forEach((task,index)=>{
        if(task.priority==filterValue){
            const li = document.createElement("li");
        const checkbox=document.createElement("input")
        checkbox.type="checkbox"
        const titleText=document.createElement("span")
        titleText.textContent=task.title;
        const deleteBtn=document.createElement("button")
        deleteBtn.textContent="Delete"
        li.appendChild(checkbox)
        li.appendChild(titleText)
        li.appendChild(deleteBtn)
        li.className=task.priority
        taskList.appendChild(li)

        deleteBtn.addEventListener("click", ()=>deleteTask(index))
        checkbox.addEventListener("click",()=>{
            if(checkbox.checked){
            // taskList.removeChild(li)
            completetasks.push(tasks[index]) 
            tasks.splice(index,1);
             
            localStorage.setItem("tasks", JSON.stringify(tasks)); 
            localStorage.setItem("completetasks", JSON.stringify(completetasks)); 
            
            // Update localStorage
            renderTask();
            }
        })
        }
        //initialize elements
        
    })
}


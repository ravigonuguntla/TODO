const todolist=[];

function getItems(){
    let jsHtml='';
        for(i=0;i<todolist.length;i++){
        const todoObject=todolist[`${i}`];
        const {name,duedate}=todoObject;
        const html=`<div>${name}</div> 
        <div>${duedate}</div> 
        <button class="delete-button" onclick="
        todolist.splice(${i},1);
        getItems();
        ">DELETE</button>`;
        
        jsHtml += html;
        }
    document.querySelector('.js-todo-html').innerHTML=jsHtml;
}



function addtodo(){
    const inputName=document.querySelector('.js-input-name');
    const name=inputName.value;
    const inputDate=document.querySelector('.js-input-duedate');
    const duedate=inputDate.value;
    todolist.push({name,
        duedate});
    //inputName.value='';
    getItems();
}

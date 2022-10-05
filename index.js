const inputEl=document.getElementById("input-el");
let myLeads = [];
const inputBtn = document.getElementById("input-btn")
const ulEl=document.getElementById("ul-el");
const del_btn=document.getElementById("del-btn");
const tabBtn=document.getElementById("tab-btn");


let leads_LocalStorage=JSON.parse(localStorage.getItem("myLeads"));

//to print local storage after refreshing
if (leads_LocalStorage) {
    myLeads = leads_LocalStorage
    render(myLeads)
}

function render(leads){
    let listItems="";
    for(let i=0;i<leads.length;i++)
    { 
        listItems+=
        `<li>
        <a target ='_blank' href=' ${leads[i]}'>${leads[i]}
        <a/>
        </li>
        `
   
    }
    ulEl.innerHTML=listItems;
    
    }

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value=""

    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    console.log(myLeads)
    
     render(myLeads)
    
  
   
})



del_btn.addEventListener("dblclick",function(){
    localStorage.clear();
    myLeads=[];
    render(myLeads);
})




tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

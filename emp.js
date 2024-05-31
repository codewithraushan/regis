
 
 
 function submitForm(){
    let employee={}; 
    let name=document.getElementById("name").value;
    let age=document.getElementById("age").value;
    let addr=document.getElementById("age").value;
    let mob=document.getElementById("age").value;
    let gender=document.getElementById("age").value;
    let date=document.getElementById("age").value;
    let media=document.getElementById("age").value;

    if(name==null||name===""){
        alert("Please enter name");
        return;
    }
    if(age==null||age===""){
        alert("Please select age");
        return;
    }
    if(addr==null||addr===""){
        alert("Please enter address");
        return;
    }
    if(mob==null||mob===""){
        alert("Please enter mobile");
        return;
    }
    if(gender==null||gender===""){
        alert("Please enter gendar");
        return;
    }
    if(date==null||date===""){
        alert("Please enter date");
        return;
    }
    if(media==null||media===""){
        alert("Please enter social media");
        return;
    }
   
    employee.name=name;
    employee.age=age;
    employee.addr=addr;
    employee.addr=mpb;
    employee.addr=gendar;
    employee.addr=date;
    employee.addr=media;
    console.log(employee  )
    alert(`Ready to submit form ${JSON.stringify(employee)}`);
}

 function resetForm(){
    document.getElementById("name").value="";
    document.getElementById("age").value="";
    document.getElementById("addr").value="";
    document.getElementById("mob").value="";
    document.getElementById("gender").value="";
    document.getElementById("date").value="";
    document.getElementById("media").value="";
 }

var a=0;
function savetolocal(event){
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const phone=event.target.phone.value;
    const obj={
        name:name,
        email:email,
        phone:phone,
    }
    if (a==0){
    axios.post("https://crudcrud.com/api/671e6c124e834827bdf70c7fe2e38416/data",obj)
    .then((response) =>{
      showonscreen(response.data)  
      console.log(response)
    })
    .catch((err)=>{
      console.log(err)
    })
    //showonscreen(obj)
}
    else{
        axios.put(`https://crudcrud.com/api/671e6c124e834827bdf70c7fe2e38416/data/${b}`,obj)
        .then((response)=>{
            reload();
        })
        .catch((err)=>{
            console.log(err)
        })
    }

}
function showonscreen(obj){
    const parent=document.getElementById('items')
    const child=document.createElement('li')
    child.id=obj._id
    b=obj._id
    child.textContent=obj.name+" "+obj.email+" "+obj.phone

    const deletebtn=document.createElement('input')
    deletebtn.type="button"
    deletebtn.value="Delete"
    deletebtn.onclick=()=>{
        axios.delete(`https://crudcrud.com/api/671e6c124e834827bdf70c7fe2e38416/data/${b}`)
        .catch((err)=>{
            console.log(err)
        })
        parent.removeChild(child)
    }

    const editbtn=document.createElement('input')
    editbtn.type="button"
    editbtn.value="Edit"
    editbtn.onclick=()=>{
        a=1
        document.getElementById("name").value=obj.name
        document.getElementById("phone").value=obj.phone
        document.getElementById("email").value=obj.email
        
        parent.removeChild(child)
    }
    child.appendChild(editbtn)
    child.appendChild(deletebtn)
    parent.appendChild(child)
}

window.addEventListener("DOMContentLoaded",()=>{
    
    axios.get("https://crudcrud.com/api/671e6c124e834827bdf70c7fe2e38416/data")
    .then((res)=>{
      console.log(res)
      for(var i=0;i<res.data.length;i++){
        showonscreen(res.data[i])
      }
    })
    .catch((error)=>{
      console.log(error)
    })  
  })

function reload(){
    a=0
    axios.get(`https://crudcrud.com/api/671e6c124e834827bdf70c7fe2e38416/data/${b}`)
    .then((res)=>{
      showonscreen(res.data)
      }
    )
    .catch((error)=>{
      console.log(error)
    })  
}

 
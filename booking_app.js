// function savetolocal(event){
//     event.preventDefault();
//     const name = event.target.name.value;
//     const date = event.target.date.value;
//     const phone = event.target.phone.value;
//     const email = event.target.email.value;
//     localStorage.setItem('name',name);
//     localStorage.setItem('phone',phone);
//     localStorage.setItem('email',email);
//     localStorage.setItem('date',date);
// }

let f1=document.getElementById("name");
let f2=document.getElementById("phone");
let f3=document.getElementById("email");
let uli=document.getElementById("items");
let forms=document.getElementById("btn")

forms.addEventListener('click',local)
function local(e){
  e.preventDefault();
  let myobj={
    name:f1.value,
    email:f3.value,
    phone:f2.value
  }
  let parent=document.createElement('li');
  parent.textContent=myobj.name+" "+myobj.email+" "+myobj.phone;
  let deletes=document.createElement('button');
  let text=document.createTextNode("delete");
  deletes.appendChild(text);
  parent.appendChild(deletes);
  uli.appendChild(parent);

  deletes.addEventListener('click',remove)
  function remove(e){
    e.preventDefault();
    localStorage.removeItem(f3.value);
    uli.removeChild(parent);
  }

  let myobj_serial=JSON.stringify(myobj);
  localStorage.setItem(f3.value,myobj_serial);



}






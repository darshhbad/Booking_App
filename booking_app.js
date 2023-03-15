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

function savetolocal(event){
     event.preventDefault();
     let obj = {
         name: event.target.name.value,
         date: event.target.date.value,
         phone: event.target.phone.value,
         email: event.target.email.value
         }
         let obj_serial= JSON.stringify(obj);

        localStorage.setItem(obj.email,obj_serial);
}




function savetolocal(event){
    event.preventDefault();
    let obj = {
        name: event.target.name.value,
        date: event.target.date.value,
        phone: event.target.phone.value,
        email: event.target.email.value
        }
        let obj_serial= JSON.stringify(obj);

        localStorage.setItem("obj",obj_serial);

}

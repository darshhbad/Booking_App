function savetolocal(event){
    event.preventDefault();
    const name = event.target.name.value;
    const date = event.target.date.value;
    const phone = event.target.phone.value;
    const email = event.target.email.value;
    localStorage.setItem('name',name);
    localStorage.setItem('phone',phone);
    localStorage.setItem('email',email);
    localStorage.setItem('date',date);
}

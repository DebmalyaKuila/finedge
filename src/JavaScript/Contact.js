document.querySelector("#form").addEventListener("submit", event =>{
    event.preventDefault();
    const data={
        name:event.target.querySelector("#name").value,
        email:event.target.querySelector("#email").value,
        message:event.target.querySelector("#msg").value
    }
    confirm(`Name:${data.name}\nEmail:${data.email}\nMessage:${data.message}\nShould we proceed with this data?`)
})
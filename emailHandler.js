const myForm = document.getElementById("forma");
const btn = document.querySelector('#btnSubmit')

btn.addEventListener('onclick', () =>{
    document.myForm.submit();
})
myForm.addEventListener('submit', e =>{
    e.preventDefault();
    console.log(123)
    const formData = new FormData(myForm);
    fetch('http://127.0.0.1:8000/', {
        method: 'post',
        headers: {
            "Accept": "applications/json",
            "Content-Type":  "applications/json",
        },
        body: formData

    }).then(function (response) {
        return response.text();
    }).then(function (text){
        console.log(text)
    })
    
})
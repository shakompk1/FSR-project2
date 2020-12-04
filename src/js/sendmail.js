const name = document.querySelector('#name');
    mobile = document.querySelector('#number'),
    email = document.querySelector('#email'),
    comments = document.querySelector('#comments'),
    send = document.querySelector('#Send');


window.addEventListener('click', (elem)=>{
    let readyToSent = false
    if(elem.target.className == 'Send'){
        elem.preventDefault();
        if(name.value == ''){
            name.style.border ='2px solid red';
            name.placeholder ="Enter the name";            
        }else{
            name.style.border ='2px solid green';
        }

        if(email.value == '' || mobile == ''){
            email.style.border ='2px solid red';
            email.placeholder ="Mail or Phone cant be ampty";

            mobile.style.border ='2px solid red';
            mobile.placeholder ="Mail or Phone cant be ampty";
        }else{
            email.style.border ='2px solid green';
            mobile.style.border ='2px solid green';
        }

        if(name.value != '' && (email.value != '' || mobile.value !='')){
            readyToSent = true;
        }
        if(readyToSent){
            fetch('/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: name.value,
                    email: email.value,
                    mobile: mobile.value,
                    comments: comments.value
                })
                }).then(res => res.json())
                .then(info=>{
                    if(info){
                        name.style.border = '1px solid #D8E0FF';
                        email.style.border = '1px solid #D8E0FF';
                        mobile.style.border = '1px solid #D8E0FF';                        

                        name.value="";
                        email.value="";
                        mobile.value="";
                        comments.value="";
                    }
                })
        }
        
    }
})

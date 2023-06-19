console.log('dsgdsddsgdsg')

const getInput=()=>{
    let username=document.getElementById('username').value;
    let password=document.getElementById('password').value;
    let credenciales={
        username:username,
        password:password
    };
    fetch('/admin',{
        method:'POST',
        headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(credenciales)
    })
    .then((res)=>{
        console.log(res)
        console.log('hay entrega de datos en la promesa')
        
        if(res.ok){

            return res.json();
        }else{
            console.log('hay problemas en la entrega')
            throw new Error('Error en la solicitud');
        }
    })
    .then((data)=>{
    
        console.log(`Esta fue la respuesta ${data}`)
    }).catch((err)=>{
    
        console.log('ESTAMOS EN PROBLEMAS');
    });
}


 
 

function pegarIdade(){
    var i=document.querySelector('#idade').value;
    i=parseFloat(i);
    idade=i;
    console.log(idade);
}


var checaIdade= function() {
    return new Promise(function(resolve,reject){
        var idade
        var botao=document.querySelector('#submit');
        botao.setAttribute('onclick','pegarIdade()');
        botao.onreadystatechange=function(){
        if(idade > 18){
            resolve('maior que 18');
        }else{
            reject('menor que 18');
        }
        }

    });
}

checaIdade()
    .then(function(response){
       console.log(response);
    })
    .catch(function(error) {
        console.log(error);
    });    

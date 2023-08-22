
function frutas(){

    var input = document.querySelector("#palavra");

    var texto = input.value;

    var cor = "";
   
    if (texto == "maçã"){
            
                    
            cor = "vermelho" ; 
    }
    else if (texto == "laranja"){
            
                    
            cor = "laranja" ; 
    }
 
    else if (texto == "tangerinaa"){
            
                    
            cor = "laranja" ; 
    }

    else if (texto == "limão"){
            
                    
            cor = "verde" ; 
    }

    alert(texto + ' é ' + cor);  

}

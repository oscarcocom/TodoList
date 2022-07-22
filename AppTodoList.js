var TrActiviti, ActividadInput, TBody, texto, BottonEliminar;
const ArrayActivities =[1];
const x= console.log.bind();
//Elemento de input






//Elemento de celda



                                  

TBody.appendChild(TrActiviti);

function Validador(){
 var inputValue = document.getElementById("inputValue").value;

  if(inputValue === ""){
     
    alert("Te falto poner texto")

  }else{
    // alert(" gracias por poner tu actividad")
    TBody=document.getElementById("Tbody");
    TrActiviti = document.createElement("tr");
    TrActiviti.innerHTML=  `<th scope="row">2</th>
                        <td>${inputValue}</td>
                        <td><button  class=" BottonEliminar  btn btn-warning">Eliminar  
                        <i class="large material-icons">delete_forever</i>
                        </button>
                        </td>`;
   TBody.appendChild(TrActiviti);
   BottonEliminar = document.getElementsByClassName("BottonEliminar");
   x(BottonEliminar)
 

   // burbujeo
   for (iterador=0; iterador < BottonEliminar.length; iterador++ ){
     BottonEliminar[iterador].onclick=function(){
         var padre = this.parentElement;
         var PapaDelPapa= padre.parentElement;
         PapaDelPapa.style.display="none";
        //  x(PapaDelPapa)
     }
   }
 
  }


 

// operador ternario

// inputValue ==="" ? alert("Te falto poner texto") : alert(" gracias por poner tu actividad")





}














function editmovie(id){

    var form=document.createElement('form');
    form.method='get';
    form.action="http://localhost:3000/routes/movie/read/"+id;
    document.body.appendChild(form);
    form.submit();

}

function deletemovie(id){

    var form=document.createElement('form');
    form.method='post';
    form.action="http://localhost:3000/routes/movie/delete/"+id;
    document.body.appendChild(form);
    form.submit();
    /*var xhr = new XMLHttpRequest();
 
     xhr.onload = function(){
         if(xhr.status === 200 || xhr.status === 201){
             let deletedmovie = document.getElementById("movie"+id);
             deletedmovie.remove();
         }
     }
 
     xhr.open("POST", "/routes/movie/delete/"+ id);
     xhr.setRequestHeader("Content-Type", 'application/json');
     xhr.send();*/

}

function trendingmovie(id, trend){
    console.log(trend);
    if(trend === "false"){
    var form=document.createElement('form');
    form.method='post';
    form.action="http://localhost:3000/routes/movie/update/"+id;

    var hiddenField = document.createElement("input");
    hiddenField.type="hidden";
    hiddenField.name="trending";
    hiddenField.value= true;
    form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
    }
    
}

function ntrendingmovie(id, trend){
    console.log(trend);
    if(trend === "true"){
    var form=document.createElement('form');
    form.method='post';
    form.action="http://localhost:3000/routes/movie/update/"+id;

    var hiddenField = document.createElement("input");
    hiddenField.type="hidden";
    hiddenField.name="trending";
    hiddenField.value= false;
    form.appendChild(hiddenField);
    
    document.body.appendChild(form);
    form.submit();
    }
}

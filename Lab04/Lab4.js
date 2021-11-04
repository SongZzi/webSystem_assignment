function myFunction() {
    let newDiv = document.createElement("article");
    var num = 0;

    newDiv.innerHTML = document.getElementById("textarea").value;

    if(document.getElementById("textarea").value != ""){
    document.querySelector("#section").appendChild(newDiv);

    num=document.querySelector("#section").childElementCount;

    document.querySelector("#div1").innerHTML = num.toString();
    }

};

document.getElementById('btn-count').addEventListener('click', myFunction);


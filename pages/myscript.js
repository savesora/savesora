// const body = document.getElementsByTagName("body")[0];

for (let i=1;i<=100;i++){
    let p = document.createElement("p");
    p.innerHTML = i;
    document.getElementsByTagName("body")[0].appendChild(p);
    p.style.fontSize = "2em";

}


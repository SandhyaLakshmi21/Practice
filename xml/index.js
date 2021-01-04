// XMLHttpRequest//
const container = document.getElementById("hello");
function addData(data){
    for(let i=0;i<data.length; i++){
        const newElement = document.createElement("h3");
        newElement.textContent = `${i+1}) `+data[i].title;
        container.append(newElement);
    }
}
const xhr = new XMLHttpRequest();
xhr.open("GET","req.text");
xhr.send();

xhr.onreadystatechange = ()=>{
    if(xhr.readyState===4){
        if(xhr.status === 200){
            let dataarray = JSON.parse(xhr.response);
            addData(dataarray);
            console.log(dataarray);
        }
    }
}
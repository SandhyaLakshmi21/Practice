var  xmlHttp = createXmlHttpRequestObject();

function createXmlHttpRequestObject(){
    var xmlHttp;

    if(window.XMLHttpRequest){
        xmlHttp= new XMLHttpRequest();
    }else{
        xmlHttp= new ActiveXObject("Microsoft.XMLHTTP");
    }

    return xmlHttp;
}

function process(){
    if(xmlHttp){
        try{
            xmlHttp.open("GET","ajax.txt",true);
            xmlHttp.onreadystatechange=handleServerResponse;
            xmlHttp.send(null);
        }catch(e){
            alert(e.toString() );

        }
    }
    
}

function handleServerResponse(){
    theD= document.getElementById("theID");
    if(xmlHttp.onreadystate==1){
        theD.innerHTML +="Status 1:Server connection established <br/>";
    }else if(xmlHttp.onreadystate==2){
        theD.innerHTML +="Status 2:Server received request <br/>";
    }else if(xmlHttp.onreadystate==3){
        theD.innerHTML +="Status 3:Processing request <br/>";
    }else if(xmlHttp.onreadystate==4){

        if(xmlHttp.status==200){
            try{
                text= XMLHttp.responseText;
                theD.innerHTML +="Status 4: request is finished and response is ready <br/>";
                theD.innerHTML +=text;

            }catch(e){
            alert(e.toString() );
            }
        

            
        }else{
            alert(xmlHttp.statusText);
        }
        

    }
}
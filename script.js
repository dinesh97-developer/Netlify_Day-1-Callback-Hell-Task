var count = 10;

var h1_html = document.createElement("h1");
document.body.append(h1_html);


setTimeout(() => {
    document.querySelector("h1").innerText =10;
    setTimeout(() => {
        document.querySelector("h1").innerText =9;
        setTimeout(() => {
            document.querySelector("h1").innerText =8;
            setTimeout(() => {
                document.querySelector("h1").innerText =7; 
                setTimeout(() => {
                    document.querySelector("h1").innerText = 6;
                    setTimeout(() => {
                        document.querySelector("h1").innerText =5;
                        setTimeout(() => {
                            document.querySelector("h1").innerText =4;
                            setTimeout(() => {
                                document.querySelector("h1").innerText =3;
                                setTimeout(() => {
                                    document.querySelector("h1").innerText =2;
                                    setTimeout(() => {
                                        document.querySelector("h1").innerText =1;
                                        setTimeout(() => {
                                            document.querySelector("h1").innerText ="Happy Independence Day";    
                                        }, 1000);    
                                    }, 1000);    
                                }, 1000);    
                            }, 1000);    
                        }, 1000);    
                    }, 1000);    
                }, 1000);   
            }, 1000);    
        }, 1000);        
    }, 1000); 
}, 1000);
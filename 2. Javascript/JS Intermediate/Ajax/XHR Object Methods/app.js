document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    //Create an XHR Object
    const xhr = new XMLHttpRequest();
    /**
     * HTTP Statues
     * 200 : "OK"
     * 403 : "Forbidden"
     * 404 :"Not Found"
     */
    //open
    xhr.open('GET', 'data.txt', true); // GET request -- read the file

    //Optional / Used for spinners/loaders
    xhr.onprogress = function () {
        console.log('READYSTATE', xhr.readyState);
    }

    xhr.onload = function () {
        if (this.status === 200) {
            //console.log(this.responseText);
            let x = document.getElementById('output');
            x.innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    xhr.onerror = function(){
        console.log('Request error...');
    }

    xhr.send();

    /**
     * readyState values
     * 0: request not initialized
     * 1: server connection estabileshed
     * 2: request received
     * 3: processing request
     * 4: request finished and response is ready
     */
    
}
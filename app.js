document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  // Create an XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  xhr.open('GET', 'data.txt', true);

  // console.log('READYSTATE', xhr.readyState);

  // Optional - Used for spinners/loaders 
  xhr.onprogress = function() {
    console.log('READYSTATE', xhr.readyState);
  }

  xhr.onload = function() {
    console.log('READYSTATE', xhr.readyState);
    if(this.status === 200) {
      // console.log(this.responseText);
      document.getElementById('output').innerHTML = `<h1 style="color: blue";> Data Received: ${this.responseText}</h1>`
    }
  }

  // xhr.onreadystatechange = function() {
  //   console.log('READYSTATE', xhr.readyState);
  //   if(this.status === 200 && this.readyState === 4) {
  //     console.log(this.responseText);
  //   }
  // }
  
  xhr.onerror = function() {
    console.log('Request error...');
  }

  xhr.send();

// readyState Values

// Value	State	            Description
// 0	    UNSENT	          Client has been created. open() not called yet.
// 1	    OPENED	          open() has been called.
// 2	    HEADERS_RECEIVED	send() has been called, and headers and status are available.
// 3	    LOADING	          Downloading; responseText holds partial data.
// 4	    DONE	            The operation is complete.

  // HTTP Statuses
  // 200: "OK"
  // 403: "Forbidden"
  // 404: "Not Found"
}


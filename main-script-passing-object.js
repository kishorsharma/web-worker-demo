var worker = new Worker('respond-passing-json.js');

var myText = document.getElementById("helloText");
// Setup an event listener that will handle messages received from the worker.
worker.addEventListener('message', function(e) {
   // Log the workers message.
   console.log("Resoponse from worker: ", e.data);
   myText.textContent = e.data.text;
}, false);

var counter = 0;
setInterval(function () {
    console.log("Calling working. Total time called: ", counter);
    worker.postMessage({text: 'Hello World'+counter, condition: (counter%2 === 0)});
    counter++;
}, 5000);

worker.addEventListener('error', function(e) {
  // Log the workers error.
  console.warn("Error occured during worker execution");
}, false);


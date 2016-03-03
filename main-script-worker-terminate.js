var worker = new Worker('respond-self-terminating.js');

var myText = document.getElementById("helloText");
// Setup an event listener that will handle messages received from the worker.
worker.addEventListener('message', function(e) {
  // Log the workers message.
  console.log("Resoponse from worker: ", e.data);
  myText.textContent = e.data
}, false);
console.log('Calling worker')
worker.postMessage('Hello World')
worker.postMessage('Hello World2')  // This would not get result as worker is already close

worker.addEventListener('error', function(e) {
  // Log the workers error.
  console.warn("Error occured during worker execution");
}, false);
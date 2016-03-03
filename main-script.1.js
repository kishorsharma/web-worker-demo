var worker = new Worker('respond-passing-object.js');
var someCondition = false;
var myText = document.getElementById("helloText");
// Setup an event listener that will handle messages received from the worker.
worker.addEventListener('message', function(e) {
  // Log the workers message.
  console.log("Resoponse from worker: ", e.data);
  //myText.textContent = e.data
  // For conditional termination and object passing
   myText.textContent = e.data.text;
   someCondition = e.data.condition
   if (someCondition) {
     worker.terminate();
   }
}, false);
//worker.postMessage('Hello World')
worker.postMessage({text: 'Hello World', condition: false});
worker.postMessage({text: 'Hello World1', condition: true});
//worker.terminate();
// Terminate a worker from your application.

worker.addEventListener('error', function(e) {
  // Log the workers error.
  console.warn("Error occured during worker execution");
}, false);

var terminateWorker = function () {
  worker.terminate();
}
var worker = new Worker('respond-passing-json.js');

var myText = document.getElementById("helloText");
// Setup an event listener that will handle messages received from the worker.
worker.addEventListener('message', function(e) {
  // Log the workers message.
  console.log("Resoponse from worker: ", e.data);
  
  // For conditional termination and object passing
   myText.textContent = e.data.text;
   var someCondition = e.data.condition
   if (someCondition) {
     // Terminate a worker from your application.
     worker.terminate();
   }
}, false);
// No effect after counter is 1 as worker is closed.
var counter = 0;
setInterval(function () {
    console.log("Calling working. Total time called: ", counter);
    worker.postMessage({text: 'Hello World'+counter, condition: (counter === 1)});
    counter++;
}, 5000);

worker.addEventListener('error', function(e) {
  // Log the workers error.
  console.warn("Error occured during worker execution");
}, false);
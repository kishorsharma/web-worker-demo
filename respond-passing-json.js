// Setup an event listener that will handle messages sent to the worker.
console.log("Respond withpassing object loaded")
self.addEventListener('message', function(e) {
  // Send the message back.
  console.log("Worker block", e);
  self.postMessage({text: e.data.text + 'from worker', condition: e.data.condition});
  // Have a worker terminate itself.
  if(e.data.condition) {
     sayHello();
   }
}, false);

var sayHello = function () {
  console.log("Worker saying Hello");
}
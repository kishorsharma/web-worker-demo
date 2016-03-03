// Setup an event listener that will handle messages sent to the worker.
console.log("Simple message passing worker loaded");
self.addEventListener('message', function(e) {
  // Send the message back.
  console.log("Worker block simple message passing");
  self.postMessage(e.data + ' from worker');

}, false);


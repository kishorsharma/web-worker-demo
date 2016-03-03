// Setup an event listener that will handle messages sent to the worker.
self.addEventListener('message', function(e) {
  // Send the message back.
  console.log("Worker block", e);
  self.postMessage(e.data + ' from worker');
  // Have a worker terminate itself.
  self.close();
}, false);


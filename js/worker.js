onmessage = function(e) {
    console.log('Worker received: ' + e.data);
    postMessage('Processed data from worker');
};

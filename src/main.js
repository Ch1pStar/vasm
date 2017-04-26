const init = () => {
    const updateQueue = [];
    const ipc = new WorkerAdapter();

    ipc.messageCallback = (e) => {
        console.log(`\tanswer from ${e.data}`);
        updateQueue.push(e.data);
    }

    const update = (t) => {
        requestAnimationFrame(update);

        while(updateQueue.length) {
            const uData = updateQueue.pop();
            console.log(`\t\t handling update ${uData}`);
        }

        ipc.postMessage(t);
    }
    update(performance.now());
}

class WorkerAdapter{

    constructor(){
        this.worker = new Worker('../src/sim.js');
        this.onmessage = this.onmessage.bind(this);
        this.worker.onmessage = this.onmessage;
    }

    set messageCallback(cb) {
        this._messageCallback = cb;
    }

    onmessage(e) {
        this._messageCallback.call(null, e);
    }

    postMessage(data) {
        this.worker.postMessage(data);
    }
}


document.addEventListener('DOMContentLoaded', init);
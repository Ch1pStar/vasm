onmessage = (e) => {
    const t = parseInt(e.data, 10);
    console.log(`tick start ${t}`);

    postMessage(t);
}
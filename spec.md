The simulation is ran on a backend process - remote server or worker thread

IPC(Frontend/Backend communication) is done via websockets(remote server) or postMessage(worker thread)
	- Remote server ipc adapter
	- Worker thread ipc adapter

The simulation exposes an update method, which advances the state forward in time and is called by a timer adapter
	- Remote server timer adapter(use native node timer module?)
	- Worker thread timer adapter(uses requestAnimationFrame)

State serialization is done via Google Protocol Buffers(https://developers.google.com/protocol-buffers/)


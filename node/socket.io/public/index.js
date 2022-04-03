window.onload = () => {
    // connect to server
    const socket = io('ws://localhost:3000');

    // append an li for each message
    socket.on('message', text => {
        const el = document.createElement('li');
        el.innerHTML = text;
        document.querySelector('#chat').appendChild(el);
    });

    // emit messages 
    document.querySelector('#send').onclick = () => {
        const text = document.querySelector('#message').value;
        socket.emit('message', text);
    };
}
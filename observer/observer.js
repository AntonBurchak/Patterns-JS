/* ========================OBSERVER======================== */

function Observer() {
    this.events = {};
}

Observer.prototype.on = function(type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener)
}

Observer.prototype.emit = function(type) {
    if (this.events[type]) {
        this.events[type].forEach(listener => {
            listener();
        });
    } else {
        throw new Error(`${type} is not found in emitters list.`)
    }
}

const observer = new Observer();

observer.on('greet', () => console.log('Wats up???'));
observer.on('greet', () => console.log('How are you, bro?'));

observer.emit('greet'); // Wats up???    How are you, bro?
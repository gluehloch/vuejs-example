var app = new Vue({ 
    el: '#app',
    data: {
        message1: 'Hello Vue!'
    }
});

var app2 = new Vue({
    el: '#app-2',
    data: {
        message2: 'You loaded this page on ' + new Date().toLocaleString()
    }
});
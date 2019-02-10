var app = new Vue({
   el: '#helloworld',
    data: {
       message: "Hello world!",
        seen: true,
        nums: [
            { num: "ichi"},
            { num: "ni"},
            { num: "san"}
        ]
    }
});

var vfor = new Vue({
    el: '#numlist',
    data: {
        nums: [
            { num: "ichi"},
            { num: "ni"},
            { num: "san"}
        ]
    }
});

var method = new Vue({
    el: "#method",
    data: {
        greeting: "KNOCK-KNOCK"
    },
    methods: {
        answer: function () {
            this.greeting = "who's there?";
        }
    }
});

var vmodel = new Vue({
    el: "#sync",
    data: {
        message: "change me"
    }
})

Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
})

var comp = new Vue({
    el: "#component"
});
Vue.filter ('primer', function(x){
    if (!x) return ""
    
});

Vue.filter ('beatify', function(x){
    if (!x) return ""
    value = value.toString()
    return value.replace(/^\w/g, function(l) {return l.toUpperCase()})
});

Vue.component ('comp-car',{
    data: function () {
        return {
            cars2: [
                {model: "BMW"},
                {model: "MB"},
                {model: "KIA"},
                {model: "AUDI"},
                {model: "VW"},
                {model: "SIAT"},
                {model: "FIAT"}
            ]
        }
    },
    template:  '<div><div class="cars2" v-for="car in cars2"> <p> {{ car.model }} </p></div><div>'
});



new Vue ({
    el: '#app',
    data: {
        title: "Hello World!",
        styleCSS: '',
        value: 1,
        show: true,
        message: "Hello",
        cars: [
            {model: "BMW", speed: 250.8},
            {model: "KIA", speed: 180.8},
            {model: "LEXUS", speed: 220.8},
            {model: "M-B", speed: 230.8}
        ],
        cars2: [
            {model: "BMW"},
            {model: "MB"},
            {model: "KIA"},
            {model: "AUDI"},
            {model: "VW"},
            {model: "SIAT"},
            {model: "FIAT"}
        ]
    },
    methods: {
        changeText (){
            this.title = 'Какой либо новый текст'
        },
        increment (value){
            this.value = value
            if (value == 42)
                alert ("this is the ANSWER")
        },
    },
    computed: {
        doubleValue () {
            return this.value * 2
        },
        stagedValue (){
            return this.value**this.value
        },
        showMess () {
            return this.message.toUpperCase ();
        }
    },
    filters: {
        
    }
});


new Vue ({
    el: '#app2'
});
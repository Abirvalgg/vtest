new Vue ({
    el: '#app',
    data: {
        title: "Hello World!",
        styleCSS: '',
        value: 1,
        show: true,
        cars: [
            {model: "BMW", speed: 250.8},
            {model: "KIA", speed: 180.8},
            {model: "LEXUS", speed: 220.8},
            {model: "M-B", speed: 230.8},
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
        }
    },
    
});
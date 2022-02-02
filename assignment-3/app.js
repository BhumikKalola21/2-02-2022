const app = Vue.createApp({

    data() {
        return {
            number: 0
        };
    },
    watch: {
        outcome() {
            console.log('watcher executed successfully...')
            const that = this;
            setTimeout(function () {

                that.number = 0
            }, 5000)
        }
    },
    computed: {
        outcome() {
            if (this.number < 37) {
                return 'Not there yet';
            }
            else if (this.number === 37) {
                return 'exactly 37';
            }
            return 'Too much';
        }
    },

    methods: {
        increase(value) {
            this.number = this.number + value;
        }
    }

});
app.mount('#assignment');
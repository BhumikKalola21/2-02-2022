const app = Vue.createApp({
    data() {
        return {
            createGoal: 'I want to complete my course!'
        };
    }
});
app.mount('#user-goal');
app.mount('#user-goals');
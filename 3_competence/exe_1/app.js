let PlanPickerItemComponent = {
    template: '#plan-picker-item-template',
    props: {
        name: { type: String, required: true },
        selected: { type: Boolean, default: false }
    },
    computed: {
        isSelected() {
            return this.selected;
        }
    },
    methods: {
        select() {
            this.$emit('select', this.name);
        }
    }
};
let PlanPickerComponent = {
    template: '#plan-picker-template',
    components: { 'plan-picker-item': PlanPickerItemComponent },
    data() {
        return {
            plans: ['The Single', 'The Curious', 'The Addict'],
            selectedPlan: null
        };
    },
    methods: {
        selectPlan(plan) {
            this.selectedPlan = plan;
            console.log('Selected plan:', this.selectedPlan); 
        }
    }
};

const app = Vue.createApp({
    components: {
        'plan-picker': PlanPickerComponent,
        'plan-picker-item': PlanPickerItemComponent
    }
});
app.mount('#app');
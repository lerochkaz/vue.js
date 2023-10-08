const motionButton = {
    data() {
        return {
            message: 'Кнопка',
        };
    },
    methods: {
        upendButton() {
            this.message = [...this.message].reverse().join('');
        },
    },
}

Vue.createApp(motionButton).mount('#button')

const listElement = {
    data() {
        return {
            textButton: 'Добавить',
            textAdd: 'Новый элемент списка',
        };
    },
    methods: {
        addListElement() {
            const list = document.getElementById('olElement');
            const newElementLi = document.createElement('li');
            newElementLi.innerHTML = "Новый элемент списка";
            list.appendChild(newElementLi)
        },
    },
}

Vue.createApp(listElement).mount('#addListElement')
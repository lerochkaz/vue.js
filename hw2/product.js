const product = {
    data() {
        return {
            productArray: [
                {
                    nameItem: 'nameItem-1',
                    priceItem: 10,
                },
                {
                    nameItem: 'nameItem-2',
                    priceItem: 25,
                },
                {
                    nameItem: 'nameItem-3',
                    priceItem: 170,
                },
                {
                    nameItem: 'nameItem-4',
                    priceItem: 12500,
                },
                {
                    nameItem: 'nameItem-5',
                    priceItem: 780,
                },
            ]
        }
    },
    methods: {
        sortToUp() {
            this.productArray.sort((a, b) => a.priceItem - b.priceItem);
        },
        sortToDown() {
            this.productArray.sort((a, b) => b.priceItem - a.priceItem);
        }
    },
    template: `
        <button @click="sortToUp">Sort to up</button>
        <button @click="sortToDown">Sort to Down</button>
        <div v-for="(item, index) in productArray" :key="index" class="card">
            <h2>{{ item.nameItem }}</h2>
            <p>{{ item.priceItem }}</p>
        </div>
    `,
};
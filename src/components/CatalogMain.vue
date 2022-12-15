<template>
    <div class="catalog">
        <router-link 
            class="link"
            :to="{name: 'cart'}">
            <div class="catalog__link">Cart: {{CART.length}}</div>
        </router-link>      
        <h1>Catalog</h1>
        <catalog-select
            :options="options"
            @select="optionSelect"
            :selected="selected"
        />
        <p>{{selected}}</p>
        <div class="catalog__list">
            <catalog-item
                v-for="product in PRODUCTS"
                :key="product.article"
                :product_data="product"
                @addToCart="addToCart"
            />
        </div>
    </div>
</template>

<script>
    import CatalogItem from './CatalogItem.vue'
    import CatalogSelect from './CatalogSelect.vue'
    import {mapActions, mapGetters} from 'vuex'
    export default {    
        name: 'CatalogMain',
        components: {
            CatalogItem,
            CatalogSelect
        },
        data() {
            return {
                options: [
                    {name: 'Option 1', value: '1'},
                    {name: 'Option 2', value: '2'},
                    {name: 'Option 3', value: '3'},
                    {name: 'Option 4', value: '4'},
                    {name: 'Option 5', value: '5'}
                ],
                selected: 'Select'
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
            },
            optionSelect(option) {
                this.selected = option.name
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
            .then((response) => {
                if (response.data) {
                    console.log('Data arrived!')
                }
            })
        }
    }
</script>
<style lang="scss">
    .catalog {
        @media (max-width: 470px) {
            margin-top: 80px;
        }
        &__list {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
        }
        &__link {
            position: absolute;
            top: 10px;
            right: 10px;
            padding: $padding*2;
            border: solid 1px $color-border;
            cursor: pointer;
        }
    }
</style>
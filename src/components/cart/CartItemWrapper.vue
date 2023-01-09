<template>
    <div class="cart-item-wrapper">        
        <catalog-cart-item            
            v-for="(item, index) in cart_data"
            :key="item.article"
            :cart_item_data="item"
            @deleteFromCart="deleteFromCart(index)"
            @increment="increment(index)"
            @decrement="decrement(index)"
        />
    </div>
    
    <div class="catalog-cart__total">
        <p class="catalog-cart__total-special">Total:</p>
        <p>{{cartTotalCost}} uah</p>
    </div>
</template>

<script>    
    import CatalogCartItem from './CatalogCartItem.vue';
    import { mapActions } from 'vuex';
    export default {    
        name: 'CartItemWrapper',
        components: {
            CatalogCartItem
        },
        props: {
            cart_data: {
                type: Array,
                default() {
                    return []
                }
            }
        },        
        methods: {
            ...mapActions ([
                'DELETE_FROM_CART',
                'INCREMENT_CART_ITEM',
                'DECREMENT_CART_ITEM'
            ]),
            increment(index) {
                this.INCREMENT_CART_ITEM(index)
            },
            decrement(index) {
                this.DECREMENT_CART_ITEM(index)
            },  
            deleteFromCart(index) {
                this.DELETE_FROM_CART(index)
            }
        },
        computed: {
            cartTotalCost() {
                let result = []
                for (let item of this.cart_data) {
                    result.push(item.price*item.quantity)
                }
                result = result.reduce(function (sum, el) {
                    return sum + el;
                })
                return result;
            }
        }
    }
</script>

<style lang="scss">
    
</style>
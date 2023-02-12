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
    
    <div class="cart-item-wrapper__total">
        <p class="cart-item-wrapper__total-title">Total:</p>
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
.cart-item-wrapper {    
    &__total {
        position: fixed;
        bottom: 0;
        right: 0;
        left: 0;
        padding: $padding*2;
        display: flex;
        justify-content: center;
        background-color: $color-special;
        color: $color-light;
        font-size: 20px;
        @media (max-width: 470px) {
            padding: $padding;
            font-size: 16px;
        }
    }
    &__total-title {
        margin-right: $margin*2;
    }
}
</style>
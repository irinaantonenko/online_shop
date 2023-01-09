<template>
    <div class="catalog-cart">
        <router-link 
            class="link"
            :to="{name: 'catalog'}">
            <div class="catalog__link">Back to catalog</div>
        </router-link>
        <h1>Cart</h1>
        <p v-if="!CART.length">There are no products in cart...</p>
        <cart-item-wrapper 
            v-if="CART.length" 
            :cart_data="CART"
        />
        <div v-if="!CART.length" class="catalog-cart__total">
            <p class="catalog-cart__total-special">Total:</p>
            <p>0 uah</p>
        </div>
    </div>
</template>

<script>
    import CartItemWrapper from './CartItemWrapper.vue';
    import { mapGetters } from 'vuex';
    export default {    
        name: 'CatalogCart',
        components: {
            CartItemWrapper
        },
        computed: {
            ...mapGetters([
                'CART'
            ])
        }
    }
</script>

<style lang="scss">
    .catalog-cart {
        padding: 60px 0 100px;
        height: inherit;
        @media (max-width: 470px) {
            padding-top: 80px;
        }
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
        &__total-special {
            margin-right: $margin*2;
        }
    }
</style>
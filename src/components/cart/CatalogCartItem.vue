<template>
    <div class="catalog-cart-item">
        <div class="catalog-cart-item__wrap">
            <img class="catalog-cart-item__image" :src=" require('../../assets/images/' + cart_item_data.image) " alt="img">
        </div>
        <div class="catalog-cart-item__info">
            <p>{{ cart_item_data.name }}</p>
            <p>{{ cart_item_data.price }}</p>
            <p>{{ cart_item_data.article }}</p>
        </div>
        <div class="catalog-cart-item__quantity">
            <p>Q-ty:</p>
            <p>
                <span class="catalog-cart-item__btn" @click="decrementItem">-</span>
                {{ cart_item_data.quantity }}
                <span class="catalog-cart-item__btn" @click="incrementItem">+</span>
            </p>
        </div>
        <button class="btn" @click="deleteFromCart">Delete</button>
    </div>
</template>

<script>
    export default {    
        name: 'CatalogCartItem',
        props: {
            cart_item_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        methods: {
            decrementItem() {
                this.$emit('decrement')
            },
            incrementItem() {
                this.$emit('increment')
            },
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        }
    }
</script>

<style lang="scss">
    .catalog-cart-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: nowrap;
        box-shadow: 0 0 8px 0 $color-shadow;
        padding: $padding*2;
        margin-bottom: $margin*2;
        &__wrap {
            max-width: 100px;
            overflow: hidden;  
            @media (max-width: 470px) {
                max-width: 80px;
            }    
        }
        &__image {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
        &__btn {
            cursor: pointer;
            &:hover {
                opacity: 0.6;
            }
        }        
    }    
</style>
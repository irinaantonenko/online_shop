<template>
    <div class="catalog-item">
        <catalog-popup
            v-if="isInfoPopupVisible"
            rightBtnPopup="Add to cart"
            :popupTitle="product_data.name"
            @rightBtnAction="addToCart"
            @closePopup="closeInfoPopup"
        >
            <div class="catalog-item__popup">
                <div class="catalog-item__image-wrap">
                    <img class="catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
                </div> 
                <div class="catalog-item__popup-content">
                    <p class="catalog-item__name">{{product_data.name}}</p>
                    <p class="catalog-item__price">Price: {{product_data.price}} uah </p> 
                    <p class="catalog-item__price">{{product_data.category}}</p>
                </div>
            </div>
        </catalog-popup>
        <div class="catalog-item__image-wrap">
            <img class="catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
        </div>
        <p class="catalog-item__name">{{product_data.name}}</p>
        <p class="catalog-item__price">Price: {{product_data.price}} uah </p>
        <div class="catalog-item__btns">
            <button
                class="catalog-item__show-info btn"
                @click="showPopupInfo"
            >
                Show info
            </button>
            <button 
                class="catalog-item__btn btn" 
                @click="addToCart">
                Add to cart
            </button>
        </div>
    </div>
</template>

<script>
    import CatalogPopup from '../popup/CatalogPopup.vue';
    export default {    
        name: 'CatalogItem',
        components: {
            CatalogPopup
        },
        props: {
            product_data: {
                type: Object,
                default() {
                    return {}
                }
            }
        },
        data() {
            return {
                isInfoPopupVisible: false
            }
        },
        methods: {
            showPopupInfo() {
                this.isInfoPopupVisible = true;
            },
            closeInfoPopup() {
                this.isInfoPopupVisible = false;
            },
            addToCart() {
                this.$emit('addToCart',this.product_data);
            }
        }
    }
</script>
<style lang="scss">
    .catalog-item {
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 $color-shadow;
        padding: $padding*2;
        margin: 0 auto $margin*2;        
        min-width: 150px;
        @media (max-width: 470px) {
            padding: $padding;
        }
        &__image-wrap {
            width: 100px;
            overflow: hidden;
            margin: 0 auto;
        }
        &__image {
            object-fit: cover;
            object-position: center;
            width: 100%;
            height: 100%;
        }
        &__btns {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: stretch;
            margin: 0 $margin*3;
            gap: $padding;            
        }
        &__show-info.btn {
            background-color: $main-color;
        }
        &__btn {
            cursor: pointer;
        }
        &__popup {
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
        &__popup-content {
            padding-left: $padding;
        }
    }
</style>
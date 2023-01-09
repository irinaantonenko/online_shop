<template>
    <div class="catalog">
        <router-link 
            class="link"
            :to="{name: 'cart'}">
            <div class="catalog__link">Cart: {{CART.length}}</div>
        </router-link>      
        <h1>Catalog</h1>
        <catalog-notification
            :messages="messages"
        />
        <div class="catalog__filters">
            <catalog-select
                :options="categories"
                @select="sortByCategories"
                :selected="selected"
            />
            <div class="catalog__range">
                <input 
                    type="range" 
                    min="980" 
                    max="1900" 
                    step="10"
                    v-model.number="minPrice"
                    @change="setRangeSlider"
                >
                <input 
                    type="range" 
                    min="980" 
                    max="1900"
                    step="10"
                    v-model.number="maxPrice"
                    @change="setRangeSlider"
                >
            </div> 
            <div class="catalog__range-values">
                <p>Min: {{minPrice}}</p>
                <p>Max: {{maxPrice}}</p>
            </div>
        </div>               
        <div class="catalog__list">
            <catalog-item
                v-for="product in filteredProducts"
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
    import CatalogNotification from '../notifications/CatalogNotification.vue'
    import {mapActions, mapGetters} from 'vuex'
    export default {    
        name: 'CatalogMain',
        components: {
            CatalogItem,
            CatalogSelect,
            CatalogNotification
        },
        data() {
            return {
                categories: [
                    {name: 'All', value: 'All'},
                    {name: 'Male', value: 'M'},
                    {name: 'Female', value: 'F'}
                ],
                selected: 'All',
                sortedProducts: [],
                minPrice: 980,
                maxPrice: 1900,
                messages: []
            }
        },
        computed: {
            ...mapGetters([
                'PRODUCTS',
                'CART'
            ]),
            filteredProducts() {
                let vm = this;
                if (this.sortedProducts.length) {
                    return this.sortedProducts
                } else { 
                   vm.maxPrice = 1900;
                   vm.minPrice = 890;
                   vm.selected = 'All';    
                   return this.PRODUCTS
                }   
                             
            }
        },
        methods: {
            ...mapActions([
                'GET_PRODUCTS_FROM_API',
                'ADD_TO_CART'
            ]),
            addToCart(data) {
                this.ADD_TO_CART(data)
                .then(() => {
                    let timeStamp = Date.now().toLocaleString();
                    this.messages.unshift(
                        { name: 'The product has been added to the cart', icon: 'check_circle', id: timeStamp }
                    )
                })
            },
            sortByCategories(category) {
                let a = this;
                this.sortedProducts = [...this.PRODUCTS];                              
                this.sortedProducts = this.sortedProducts.filter( function (item) {                    
                    return item.price >= a.minPrice && item.price <= a.maxPrice                  
                })                               
                if (category) {                                      
                    this.sortedProducts = this.sortedProducts.filter( function (e) {
                        a.selected = category.name;                                                       
                        return e.category === category.name;                        
                    }) 
                }                                            
            },
            
            setRangeSlider() {
                if (this.minPrice > this.maxPrice) {
                    let stop = this.maxPrice;
                    this.maxPrice = this.minPrice;
                    this.minPrice = stop;
                }
                this.sortByCategories();
                this.selected = 'All';
            }
        },
        mounted() {
            this.GET_PRODUCTS_FROM_API()
            .then((response) => {
                if (response.data) {
                    console.log('Data arrived!');
                    this.sortByCategories()
                }          
            
            })
        }
    }
</script>
<style lang="scss">
    .catalog {
        padding-top: 60px;
        @media (max-width: 470px) {
            padding-top: 80px;
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
        &__filters {
            display: flex;
            justify-content: space-between;
            align-items: center;  
            margin: 0 auto;     
            max-width: 900px;     
        }
        &__range {
            width: 150px;
            margin: auto $margin*2;
            text-align: center;
            position: relative; 
            @media (max-width: 470px) {
                width: 100px;
            }            
            & svg, & input[type=range] {
                position: absolute;
                left: 0;
                bottom: 0;
                width: 100%;
            }
        }
        &__range-values {
            min-width: 80px;
            text-align: left;
        }
    }
    input[type=range]::-webkit-slider-thumb {
        z-index: 2;
        position: relative;
        top: 2px;
        margin-top: -7px;
    }
</style>
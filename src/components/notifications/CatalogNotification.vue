<template>
    <div class="catalog-notification">  
        <TransitionGroup
            name="transition-animate"
            class="catalog-notification__list"
            tag="div"
        >    
            <div 
                class="catalog-notification__content"
                v-for="message in messages"
                :key="message.id"
                :class="message.icon"
            >

                <div class="catalog-notification__content-text">
                    <span>{{message.name}}</span>
                    <i class="material-icons">{{message.icon}}</i>
                </div>
                <div class="catalog-notification__content-btns">
                    <button v-if="rightBtn.length">{{rightBtn}}</button>
                    <button v-if="leftBtn.lenght">{{leftBtn}}</button>
                </div>
            </div>   

        </TransitionGroup>  
    </div>
</template>

<script>
    export default {    
        name: 'CatalogNotification',
        props: {
            messages: {
                type: Array,
                default: () => {
                    return []
                }
            },
            rightBtn: {
                type: String,
                default: ''
            },
            leftBtn: {
                type: String,
                default: ''
            },
            timeout: {
                type: Number,
                default: 3000
            }
        },
        methods: {
            hideNotification() {
                let vm = this;  
                if(!this.messages.length) {              
                setInterval( function() {
                    vm.messages.splice(vm.messages.length - 1, 1)
                }, vm.timeout)      }                        
            }
        },
       //watch: {
        //   messages() {
          //     this.hideNotification()
            //}
        //},
        mounted() {
            this.hideNotification()
        }       
    }
</script>

<style lang="scss">
    .catalog-notification {
        position: fixed;
        top: 80px;
        right: 16px;
        z-index: 10;
        &__list {
            display: flex;
            flex-direction: column;
        }
        &__content {
            padding: $padding*3;
            border-radius: 4px;
            color: $color-light;
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 16px;
            margin-bottom: $margin*2;            
            background-color: $color-special;
            max-width: 200px;
            text-align: left;
            &.error {
                background-color: $color-btn;
            }
            &.warning {
                background-color: orange;
            }
            &.check_circle {
                background-color: $color-special;
            }
        }
        &__content-text {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: $padding*2;
        }
    }
    .transition-animate {
        &-enter-from {
            transform: translateX(120px);
            opacity: 0;
        }
        &-enter-active {
            transition: all .6s ease;        }
        
        &-leave-active {
            transition: transform .6s ease, opacity .6s, height .6s .2s;
        }
        &-leave-to {
            height: 0;
            transform: translateX(120px);
            opacity: 0;
        }
        &-move {
            transition: transform .6s ease;
        }
    }
</style>
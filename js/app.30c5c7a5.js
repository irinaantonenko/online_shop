(function(){var t={5001:function(t,e,a){"use strict";var o=a(9242),n=a(3396);const r={id:"app"};function c(t,e,a,o,c,i){const l=(0,n.up)("catalog-wrapper");return(0,n.wg)(),(0,n.iD)("div",r,[(0,n.Wm)(l)])}const i={class:"catalog-wrapper"};function l(t,e,a,o,r,c){const l=(0,n.up)("router-view");return(0,n.wg)(),(0,n.iD)("div",i,[(0,n.Wm)(l)])}var s={name:"CatalogWrapper"},p=a(89);const u=(0,p.Z)(s,[["render",l]]);var _=u,m={name:"App",components:{CatalogWrapper:_}};const d=(0,p.Z)(m,[["render",c]]);var g=d,f=(a(7658),a(65));const h=(0,f.MT)({state:{products:[{image:"1.jpg",name:"T-shirt 1",price:1500,article:"T1",available:!0,category:"Male",quantity:1},{image:"2.jpg",name:"T-shirt 2",price:1200,article:"T2",available:!0,category:"Female",quantity:1},{image:"3.jpg",name:"T-shirt 3",price:980,article:"T3",available:!1,category:"Female",quantity:1},{image:"4.jpg",name:"T-shirt 4",price:1680,article:"T4",available:!0,category:"Male",quantity:1},{image:"5.jpg",name:"T-shirt 5",price:1900,article:"T5",available:!1,category:"Female",quantity:1},{image:"6.jpg",name:"T-shirt 6",price:1799,article:"T6",available:!0,category:"Female",quantity:1},{image:"7.jpg",name:"T-shirt 7",price:1399,article:"T7",available:!0,category:"Male",quantity:1},{image:"8.jpg",name:"T-shirt 8",price:1449,article:"T8",available:!0,category:"Female",quantity:1},{image:"9.jpg",name:"T-shirt 9",price:999,article:"T9",available:!0,category:"Female",quantity:1}],cart:[]},mutations:{SET_PRODUCTS_TO_STATE:(t,e)=>{t.products=e},SET_CART:(t,e)=>{if(t.cart.length){let a=!1;t.cart.map((function(t){t.article===e.article&&(a=!0,t.quantity++)})),a||t.cart.push(e)}else t.cart.push(e)},REMOVE_FROM_CART:(t,e)=>{t.cart.splice(e,1)},INCREMENT:(t,e)=>{t.cart[e].quantity++},DECREMENT:(t,e)=>{t.cart[e].quantity>1&&t.cart[e].quantity--}},actions:{ADD_TO_CART({commit:t},e){t("SET_CART",e)},INCREMENT_CART_ITEM({commit:t},e){t("INCREMENT",e)},DECREMENT_CART_ITEM({commit:t},e){t("DECREMENT",e)},DELETE_FROM_CART({commit:t},e){t("REMOVE_FROM_CART",e)}},getters:{PRODUCTS(t){return t.products},CART(t){return t.cart}}});var C=h;const T=(0,o.ri)({});T.use(h);var v=a(2483),w=a(7139);const y={class:"catalog"},b={class:"catalog__link"},E=(0,n._)("h1",null,"Catalog",-1),R={class:"catalog__list"};function A(t,e,a,o,r,c){const i=(0,n.up)("router-link"),l=(0,n.up)("catalog-select"),s=(0,n.up)("catalog-item");return(0,n.wg)(),(0,n.iD)("div",y,[(0,n.Wm)(i,{class:"link",to:{name:"cart"}},{default:(0,n.w5)((()=>[(0,n._)("div",b,"Cart: "+(0,w.zw)(t.CART.length),1)])),_:1}),E,(0,n.Wm)(l,{options:r.categories,onSelect:c.sortByCategories,selected:r.selected},null,8,["options","onSelect","selected"]),(0,n._)("div",R,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(c.filteredProducts,(t=>((0,n.wg)(),(0,n.j4)(s,{key:t.article,product_data:t,onAddToCart:c.addToCart},null,8,["product_data","onAddToCart"])))),128))])])}const k={class:"catalog-item"},D={class:"catalog-item__popup"},O={class:"catalog-item__image-wrap"},j=["src"],P={class:"catalog-item__popup-content"},I={class:"catalog-item__name"},M={class:"catalog-item__price"},F={class:"catalog-item__price"},S={class:"catalog-item__image-wrap"},q=["src"],N={class:"catalog-item__name"},z={class:"catalog-item__price"},x={class:"catalog-item__btns"};function B(t,e,o,r,c,i){const l=(0,n.up)("catalog-popup");return(0,n.wg)(),(0,n.iD)("div",k,[c.isInfoPopupVisible?((0,n.wg)(),(0,n.j4)(l,{key:0,rightBtnPopup:"Add to cart",popupTitle:o.product_data.name,onRightBtnAction:i.addToCart,onClosePopup:i.closeInfoPopup},{default:(0,n.w5)((()=>[(0,n._)("div",D,[(0,n._)("div",O,[(0,n._)("img",{class:"catalog-item__image",src:a(990)("./"+o.product_data.image),alt:"img"},null,8,j)]),(0,n._)("div",P,[(0,n._)("p",I,(0,w.zw)(o.product_data.name),1),(0,n._)("p",M,"Price: "+(0,w.zw)(o.product_data.price)+" uah ",1),(0,n._)("p",F,(0,w.zw)(o.product_data.category),1)])])])),_:1},8,["popupTitle","onRightBtnAction","onClosePopup"])):(0,n.kq)("",!0),(0,n._)("div",S,[(0,n._)("img",{class:"catalog-item__image",src:a(990)("./"+o.product_data.image),alt:"img"},null,8,q)]),(0,n._)("p",N,(0,w.zw)(o.product_data.name),1),(0,n._)("p",z,"Price: "+(0,w.zw)(o.product_data.price)+" uah ",1),(0,n._)("div",x,[(0,n._)("button",{class:"catalog-item__show-info btn",onClick:e[0]||(e[0]=(...t)=>i.showPopupInfo&&i.showPopupInfo(...t))}," Show info "),(0,n._)("button",{class:"catalog-item__btn btn",onClick:e[1]||(e[1]=(...t)=>i.addToCart&&i.addToCart(...t))}," Add to cart ")])])}const V={class:"catalog-popup__wrapper",ref:"popup_wrapper"},W={class:"catalog-popup"},Z={class:"catalog-popup__header"},$={class:"catalog-popup__content"},U={class:"catalog-popup__footer"};function L(t,e,a,o,r,c){return(0,n.wg)(),(0,n.iD)("div",V,[(0,n._)("div",W,[(0,n._)("div",Z,[(0,n._)("span",null,(0,w.zw)(a.popupTitle),1),(0,n._)("span",null,[(0,n._)("i",{class:"material-icons catalog-popup__icon",onClick:e[0]||(e[0]=(...t)=>c.closePopup&&c.closePopup(...t))}," close ")])]),(0,n._)("div",$,[(0,n.WI)(t.$slots,"default")]),(0,n._)("div",U,[(0,n._)("button",{class:"btn catalog-popup__close",onClick:e[1]||(e[1]=(...t)=>c.closePopup&&c.closePopup(...t))}," Close "),(0,n._)("button",{class:"catalog-popup__btn btn",onClick:e[2]||(e[2]=(...t)=>c.rightBtnAction&&c.rightBtnAction(...t))},(0,w.zw)(a.rightBtnPopup),1)])])],512)}var H={name:"CatalogPopup",props:{rightBtnPopup:{type:String,default:"Ok"},popupTitle:{type:String,default:"Popup name"}},methods:{rightBtnAction(){this.$emit("rightBtnAction")},closePopup(){this.$emit("closePopup")}},mounted(){let t=this;document.addEventListener("click",(function(e){e.target===t.$refs["popup_wrapper"]&&t.closePopup()}))}};const Y=(0,p.Z)(H,[["render",L]]);var K=Y,Q={name:"CatalogItem",components:{CatalogPopup:K},props:{product_data:{type:Object,default(){return{}}}},data(){return{isInfoPopupVisible:!1}},methods:{showPopupInfo(){this.isInfoPopupVisible=!0},closeInfoPopup(){this.isInfoPopupVisible=!1},addToCart(){this.$emit("addToCart",this.product_data)}}};const G=(0,p.Z)(Q,[["render",B]]);var J=G;const X={class:"catalog-select"},tt={key:0,class:"catalog-select__options"},et=["onClick"];function at(t,e,a,o,r,c){return(0,n.wg)(),(0,n.iD)("div",X,[(0,n._)("p",{class:"catalog-select__title",onClick:e[0]||(e[0]=t=>r.areOptionsVisible=!r.areOptionsVisible)},(0,w.zw)(a.selected),1),r.areOptionsVisible?((0,n.wg)(),(0,n.iD)("div",tt,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.options,(t=>((0,n.wg)(),(0,n.iD)("p",{class:"catalog-select__options-item",key:t.value,onClick:e=>c.selectOption(t)},(0,w.zw)(t.name),9,et)))),128))])):(0,n.kq)("",!0)])}var ot={name:"CatalogSelect",props:{options:{type:Array,default(){return[]}},selected:{type:String,default:""}},data(){return{areOptionsVisible:!1}},methods:{selectOption(t){this.$emit("select",t),this.areOptionsVisible=!1},hideSelect(){this.areOptionsVisible=!1}},mounted(){document.addEventListener("click",this.hideSelect.bind(this),!0)},unmounted(){document.removeEventListener("click",this.hideSelect)}};const nt=(0,p.Z)(ot,[["render",at]]);var rt=nt,ct={name:"CatalogMain",components:{CatalogItem:J,CatalogSelect:rt},data(){return{categories:[{name:"All",value:"All"},{name:"Male",value:"M"},{name:"Female",value:"F"}],selected:"All",sortedProducts:[]}},computed:{...(0,f.Se)(["PRODUCTS","CART"]),filteredProducts(){return this.sortedProducts.length?this.sortedProducts:this.PRODUCTS}},methods:{...(0,f.nv)(["ADD_TO_CART"]),addToCart(t){this.ADD_TO_CART(t)},sortByCategories(t){this.sortedProducts=[];let e=this;this.PRODUCTS.map((function(a){a.category===t.name&&e.sortedProducts.push(a)})),this.selected=t.name}}};const it=(0,p.Z)(ct,[["render",A]]);var lt=it;const st={class:"catalog-cart"},pt=(0,n._)("div",{class:"catalog__link"},"Back to catalog",-1),ut=(0,n._)("h1",null,"Cart",-1),_t={key:0},mt={key:2,class:"catalog-cart__total"},dt=(0,n._)("p",{class:"catalog-cart__total-special"},"Total:",-1),gt=(0,n._)("p",null,"0 uah",-1),ft=[dt,gt];function ht(t,e,a,o,r,c){const i=(0,n.up)("router-link"),l=(0,n.up)("cart-item-wrapper");return(0,n.wg)(),(0,n.iD)("div",st,[(0,n.Wm)(i,{class:"link",to:{name:"catalog"}},{default:(0,n.w5)((()=>[pt])),_:1}),ut,t.CART.length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("p",_t,"There are no products in cart...")),t.CART.length?((0,n.wg)(),(0,n.j4)(l,{key:1,cart_data:t.CART},null,8,["cart_data"])):(0,n.kq)("",!0),t.CART.length?(0,n.kq)("",!0):((0,n.wg)(),(0,n.iD)("div",mt,ft))])}const Ct={class:"cart-item-wrapper"},Tt={class:"catalog-cart__total"},vt=(0,n._)("p",{class:"catalog-cart__total-special"},"Total:",-1);function wt(t,e,a,o,r,c){const i=(0,n.up)("catalog-cart-item");return(0,n.wg)(),(0,n.iD)(n.HY,null,[(0,n._)("div",Ct,[((0,n.wg)(!0),(0,n.iD)(n.HY,null,(0,n.Ko)(a.cart_data,((t,e)=>((0,n.wg)(),(0,n.j4)(i,{key:t.article,cart_item_data:t,onDeleteFromCart:t=>c.deleteFromCart(e),onIncrement:t=>c.increment(e),onDecrement:t=>c.decrement(e)},null,8,["cart_item_data","onDeleteFromCart","onIncrement","onDecrement"])))),128))]),(0,n._)("div",Tt,[vt,(0,n._)("p",null,(0,w.zw)(c.cartTotalCost)+" uah",1)])],64)}const yt={class:"catalog-cart-item"},bt={class:"catalog-cart-item__wrap"},Et=["src"],Rt={class:"catalog-cart-item__info"},At={class:"catalog-cart-item__quantity"},kt=(0,n._)("p",null,"Q-ty:",-1);function Dt(t,e,o,r,c,i){return(0,n.wg)(),(0,n.iD)("div",yt,[(0,n._)("div",bt,[(0,n._)("img",{class:"catalog-cart-item__image",src:a(990)("./"+o.cart_item_data.image),alt:"img"},null,8,Et)]),(0,n._)("div",Rt,[(0,n._)("p",null,(0,w.zw)(o.cart_item_data.name),1),(0,n._)("p",null,(0,w.zw)(o.cart_item_data.price),1),(0,n._)("p",null,(0,w.zw)(o.cart_item_data.article),1)]),(0,n._)("div",At,[kt,(0,n._)("p",null,[(0,n._)("span",{class:"catalog-cart-item__btn",onClick:e[0]||(e[0]=(...t)=>i.decrementItem&&i.decrementItem(...t))},"-"),(0,n.Uk)(" "+(0,w.zw)(o.cart_item_data.quantity)+" ",1),(0,n._)("span",{class:"catalog-cart-item__btn",onClick:e[1]||(e[1]=(...t)=>i.incrementItem&&i.incrementItem(...t))},"+")])]),(0,n._)("button",{class:"btn",onClick:e[2]||(e[2]=(...t)=>i.deleteFromCart&&i.deleteFromCart(...t))},"Delete")])}var Ot={name:"CatalogCartItem",props:{cart_item_data:{type:Object,default(){return{}}}},methods:{decrementItem(){this.$emit("decrement")},incrementItem(){this.$emit("increment")},deleteFromCart(){this.$emit("deleteFromCart")}}};const jt=(0,p.Z)(Ot,[["render",Dt]]);var Pt=jt,It={name:"CartItemWrapper",components:{CatalogCartItem:Pt},props:{cart_data:{type:Array,default(){return[]}}},methods:{...(0,f.nv)(["DELETE_FROM_CART","INCREMENT_CART_ITEM","DECREMENT_CART_ITEM"]),increment(t){this.INCREMENT_CART_ITEM(t)},decrement(t){this.DECREMENT_CART_ITEM(t)},deleteFromCart(t){this.DELETE_FROM_CART(t)}},computed:{cartTotalCost(){let t=[];for(let e of this.cart_data)t.push(e.price*e.quantity);return t=t.reduce((function(t,e){return t+e})),t}}};const Mt=(0,p.Z)(It,[["render",wt]]);var Ft=Mt,St={name:"CatalogCart",components:{CartItemWrapper:Ft},computed:{...(0,f.Se)(["CART"])}};const qt=(0,p.Z)(St,[["render",ht]]);var Nt=qt;let zt=[{path:"/",name:"catalog",component:lt},{path:"/cart",name:"cart",component:Nt,props:!0}];const xt=(0,v.p7)({history:(0,v.r5)(),routes:zt});var Bt=xt;const Vt=(0,o.ri)({});Vt.use(xt);const Wt=(0,o.ri)(g);Wt.use(C),Wt.use(Bt),Wt.mount("#app")},990:function(t,e,a){var o={"./1.jpg":7097,"./2.jpg":7253,"./3.jpg":9672,"./4.jpg":2668,"./5.jpg":1279,"./6.jpg":6245,"./7.jpg":9511,"./8.jpg":3782,"./9.jpg":3187};function n(t){var e=r(t);return a(e)}function r(t){if(!a.o(o,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return o[t]}n.keys=function(){return Object.keys(o)},n.resolve=r,t.exports=n,n.id=990},7097:function(t,e,a){"use strict";t.exports=a.p+"img/1.dd090118.jpg"},7253:function(t,e,a){"use strict";t.exports=a.p+"img/2.67d7bb12.jpg"},9672:function(t,e,a){"use strict";t.exports=a.p+"img/3.90fba945.jpg"},2668:function(t,e,a){"use strict";t.exports=a.p+"img/4.8fac09e4.jpg"},1279:function(t,e,a){"use strict";t.exports=a.p+"img/5.6e9e077a.jpg"},6245:function(t,e,a){"use strict";t.exports=a.p+"img/6.e7f61330.jpg"},9511:function(t,e,a){"use strict";t.exports=a.p+"img/7.e835861c.jpg"},3782:function(t,e,a){"use strict";t.exports=a.p+"img/8.b7197b77.jpg"},3187:function(t,e,a){"use strict";t.exports=a.p+"img/9.a0224128.jpg"}},e={};function a(o){var n=e[o];if(void 0!==n)return n.exports;var r=e[o]={exports:{}};return t[o](r,r.exports,a),r.exports}a.m=t,function(){var t=[];a.O=function(e,o,n,r){if(!o){var c=1/0;for(p=0;p<t.length;p++){o=t[p][0],n=t[p][1],r=t[p][2];for(var i=!0,l=0;l<o.length;l++)(!1&r||c>=r)&&Object.keys(a.O).every((function(t){return a.O[t](o[l])}))?o.splice(l--,1):(i=!1,r<c&&(c=r));if(i){t.splice(p--,1);var s=n();void 0!==s&&(e=s)}}return e}r=r||0;for(var p=t.length;p>0&&t[p-1][2]>r;p--)t[p]=t[p-1];t[p]=[o,n,r]}}(),function(){a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,{a:e}),e}}(),function(){a.d=function(t,e){for(var o in e)a.o(e,o)&&!a.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){a.p="/online_shop/"}(),function(){var t={143:0};a.O.j=function(e){return 0===t[e]};var e=function(e,o){var n,r,c=o[0],i=o[1],l=o[2],s=0;if(c.some((function(e){return 0!==t[e]}))){for(n in i)a.o(i,n)&&(a.m[n]=i[n]);if(l)var p=l(a)}for(e&&e(o);s<c.length;s++)r=c[s],a.o(t,r)&&t[r]&&t[r][0](),t[r]=0;return a.O(p)},o=self["webpackChunkonline_shop"]=self["webpackChunkonline_shop"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=a.O(void 0,[998],(function(){return a(5001)}));o=a.O(o)})();
//# sourceMappingURL=app.30c5c7a5.js.map
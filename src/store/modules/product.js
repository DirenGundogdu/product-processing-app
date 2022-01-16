import Vue from "vue";
import { router } from "../../router";

const state = {
    products : []
}

const getters = {
    getProducts(state) {
        return state.products;
    },
     getProduct(state) {
       return key => state.products.filter(element => {
            return element.key == key;
        })
     }
}

const mutations = {
    updateProductList(state, product){
        state.products.push(product);
    }
}

const actions = {
     initApp({ commit }){
        Vue.http.get("https://productprocessingapp-default-rtdb.europe-west1.firebasedatabase.app/product.json")
        .then(response => {
            let data = response.body;
            for( let key in data) {
                data[key].key = key;
                commit("updateProductList",data[key])
            }
        })
     },
    saveProduct({ commit , dispatch },product){
        Vue.http.post("https://productprocessingapp-default-rtdb.europe-west1.firebasedatabase.app/product.json",product)
        .then((response) => {
            // Product List Update
            product.key = response.body.name;
            commit(" updateProductList",product)


            //Balance Update
            let tradeResult = {
                purchase : product.price,
                sale: 0,
                count : product.count
            }
            dispatch("setTradeResult",tradeResult)
            router.replace("/")


        })
    },
     sellProduct({state, dispatch},payload){

        //pass by reference

        //pass by value
        let product = state.products.filter(element => {
            return element.key == payload.key;
        })
            if(product) {

                let totalCount = product[0].count - payload.count

              Vue.http.patch("https://productprocessingapp-default-rtdb.europe-west1.firebasedatabase.app/product/" + payload.key + ".json", {count: totalCount })
              .then(() => {
                  product[0].count = totalCount;
                  let tradeResult = {
                    purchase : 0,
                    sale: product[0].price,
                    count : product.count
                }
                dispatch("setTradeResult",tradeResult)
                router.replace("/")
              })
            }

     }
}

export default {
    state,
    getters,
    mutations,
    actions
}
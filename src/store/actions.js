import Vue from "vue"; 


export const setTradeResult = ({state,commit},tradeResult) => {
    commit("updateTradeResult",tradeResult)
    let tradeData = {
        purchase : state.purchase,
        sale : state.sale
    }
    Vue.http.put("https://productprocessingapp-default-rtdb.europe-west1.firebasedatabase.app/trade-result.json",tradeData)   
 }

 export const getTradeResult = ({commit}) => {
    Vue.http.get("https://productprocessingapp-default-rtdb.europe-west1.firebasedatabase.app/trade-result.json")
    .then(response => {
        commit("updateTradeResult",response.body)
    })
 } 
<template>
    <div>
       <nav class="navbar fixed-bottom  navbar-light" style="background-color: #e3f2fd;">    
    
    <span class="navbar-text navbar-nav col-md-4  bg-primary rounded p-3">
        <strong>Alış Tutarı  </strong>
        <span class="badge badge-danger"> {{getTradeResult.purchase | currency}} </span>
    </span>
    <span class="navbar-text navbar-nav col-md-4  bg-info rounded p-3">
        <strong>Satış Tutarı  </strong>
        <span class="badge badge-success">{{getTradeResult.sale | currency}}</span>
    </span>
    <span class="navbar-text navbar-nav col-md-4 bg-success rounded p-3">
        <strong>Bakiye  </strong>
        <span class="badge badge-primary">{{getTradeResult.balance | currency}}</span>
    </span>
</nav>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
    export default {
    computed : mapGetters(["getTradeResult"])       
    }
</script>

<style scoped>

</style>
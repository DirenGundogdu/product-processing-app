<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark px-5" style="background-color: #20B2AA">
            <router-link to="/" tag="a" class="navbar-brand">
            <a class="navbar-brand" href="#">Ürün Listesi</a>
            </router-link>
    
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">

            <router-link active-class="active" to="/product-operations" tag="li" class="nav-item">
            <a class="nav-link" href="#">Ürün İşlemleri</a>
            </router-link>

             <router-link active-class="active" to="/product-output" tag="li" class="nav-item">
            <a class="nav-link" href="#">Ürün Çıkışı</a>
            </router-link>     
        </ul>
    </div>
</nav>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>
<template lang="">
    <div class="card">  
       <img src="C:/VueWebApp/vue-webapp/src/views/img/shirt.jpg" alt="T-Shirt" style="width:100%" />
       <div className="container">
         <h1>T-Shirt</h1> 
         <p class="price">$19.99</p>
         <p>Clothe Co. Mens Heavyweight Cotton T-Shirt Plain Tee </p>
         <p><button>Add to Cart </button></p>    
       </div>
       <img src="C:/VueWebApp/vue-webapp/src/views/img/pants.jpg" alt="Pants" style="width:100%" />
       <div className="container">
        <h1>Pants</h1>
            <p class="price">$29.99</p>
            <p>Womens Trouser Pants</p>
            <p><button>Add to cart</button></p>
       </div>
    </div>
</template>
<script>
export default {

} 
</script>
<style scoped>
.card {

    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    max-width: 300px;
    margin: auto;
    text-align: center;
    font-family: arial;
}

.card:hover {
    box-shadow: 0 10px 20px 0 rgba(0,0,0,0.2);
}
img {
    border-radius: 5px 5px 0 0;
}

.container {
     padding: 2px 16px;
     margin: 20px;
     margin-top: 10px;
}
.price {
    color:gray;
    font-size: 22px;
}

.card button {
    border: none;
    outline: 0;
    padding: 12px;
    color: white;
    background-color: #000;
    text-align: center;
    cursor: pointer;
    width: 100%;
    font-size: 18px;
}

.card button:hover {
    opacity: 0.7;
}
</style>
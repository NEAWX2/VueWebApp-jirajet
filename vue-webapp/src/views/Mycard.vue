<template lang="">
    <div class="card">  
       <img :src="image" :alt="title" style="width:100%" />
       <div className="container">
         <h1>{{title}}</h1> 
         <p class="price">{{price}}</p>
        
        
         <router-link :to="`/products/${id}`">
            <button>View Details</button>
         </router-link>

       </div>
       
    </div>
</template>
<script>
export default { 
    name: "Mycard",
    props: {
        id: {
            type: [String, Number],
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            default: "",
        },
        image: {
            type: String,
            required: true,
        },
        price: {
            type: [String, Number],
            required: true,
        },
    },
};
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
    height: 350px;
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
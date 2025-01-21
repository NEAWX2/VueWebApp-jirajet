<!--ส่วนสำหรับการแสดงผล-->
<template>
  <nav class="navbar">
      <div class="wrapper">
          <router-link to="/" >
              <img src="@/assets/logo.png" alt="App Logo" />
          </router-link>>
              <div>
                  <ul class="nav-links">
                      <li><router-link to="/">Home</router-link></li>
                      <li><router-link to="/product">My card</router-link></li>
                      <li><router-link to="/about">About</router-link></li>
                  </ul>

              </div>
      </div>
  </nav>
</template>          
        
<!--สำหรับเขียน Java script เพื่อควบคุมการทำงานของ component เข่น การกำหนด data methode เป็นต้น-->
<script>
  import logo from "@/assets/logo.png";
export default {
    name: "mybar",
   data() {
    return{
      logo,
    }
   },
};
</script>
<!--ส่วนสำหรับเขียน css เพื่อตกแต่ง template-->
<style scoped>
/* Navbar Styles */
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap&quot");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
}

.navbar {
  background-color: #333;
  color: #fff;
  top: 0;
  left: 0;
  width: 100%;
  padding: 0px 0px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}
 
.wrapper {
  position: relative;
  max-width: 1300px;
  height: 140px;
  line-height: 70px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
 
.wrapper .logo img {
  width: 100%;
  max-width: 120px;  
  height: auto;      
  object-fit: contain; 
  margin-top: 10px;
  margin-right: 10px;
}

.wrapper .nav-links {
  display: inline-flex;
  z-index: 10;
}

.nav-links li {
  list-style: none;
}

.nav-links li a {
  color: #f2f2f2;
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  padding: 9px 15px;
  border-radius: 5px;
  transition: all 0.3s ease;
}

.nav-links li a:hover {
  background: #00418b;
}

.nav-links .mobile-item {
  display: none;
}
</style>
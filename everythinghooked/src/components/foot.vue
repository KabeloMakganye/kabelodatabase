<template>
  <div>
    <form>
         <div>
      <div>
    <form>
    <div class="feets">
    <h5 style="text-align:center">Copyright © 2022 All Rights Reserved. Designed by <a href="">Hms devs</a> </h5>
    </div>
     </form>
  </div>
  </div>
     </form>
  </div>
</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      username: '',
      email: '@gmail.com',
      resultsFetched_2: '',
      i: '',
      found: 'no',
      x: 0
    }
  },
  methods: {
    hello () {
      alert('hello')
    }
  }
}
</script>

<style scoped>
body {
    background: #31F300;
  margin: 0;
  font-family: 'poppins';
  height: 100%;
}
img {
  text-align: center;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #31F300;
  /*margin-top: 60px;*/
  margin: 0;
  background-color: #31F300;
  /*height: 100%;*/
  background-size: cover;
}
.sidebar {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(169,16,19);
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidebar a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #000000;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.sidebar .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.openbtn {
  font-size: 20px;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  color: white;
  padding: 0;
  border: none;
}
.openbtn span {
  color: rgb(0, 0, 0);
}
.openbtn:hover {
  background-color: rgb(252, 197, 197);
}

#main {
  transition: margin-left .5s;
  padding: 16px;
  display: flex;
  place-content: space-between;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 420px) {
  .sidebar {padding-top: 15px;}
  .sidebar a {font-size: 18px;}
}
@media screen and (max-width: 800px) {
  .fa-envelope::before {
    color: #31F300;
    font-size: 25px;
    padding: 0px 0px 0px 15px;
    margin: 0;
  }
  .fa-phone::before {
    color: #31F300;
    font-size: 25px;
    margin: 0;
    padding: 0px 0px 0px 15px;
  }
  #b {
    display: none;
  }
  a .num {
    display: none;
  }
  .navbardown {
  background: #262750;
  transition: margin-left .5s;
  padding: 16px;
}
.navin3 table, td, th {
  border: 0px solid black;
  text-align: right;
  color: white;
  font-size: 15px;
  transition: .8s;
}
.navin4 table, td, th {
  border: 0px solid black;
  text-align: left;
  color: white;
  font-size: 15px;
  transition: .8s;
}
}
@media screen and (min-width: 800px) {
  .navin3 table, td, th {
  border: 0px solid black;
  text-align: left;
  color: white;
  font-size: 15px;
  transition: .8s;
}
  .navin4 table, td, th {
  border: 0px solid black;
  text-align: left;
  color: white;
  font-size: 15px;
  transition: .8s;
}
  .fa-phone::before {
  color: #31F300;
  font-size: 15px;
  margin: 0;
  padding: 0px 0px 0px 15px;
}
.fa-envelope::before {
  color: #31F300;
  font-size: 15px;
  padding: 0px 0px 0px 15px;
  margin: 0;
}
.navbardown {
  background: #262750;
  transition: margin-left .5s;
  padding: 16px;
  display: flex;
  place-content: space-between;
}
}
.fa::before {
  padding: 20px;
  width: 50px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}

.fa:hover {
    opacity: 0.7;
    transition: .8s;
}
.fa-facebook::before {
  color: rgb(15,137,231);
  font-size: 25px;
  transition: .8s;
}
.fa-instagram::before {
  color: #F2EAF2;
  transition: .8s;
  font-size: 25px;
}
.fa-whatsapp::before {
  color: #58F777;
  transition: .8s;
  font-size: 25px;
}

.navbarup {
  background: #f2f2f2;
  transition: margin-left .5s;
  padding: 16px;
  display: flex;
  place-content: space-between;
}
.navin {
  padding: 0px;
  display: flex;
  place-content: space-between;
}
.navin2 {
  padding: 0px;
  font-size: 15px;
  display: flex;
  place-content: space-between;
}
a {
  text-decoration: none;
  color: #000000;
}
.navin3 a {
  font-family: 'poppins';
  color: white;
  font-size: 14px;
  transition: .8s;
}
.feet {
  background-color: rgb(53, 53, 53);
  border-top: 10px solid rgb(53, 53, 53);
  border-bottom: 10px solid rgb(53, 53, 53);
  align: center
}
.feet h5 {
  color: white;
  margin: 0%;
}
.feet a {
  color: #31F300;
}
.navin3 h5 {
  margin: 0;
}
.navin3 {
  padding: 0px;
  display: flex;
  place-content: space-between;
}
.navin3 table {
  border-collapse: collapse;
  width: 100%;
}
.navin3 td {
  height: 30px;
}
.navin3 h4 {
  color: #44CAE6;
}

.navin4 h5 {
  margin: 0;
}
.navin4 {
  padding: 0px;
  display: flex;
  place-content: space-between;
}
.navin4 table {
  border-collapse: collapse;
  width: 100%;
}
.navin4 td {
  height: 30px;
}
.navin4 h4 {
  color: #44CAE6;
}

a:hover {
    opacity: 0.7;
    font-size: 15px;
    transition: .8s;
}
</style>

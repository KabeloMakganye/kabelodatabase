<template @resize="removemenu">
  <div class="hello"  @resize="removemenu">
  <div @click="removemenu" class="blur" id="blur"></div>
  <!-- <div @click="removemenu" class="blur2" id="blur2"></div>

  <div class="price">
    <h1 class="price">Prices</h1>
    <ol class="price">
      <li>Saden R60</li>
      <li>Single Cap van</li>
      <li>double Cap van</li>
      <li>Mini bus *Taxi</li>
    </ol>
  </div> -->
    <div class="navbar">
        <div class="container">
            <a class="logo" href="#">BRA JOE<span> CarWash</span></a>

            <img @click="addmenu"  class="mobile-menu" src="../assets/menu.svg" alt="Open Navigation">
            <nav id="mysidebar">
                <img @click="removemenu" id="mobile-exit" class="mobile-menu-exit" src="../assets/exit.svg" alt="Close Navigation">
                <ul class="primary-nav">
                    <li class="current"><a href="#">Home</a></li>
                    <li><a href="#">Features</a></li>
                    <li><a href="#" @click="addprice">Pricing</a></li>
                </ul>

                <ul class="secondary-nav">
                    <li><a href="#">Contact</a></li>
                    <li class="go-premium-cta"><a href="https://brajoecarwash.co.za/#/login">Log in</a></li>
                    <li class="go-premium-cta"><a href="https://brajoecarwash.co.za/#/signup">Sign up</a></li>
                </ul>
            </nav>
        </div>
    </div>

    <section class="hero">
        <div class="container">
            <div class="left-col">
               <!-- <p class="subhead">It's Nitty &amp; Gritty</p> -->
               <!-- <h1>Limited OFFER </h1> -->
                <h4></h4>
                <blockquote>"Ain't too clean till it squeaks! We scrub you shine! Wax, rinse,go!"</blockquote>
                    <cite>-BRA JOE</cite>
               <!-- <p style="font-size:50px">&#128295;&#128296;&#128297;</p> -->
               <!-- <div class="hero-cta">
                    <a href="#" class="primary-cta">Try for free</a>
                    <a href="#" class="watch-video-cta">
                        <img src="../assets/watch.svg" alt="Watch a video">Watch a video
                    </a>
                </div> -->
            </div>
           <!-- <img src="../assets/108487139-window-wash-1440.jpg" class="hero-img" alt="Illustration">-->
        </div>
    </section>

    <section class="features-section">
        <div class="container">
            <ul class="features-list">
                <li>Car Waxing</li>
                <li>Vehicle interior vacuuming</li>
                <li>Full Body Wash</li>
                <li>Engine cleaning</li>
            </ul>

           <!-- <img src="../assets/holding-phone.jpg" alt="Man holding phone"> -->
        </div>
    </section>

   <!-- <section class="testimonials-section">
        <div class="container">
            <ul>
                <li>
                    <img src="../assets/kb.jpg" alt="Person">

                    <blockquote>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"</blockquote>
                    <cite>- Jane Doe</cite>
                </li>
                <li>
                    <img src="../assets/kb.jpg" alt="Person">

                    <blockquote>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"</blockquote>
                    <cite>- Jane Doe</cite>
                </li>
                <li>
                    <img src="../assets/kb.jpg" alt="Person">

                    <blockquote>"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore"</blockquote>
                    <cite>- Jane Doe</cite>
                </li>
            </ul> 
        </div>
    </section> -->

    <section class="contact-section">
        <div class="container">
            <div class="contact-left">
                <h2>Suggestion</h2>

                <form onsubmit="return false">
                  <div id="suggestions" class="suggestions">
                    <label for="name">Name</label>
                    <input type="text" v-model= "sugname" id="name" name="name" required oninvalid="this.setCustomValidity('Enter Name')" oninput="this.setCustomValidity('')">

                    <!-- <label for="email">Email</label>
                    <input type="email" v-model= "sugemail" id="email" name="email" required oninvalid="this.setCustomValidity('Enter Valid Email')" oninput="this.setCustomValidity('')">
-->
                    <label for="message">Message</label>
                    <textarea style="resize: none;" name="message" v-model= "sugmessage" id="message" cols="30" rows="10" required oninvalid="this.setCustomValidity('Enter Suggestion message')" oninput="this.setCustomValidity('')"></textarea>

                    <input id="sendesugg" type="button" @click="sendemail" class="send-message-cta" value="Send message">
                  </div>
                </form>
            </div>
            <div class="contact-right">
<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d706.4003803323423!2d28.099735019504372!3d-25.579115927241748!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x1824186fdf08ed66!2sBrajoes%20car%20wash!5e1!3m2!1sen!2sza!4v1655380638616!5m2!1sen!2sza" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

        </div>
    </section>
            <div class="foots">
    <app-footer/>
    </div>
  </div>
</template>

<script>
import foot from '../components/foot.vue'
export default {
  components: { 'app-footer': foot },
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      file: '1111',
      sugname: '',
      sugemail: '',
      sugmessage: '',
      resultsFetched_3: '',
      atload: 0
    }
  },

  /* unmounted () {
    window.removeEventListener('resize', this.removemenu)
  }, */
  methods: {
    addprice () {
      document.querySelector('nav').classList.add('menu-btn')
      document.getElementById('blur2').style.width = '100%'
    },
    addmenu () {
      document.querySelector('nav').classList.add('menu-btn')
      document.getElementById('blur').style.width = '100%'
    },
    removemenu () {
      document.getElementById('blur').style.width = '0%'
      document.querySelector('nav').classList.remove('menu-btn')
    },
    async upload () {
      await fetch(`https://kabelodatabase.herokuapp.com/set_pic/${this.$refs.myFiles.files}`)
      console.log(this.$refs.myFiles.files)
    },
    async register () {
      const axios = require('axios')
      axios.post('https://kabelodatabase.herokuapp.com/register', {
        todo: 'Buy the milk'
      })
        .then((response) => {
          console.log(response)
          alert(response.data)
        }, (error) => {
          console.log(error)
        })
    },
    async sendemail () {
      document.getElementById('sendesugg').disabled = true
      document.getElementById('sendesugg').style.backgroundColor = '#F0998B'
      let allAreFilled = true /* check if all required fields are entered */
      document.getElementById('suggestions').querySelectorAll('[required]').forEach(function (i) {
        if (!allAreFilled) return
        if (!i.value) allAreFilled = false
      })
      if (allAreFilled) {
        const axios = require('axios')
        await axios.post('https://kabelodatabase.herokuapp.com/sendemail', {
          sugestionname: this.sugname,
          sugestionmessage: this.sugmessage,
          sendereamil: 'joesdrivethrough@gmail.com'
        })
          .then((response) => {
            this.sugname = ''
            this.sugmessage = ''
            // console.log(response)
            alert(response.data)
          }, (error) => {
            console.log(error)
          })
      } else {
        alert('Enter all required fields')
      }
      document.getElementById('sendesugg').disabled = false
      document.getElementById('sendesugg').style.backgroundColor = '#31F300'
      /* await fetch(`https://kabelodatabase.herokuapp.com/sendemail/joesdrivethrough@gmail.com/` + this.sugname + ' ' + this.sugmessage)
          .then(response => response.json())
          .then(results => (this.resultsFetched_3 = results))
        alert(this.resultsFetched_3)
      } */
    },
    async count () {
      await fetch(`https://kabelodatabase.herokuapp.com/fn_add_load/brajoe`)
    }
  },
  mounted () {
    window.addEventListener('resize', this.removemenu)
    // create a cookie that will help us coont number of page visits.
    let coo = ''
    let decodedCookie = decodeURIComponent(document.cookie)
    let ca = decodedCookie.split(';')
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i]
      while (c.charAt(0) === ' ') {
        c = c.substring(1)
      }
      if (c.indexOf('logsbrajoe=') === 0) {
        coo = c.substring('logsbrajoe=', c.length)
      }
    }
    if (coo.length <= 1) {
      const d = new Date()
      d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000))
      d.setUTCHours(0, 0, 0)
      let expires = 'expires=' + d.toUTCString()
      document.cookie = 'logsbrajoe' + '=' + 'brajoecarwash' + ';' + expires + ';path=/'
      this.count()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap");
:root {
  --primary-color: #31F300;
}
 .left-col blockquote {
  font-size: 1.2em;
  font-weight: bold;
  /* color: #31F300; */
}
.left-col cite {
   font-size: 1.0em;
}
body {
  background: #9DF8B0;
  margin: 0;
  font-family: 'Poppins';
}

.navbar {
  background: white;
  padding: 1em;
}

.navbar .logo {
  text-decoration: none;
  font-weight: bold;
  color: black;
  font-size: 1.2em;
}

.navbar .logo span {
  color: var(--primary-color);
}

.navbar nav {
  display: none;
  transition: 0.5s;
}

.navbar .container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  place-content: space-between;
}

.navbar .mobile-menu {
  cursor: pointer;
}

a {
  color: #444444;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

section {
  padding: 5em 2em;
}

.hero {
  text-align: center;
      background:url('../assets/108487139-window-wash-1440.jpg');
      background-image-opacity: 0.2;
}

.left-col .subhead {
  text-transform: uppercase;
  font-weight: bold;
  color: gray;
  letter-spacing: .3em;
}

.left-col h1 {
  font-size: 2.5em;
  line-height: 1.3em;
  margin-top: .2em;
}

.left-col .primary-cta {
  background: var(--primary-color);
  color: white;
  text-decoration: none;
  padding: .6em 1.3em;
  font-size: 1.4em;
  border-radius: 5em;
  font-weight: bold;
  display: inline-block;
}

.left-col .watch-video-cta {
  display: block;
  margin-top: 1em;
}

.left-col .watch-video-cta img {
  margin-right: .5em;
}

.hero-img {
  width: 70%;
  margin-top: 3em;
}

section.features-section {
  background: #20272E;
  color: white;
}

ul.features-list {
  margin: 0;
  padding-left: .1em;
  display: -ms-grid;
  display: grid;
  -ms-grid-columns: (minmax(19rem, 1fr))[auto-fit];
      grid-template-columns: repeat(auto-fit, minmax(19rem, 1fr));
}

ul.features-list li {
  font-size: 1.1em;
  margin-bottom: 1em;
  margin-left: 2em;
  position: relative;
}

ul.features-list li:before {
  content: '';
  left: -2em;
  position: absolute;
  width: 20px;
  height: 20px;
  background-image: url("../assets/bullet.svg");
  background-size: contain;
  margin-right: .5em;
}

.features-section img {
  display: none;
}

.testimonials-section {
  background: var(--primary-color);
  color: white;
}

.testimonials-section li {
  background: #006BD6;
  text-align: center;
  padding: 2em 1em;
  width: 80%;
  margin: 0 auto 5em auto;
  border-radius: 1em;
}

.testimonials-section li img {
  width: 5em;
  height: 5em;
  border: 5px solid #006BD6;
  border-radius: 50%;
  margin-top: -4.5em;
}

h2 {
  font-size: 2em;
}

label {
  display: block;
  font-size: 1.2em;
  margin-bottom: .5em;
}

input, textarea {
  width: 100%;
  padding: .8em;
  margin-bottom: 1em;
  border-radius: .3em;
  border: 1px solid gray;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
}

input[type="button"] {
  background-color: var(--primary-color);
  color: white;
  font-weight: bold;
  font-size: 1.3em;
  border: none;
  margin-bottom: 5em;
  border-radius: 5em;
  display: inline-block;
  padding: .8em 2em;
  width: unset;
  cursor: pointer;
}

iframe {
  width: 100%;
  height: 300px;
}

nav.menu-btn {
  display: block;
}

nav {
  position: fixed;
  z-index: 999;
  width: 66%;
  right: 0;
  top: 0;
  background: #20272E;
  height: 100vh;
  padding: 1em;
}

nav ul.primary-nav {
  margin-top: 5em;
}

nav li a {
  color: white;
  text-decoration: none;
  display: block;
  padding: .5em;
  font-size: 1.3em;
  text-align: right;
}

nav li a:hover {
  font-weight: bold;
}

.mobile-menu-exit {
  float: right;
  margin: .5em;
  cursor: pointer;
}

@media only screen and (min-width: 768px) {
  .mobile-menu, .mobile-menu-exit {
    display: none;
  }
  .navbar .container {
    display: -ms-grid;
    display: grid;
    -ms-grid-columns: 180px auto;
        grid-template-columns: 180px auto;
    -webkit-box-pack: unset;
        -ms-flex-pack: unset;
            justify-content: unset;
  }
  .navbar nav {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    background: none;
    position: unset;
    height: auto;
    width: 100%;
    padding: 0;
  }
  .navbar nav ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .navbar nav a {
    color: black;
    font-size: 1em;
    padding: .1em 1em;
  }
  .navbar nav ul.primary-nav {
    margin: 0;
  }
  .navbar nav li.current a {
    font-weight: bold;
  }
  .navbar nav li.go-premium-cta a {
    color: var(--primary-color);
    border: 3px solid var(--primary-color);
    font-weight: bold;
    border-radius: 5em;
    margin-top: -.2em;
  }
  .navbar nav li.go-premium-cta a:hover {
    background: var(--primary-color);
    color: white;
  }
}

@media only screen and (min-width: 1080px) {
  .container {
    width: 1080px;
    margin: 0 auto;
  }
  section {
    padding: 10em 4em;
  }
  .hero .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: justify;
        -ms-flex-pack: justify;
            justify-content: space-between;
    text-align: left;
  }
  .hero .container .left-col {
    margin: 3em 3em 0 5em;
    background: rgba(255, 255, 255, 0.05);
     backdrop-filter: blur(8px);
  }
  .hero .container .left-col h1 {
    font-size: 3em;
    width: 90%;
  }
  .hero-img {
    width: 30%;
    margin-right: 8em;
  }
  .hero-cta {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .primary-cta {
    margin-right: 1em;
  }
  ul.features-list {
    display: block;
    margin-left: 5em;
  }
  ul.features-list li {
    font-size: 1.4em;
  }
  ul.features-list li:before {
    width: 30px;
    height: 30px;
  }
  .features-section {
    position: relative;
  }
  .features-section img {
    display: block;
    position: absolute;
    right: 0;
    width: 350px;
    bottom: -2em;
  }
  .testimonials-section ul {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .testimonials-section ul li {
    margin: 0 1em;
  }
  .contact-section {
    position: relative;
  }
  .contact-section .container {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  }
  .contact-right {
    position: absolute;
    right: 0;
    top: 0;
    width: 45%;
    height: 100%;
  }
  .contact-right iframe {
    height: 100%;
  }
}

@media only screen and (min-width: 1450px) {
  .features-section:before {
    content: '';
    position: absolute;
    width: 10%;
    height: 20em;
    background: var(--primary-color);
    left: 0;
    top: -4em;
  }
  .features-section:after {
    content: '';
    position: absolute;
    width: 200px;
    height: 20em;
    background: url("../assets/dots.svg") no-repeat;
    left: 4.5em;
    top: 2em;
  }
}

@media only screen and (max-width: 1450px) {
  .hero .container .left-col {
    border: 15px;
    margin: 0em 0em 0 0em;
    background: rgba(255, 255, 255, 0.05);
     backdrop-filter: blur(8px);
  }
}
  .blur {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  height: 100%;
  width: 0%;
  position: fixed;
  top:0 ;
  left: 0;
  overflow-x: visible;
  z-index: 3;
  transition: .8s;
}
  .blur2 {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(8px);
  /* height: 75%; */
  position: fixed;
  top:25% ;
  left: 25%;
  right: 25%;
  bottom: 25%;
  overflow-x: visible;
  z-index: 3;
  transition: .8s;
}
.price {
  z-index: 3;
  position: fixed;
  left: 30%;
  top: 20%;
}
/*# sourceMappingURL=main.css.map */
</style>

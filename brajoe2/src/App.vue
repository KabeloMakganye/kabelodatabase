<template>
<body>
  <div id="app">
    <!--<img src="./assets/logo.png"> -->
    <router-view/>
  </div>
  </body>
</template>

<script>
import foot from './components/foot.vue'
export default {
  components: { 'app-footer': foot },
  name: 'App'
}
</script>

<!-- GetButton.io widget -->
<script type="text/javascript">
    (function () {
        var options = {
            whatsapp: "+27764952492", // WhatsApp number
            call_to_action: "", // Call to action
            button_color: "#FF6550", // Color of button
            position: "right", // Position may be 'right' or 'left'
            pre_filled_message: "Hi, your employees are really good.", // WhatsApp pre-filled message
        };
        var proto = 'https:', host = "getbutton.io", url = proto + '//static.' + host;
        var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
        s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
        var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
    })();
</script>
<!-- /GetButton.io widget -->

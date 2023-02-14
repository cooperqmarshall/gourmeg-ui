import "bulma/css/bulma.css";
import { createApp } from "vue";
import App from "@/App.vue";
import router from "@/routes";
import store from "@/store";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faHome, faList, faPlus, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
library.add( faHome, faList, faPlus, faSearch, faUser )

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(store)
  .mount("#app");

import '~/styles/main.scss';
import '~/styles/editor/editDraft.scss';
import Vue from 'vue';
import App from '~/js/components/editor/EditMarkdownDraft.vue';
import {
    registerDirective,
} from '~/js/utils/vue.js';

registerDirective(Vue);

new Vue({
    render: h => h(App),
}).$mount('#app');

if (module.hot) {
    module.hot.accept();
}

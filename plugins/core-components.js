import Vue from 'vue';

import AppButton from '@/components/UI/AppButton';
import AppControlInput from '@/components/UI/AppControlInput';
import BoardList from '@/components/Boards/BoardList';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

Vue.component('AppButton', AppButton);
Vue.component('AppControlInput', AppControlInput);
Vue.component('BoardList', BoardList);
Vue.component(BootstrapVue);
Vue.component(BootstrapVueIcons);


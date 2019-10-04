import Vue from 'vue'

import DescriptionList from '../components/DescriptionList'

const DetailListItem = DescriptionList.Item;

Vue.component(DescriptionList.name, DescriptionList);
Vue.component("detail-list-item", DetailListItem);

import Vue from 'vue';
import {
    Avatar,
    Layout,
    LocaleProvider,
    Menu,
    Icon,
    Dropdown,
    Button,
    Breadcrumb,
    Popover,
    List,
    Badge,
    Drawer,
    Divider,
    Input,
    Form,
    Row,
    Col
} from 'ant-design-vue';

import AntdActions from './antd-actions';

Vue.use(AntdActions);
Vue.component(Avatar.name, Avatar);
Vue.component(LocaleProvider.name, LocaleProvider);
Vue.component(Layout.name, Layout);
Vue.component(Layout.Content.name, Layout.Content);
Vue.component(Layout.Header.name, Layout.Header);
Vue.component(Layout.Footer.name, Layout.Footer);
Vue.component(Layout.Sider.name, Layout.Sider);
Vue.component(Menu.name, Menu);
Vue.component(Menu.Item.name, Menu.Item);
Vue.component(Menu.Divider.name, Menu.Divider);
Vue.component(Menu.SubMenu.name, Menu.SubMenu);
Vue.component(Menu.ItemGroup.name, Menu.ItemGroup);
Vue.component(Icon.name, Icon);
Vue.component(Dropdown.name, Dropdown);
Vue.component(Button.name, Button);
Vue.component(Breadcrumb.name, Breadcrumb);
Vue.component(Breadcrumb.Item.name, Breadcrumb.Item);
Vue.component(Popover.name, Popover);
Vue.component(List.name, List);
Vue.component(List.Item.name, List.Item);
Vue.component(List.Item.Meta.name, List.Item.Meta);
Vue.component(Badge.name, Badge);
Vue.component(Drawer.name, Drawer);
Vue.component(Divider.name, Divider);
Vue.component(Input.name, Input);
Vue.component(Input.Password.name, Input.Password);
Vue.component(Form.name, Form);
Vue.component(Form.Item.name, Form.Item);
Vue.component(Row.name, Row);
Vue.component(Col.name, Col);

import {deviceEnquire, DEVICE_TYPE} from '../utils/device';
import config from '../config/defaultSettings'

export default function ({store}) {

    store.commit('SET_SIDEBAR_TYPE', true);
    store.commit('TOGGLE_THEME', config.navTheme);
    store.commit('TOGGLE_LAYOUT_MODE', config.layout);
    store.commit('TOGGLE_FIXED_HEADER', config.fixedHeader);
    store.commit('TOGGLE_FIXED_SIDERBAR', config.layout === 'topmenu' ? false : config.fixSiderbar);
    store.commit('TOGGLE_CONTENT_WIDTH', config.contentWidth);
    store.commit('TOGGLE_FIXED_HEADER_HIDDEN', config.autoHideHeader);
    store.commit('TOGGLE_WEAK', config.colorWeak);
    store.commit('TOGGLE_COLOR', config.primaryColor);
    store.commit('TOGGLE_MULTI_TAB', config.multiTab);

    deviceEnquire(deviceType => {
        switch (deviceType) {
            case DEVICE_TYPE.DESKTOP:
                store.commit('TOGGLE_DEVICE', 'desktop');
                store.dispatch('setSidebar', true);
                break;
            case DEVICE_TYPE.TABLET:
                store.commit('TOGGLE_DEVICE', 'tablet');
                store.dispatch('setSidebar', false);
                break;
            case DEVICE_TYPE.MOBILE:
            default:
                store.commit('TOGGLE_DEVICE', 'mobile');
                store.dispatch('setSidebar', true);
                break;
        }
    })
}

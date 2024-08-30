import { atom } from 'recoil';

export const toggle = atom({
    key: 'toggle',
    default:{
        welcome: false,
        username:'',
    }

});
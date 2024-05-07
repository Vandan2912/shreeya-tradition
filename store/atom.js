import { atom } from "recoil";

export const isNavbarSticky = atom({
    key: 'isNavbarSticky', // unique ID (with respect to other atoms/selectors)
    default: false, // default value (aka initial value)
});
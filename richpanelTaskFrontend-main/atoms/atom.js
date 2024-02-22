import { atom } from "recoil";

export const pageState = atom({
	key: "pageState",
	default: {},
});

export const conversationState = atom({
	key: "convState",
	default: [],
});

export const activeConvState = atom({
	key: "activeConv",
	default: {},
});

export const profileState = atom({
	key: "Profile",
	default: {},
});

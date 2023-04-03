import { atom } from "jotai";
import { ALL_PRODUCT_LIST, ProductItem } from "./product";

export const WishListAtom = atom<ProductItem[]>([]);
export const CartAtom = atom<ProductItem[]>([]);
export const ProductAtom = atom<ProductItem[]>(ALL_PRODUCT_LIST);

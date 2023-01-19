import { atom } from 'jotai';
import { ProductItem } from './product';

export const WishListAtom = atom<ProductItem[]>([]);
export const CartAtom = atom([]);
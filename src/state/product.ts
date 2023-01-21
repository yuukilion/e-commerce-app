import Pixel7ProImg from '../assets/image/Pixel7Pro.webp';
import Pixel7Img from '../assets/image/Pixel7.webp';
import Pixel6ProImg from '../assets/image/Pixel6Pro.webp';
import Pixel6aImg from '../assets/image/Pixel6a.webp';
import PixelWatchImg from '../assets/image/PixelWatch.png';
import FitbitSence2Img from '../assets/image/Fitbit Sence2.png';
import FitbitVersa4Img from '../assets/image/Fitbit Versa4.png';
import FitbitVersa3Img from '../assets/image/Fitbit Versa3.png';
import FitbitInspire3Img from '../assets/image/Fitbit Inspire3.png';
import FitbitCharge5Img from '../assets/image/Fitbit Charge5.png';

export type ProductItem = {
  id: number,
  name: string,
  description: string,
  detail: string,
  price: number,
  image: string
  quantity: number
};

export type Category = ProductItem[][];

export const PRODUCT_SMARTPHONE_LIST: ProductItem[] = [
  {
    id: 1,
    name: 'Google Pixel7 Pro',
    description: 'プロ性能を突き詰めたGoogle Pixel。',
    detail: '',
    price: 124300,
    image: Pixel7ProImg,
    quantity: 1
  },
  {
    id: 2,
    name: 'Google Pixel 7',
    description: 'パワフルな性能と、便利な機能。',
    detail: '',
    price: 82500,
    image: Pixel7Img,
    quantity: 1
  },
  {
  id: 3,
  name: 'Google Pixel 6Pro',
  description: 'ユーザーに寄り添う、最先端の Google テクノロジーが結集。',
  detail: '',
  price: 99800,
  image: Pixel6ProImg,
  quantity: 1
  },
  {
  id: 4,
  name: 'Google Pixel 6a',
  description: 'スマートで、パワフル、便利な機能。すべてが詰まってお手ごろ価格。',
  detail: '',
  price: 53900,
  image: Pixel6aImg,
  quantity: 1
  },
];

export const PRODUCT_SMARTWATCH_LIST: ProductItem[] = [
  {
    id: 5,
    name: 'Google Pixel Watch',
    description: 'Google の便利な機能を利用しながら、Fitbit で健康的な生活を手に入れましょう。',
    detail: '',
    price: 39800,
    image: PixelWatchImg,
    quantity: 1
  },
  {
    id: 6,
    name: 'Fitbit Sence 2',
    description: 'ストレスマネジメントと、より良い睡眠のために',
    detail: '',
    price: 32800,
    image: FitbitSence2Img,
    quantity: 1
  },
  {
    id: 7,
    name: 'Fitbit Versa 4',
    description: '健康管理のための設計。',
    detail: '',
    price: 27800,
    image: FitbitVersa4Img,
    quantity: 1
  },
  {
    id: 8,
    name: 'Fitbit Versa 3',
    description: 'モチベーションを身に着ける。',
    detail: '',
    price: 22800,
    image: FitbitVersa3Img,
    quantity: 1
  },
  {
    id: 9,
    name: 'Fitbit Inspire 3',
    description: '自分の好きなことを、最高の気分で。',
    detail: '',
    price: 12800,
    image: FitbitInspire3Img,
    quantity: 1
  },
  {
    id: 10,
    name: 'Fitbit Charge 5',
    description: '日々のルーティンを再構築。',
    detail: '',
    price: 19800,
    image: FitbitCharge5Img,
    quantity: 1
  },
];

export const ALL_PRODUCT_LIST = [ ...PRODUCT_SMARTPHONE_LIST, ...PRODUCT_SMARTWATCH_LIST ];

export const CATEGORY_LIST: Category = [ PRODUCT_SMARTPHONE_LIST, PRODUCT_SMARTWATCH_LIST];
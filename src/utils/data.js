import I1 from "../assets/i1.png";
import F1 from "../assets/f1.png";
import C1 from "../assets/c1.png";
import FI1 from "../assets/fi1.png";

export const heroData = [
  {
    id: 1,
    name: "Icecream",
    desc: "Chocolate & Vanilla",
    price: "3.5",
    imgSrc: I1,
  },
  {
    id: 2,
    name: "Strawberries",
    desc: "Fresh Strawberries",
    price: "4.5",
    imgSrc: F1,
  },
  // {
  //   id: 3,
  //   name: "Chicken Kebab",
  //   desc: "Mixed Kebab Plate",
  //   price: "8.5",
  //   imgSrc: C1,
  // },
  // {
  //   id: 4,
  //   name: "Fish Kebab",
  //   desc: "Mixed Fish Kebab",
  //   price: "10",
  //   imgSrc: FI1,
  // },
];

export const categories = [
  { id: 1, name: "Chicken", urlParamName: "chicken" },
  { id: 2, name: "Curry", urlParamName: "curry" },
  { id: 3, name: "Rice", urlParamName: "rice" },
  { id: 4, name: "Fish", urlParamName: "fish" },
  { id: 5, name: "Fruits", urlParamName: "fruits" },
  { id: 6, name: "Icecream", urlParamName: "icecreams" },
  { id: 7, name: "Soft Drinks", urlParamName: "drinks" },
];

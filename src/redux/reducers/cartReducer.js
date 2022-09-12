import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
  DECREASE,
  INCREASE,
} from '../actions/cartActions';

const initialState = {
  cart: [],
  totalQty: 0,
  totalPrice: 0,
};

// console.log(action.payload.data); cart arrayin içindeki product
// console.log(action.payload);  cart array

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      console.log('Sepete Eklenen Ürün: ' + action.payload.data);
      return {
        ...state,
        cart: generateCart(action.payload, state.cart),
        totalQty: state.totalQty + 1,
        totalPrice:
          state.totalPrice +
          action.payload.data.price * action.payload.quantity,
      };

    case REMOVE_FROM_CART:
      // fix remove
      console.log('Silinen Ürünün Id Numarası: ' + action.payload.data.id);
      return {
        cart: state.cart.filter(
          product =>
            product.data.id !== action.payload.data.id &&
            product.color !== action.payload.color,
        ),
        totalQty: state.totalQty - action.payload.quantity,
        totalPrice:
          state.totalPrice -
          action.payload.data.price * action.payload.quantity,
      };

    case INCREASE:
      return {
        ...state,
        cart: increaseProduct(action.payload, state.cart),
        totalQty: state.totalQty + 1,
        totalPrice: state.totalPrice + action.payload.price,
      };

    case DECREASE:
      return {
        ...state,
        cart: decreaseProduct(action.payload, state.cart),
        totalQty: state.totalQty - 1,
        totalPrice: state.totalPrice - action.payload.price,
      };

    case CLEAR_CART:
      return {
        cart: [],
        totalPrice: 0,
        totalQty: 0,
      };
    default:
      return state;
  }
}

const generateCart = (model, list) => {
  console.log('Eklenen Ürün: ' + model);
  console.log('Mevcut Sepet: ' + list);
  const duplicate =
    list.filter(
      item => item.data.id === model.data.id && item.color === model.color,
    ).length > 0
      ? true
      : false;
  if (!duplicate) {
    console.log(
      ' ---Sepette aynı ID ve aynı COLOR değerine sahip item yok. O yüzden yenisi ekleniyor--- ',
    );
    list.push(model);
    return list;
  } else {
    console.log(
      ' ---Sepette aynı ID ve aynı COLOR değerine sahip item var. O yüzden var olan itemin quantity değeri 1 artıyor--- ',
    );
    var basketList = [];
    list.map((product, index) => {
      console.log(
        product.data.id === model.data.id && product.color === model.color,
      );
      if (product.data.id === model.data.id && product.color === model.color) {
        product.quantity = product.quantity + 1;
        list[index] = product;
        basketList = list;
      }
    });
    return basketList;
  }
};

// Arttırma çalışıyor
const increaseProduct = (model, list) => {
  console.log('Mevcut Sepet' + list);
  console.log('Adedi Arttırılan Ürün: ' + model);
  console.log(' ---İtemin quantity değeri 1 artıyor--- ');

  var basketList = [];
  list.map((product, index) => {
    console.log('Arttırılan Ürün rengi ', model.color);
    console.log('Arttırılan Ürün id ', model.data.data.id);
    console.log(
      product.data.id === model.data.data.id && product.color === model.color,
    );
    if (
      product.data.id === model.data.data.id &&
      product.color === model.color
    ) {
      product.quantity = product.quantity + 1;
      list[index] = product;
      basketList = list;
    }
    console.log(basketList);
  });
  return basketList;
};

const decreaseProduct = (model, list) => {
  console.log('Mevcut Sepet' + list);
  console.log('Adedi Azaltılan Ürün: ' + model);
  console.log(' ---İtemin quantity değeri 1 azaltılıyor--- ');
  console.log(model.quantity);

  // var basketList = [];
  // list.map((product, index) => {
  //   console.log('Çıkarılan ürün ', model.color);
  //   if (product.data.id === model.data.id && product.color === model.color) {
  //     product.quantity = product.quantity + 1;
  //     list[index] = product;
  //     basketList = list;
  //   }
  // });
  // return basketList;
};

/*
id kontrolü ile eklemek için yaptığım denemeler
const foo = () => {
        const otherOperations = (state.totalPrice =
        state.totalPrice + action.payload.data.price * action.payload.quantity);
      const itemInCart = state.cart.find(
        item => item.data.id === action.payload.data.id,
      );
  if (itemInCart) {
    itemInCart.quantity++;
    state.totalQty = state.totalQty + 1;
    otherOperations;
  } else {
    state.cart.push({...action.payload, quantity: 1});
    state.totalQty = state.totalQty + 1;
    otherOperations;
  }
};

const itemInCart = state.cart.find(
  item => item.data.id !== action.payload.data.id,
);

console.log(itemInCart);
console.log(
  state.cart.map(product =>
    product['data']['id'] === action.payload.data.id
      ? {...product, quantity: +1}
      : action.payload,
  ),
);
*/

/*
const myObj = {
  name: 'Ross',
  writing: true,
  enjoyment: 10,
  meta: {
    minutesWriting: 20,
    minutesProcrastinating: 0,
  }
};

const { meta: { minutesProcrastinating } } = myObj;

bu şekilde myObj nesnesinin içindeki meta nesnesinin içindeki minutesProcrastinating değerine ulaşılabiliyormuş

*/

/*
 elimizde bir dizi varsa ör

 const articlesObj = [
 {
   name: 'React Navigation 5 Article',
   ...
 }, {
   name: 'React Context with Dark Mode',
   ...
 }, {
   name: 'All About TypeScript in React'
   ...
 }
];

const articlesJsx = articlesObj.map((item, index) => {
   return (
     <View key={index}>...</View>
  );
});

olabiliyormuş

eğer dizi değilse

const articlesJsx = Object.values(articlesObj).map((item, index) =>
  <View key={index}>...</View>
);
böyleymiş

*/

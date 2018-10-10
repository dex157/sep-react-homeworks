import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';
import { positions } from '../positions';

export default (state = [], action) => {
  const { type, payload } = action;

  let currentOrder = null;
  let index = null;

  switch (type) {
    case CREATE_NEW_ORDER:
      return [
        ...state,
        {
          id: payload.id,
          recipe: payload.recipe,
          ingredients: [],
          position: 'clients'
        }
      ];
    case MOVE_ORDER_NEXT:
      index = state.findIndex(order => order.id === payload);
      currentOrder = changePosition(state, payload, 'next');
      return state.map((order, key) => (key === index ? currentOrder : order));
    case MOVE_ORDER_BACK:
      index = state.findIndex(order => order.id === payload);
      currentOrder = changePosition(state, payload, 'back');
      return state.map((order, key) => (key === index ? currentOrder : order));
    case ADD_INGREDIENT:
      if (state === [])
        return state;
      currentOrder = state.find(order => order.position === payload.from);
      if (!currentOrder)
        return state;
      index = state.findIndex(order => order.id === currentOrder.id);
      if (currentOrder.recipe.includes(payload.ingredient)) {
        if (!currentOrder.ingredients.includes(payload.ingredient)) {
          currentOrder = {
            ...currentOrder, 
            ingredients: [
              ...currentOrder.ingredients, payload.ingredient
            ]
          }
        }
      }
      return state.map((order, key) => (key === index ? currentOrder : order));
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);

export function changePosition(state, payload, move) {
  let currentOrder = state.find(order => order.id === payload);
  let positionIndex = positions.indexOf(currentOrder.position);
  if (move === 'next') {
    let arrayComparison = true;
    if (positions[positionIndex + 1] === 'finish') {
      currentOrder.recipe.filter(element => {
        if (!currentOrder.ingredients.includes(element)) {
          arrayComparison = false;
        }
      });
    }
    if (arrayComparison)
      currentOrder.position = positions[positionIndex + 1];
  } else if (move === 'back') {
    if (positions[positionIndex - 1] !== 'clients') {
      currentOrder.position = positions[positionIndex - 1];
    }
  }
  return currentOrder;
}
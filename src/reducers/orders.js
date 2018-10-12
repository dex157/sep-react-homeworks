import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';
import { positions } from './positions';

export default (state = [], action) => {
  const {payload, type} = action;
  let newOrder, index;

  switch (type) {
    case CREATE_NEW_ORDER:
      const {id, recipe} = action.payload;
      return [
        ...state,
        {
          id: id,
          recipe: recipe,
          ingredients: [],
          position: positions[0]
        }
      ];

    case MOVE_ORDER_NEXT:
      index = state.findIndex(order => order.id === payload);
      newOrder = changePosition(state, payload, 'forward');
      return state.map((order, key) => (key === index ? newOrder : order));

    case MOVE_ORDER_BACK:
      index = state.findIndex(order => order.id === payload);
      newOrder = changePosition(state, payload, 'back');
      return state.map((order, key) => (key === index ? newOrder : order));

    case ADD_INGREDIENT:
      newOrder = state.find(order => order.position === payload.from);
      if (newOrder) {
        index = state.findIndex(order => order.id === newOrder.id);
        newOrder = {
          ...newOrder, 
          ingredients: [
            ...newOrder.ingredients, payload.ingredient
          ]
        }
        return state.map((order, key) => (key === index ? newOrder : order));
      }
      return state;

    default:
      return state;
  }
};

function changePosition(state, payload, direction) {
  let currentOrder = state.find(order => order.id === payload),
      index = positions.indexOf(currentOrder.position),
      suitability = [];

  if (direction === 'forward') {
    if ((positions[index + 1] === 'finish')) {
      suitability = currentOrder.recipe.filter(element => !currentOrder.ingredients.includes(element));
    }
    if ((suitability.length === 0)) {
      currentOrder.position = positions[index + 1];
    }
  } else if (direction === 'back') {
    if (positions[index - 1] !== 'clients') {
      currentOrder.position = positions[index - 1];
    }
  }
  return currentOrder;
}

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
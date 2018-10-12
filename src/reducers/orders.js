import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

export default (state = [], action) => {
  const { payload } = action;
  let index, currentOrder;
  switch (action.type) {
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
      currentOrder = changePosition(state, payload, 'next');
      index = state.findIndex(order => order.id === payload);
      return state.map((order, key) => (key === index ? currentOrder : order));
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);

export function changePosition(state, payload, move) {
  let currentOrder = state.find(order => order.id === payload);

  return currentOrder;
}

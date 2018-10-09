import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';
import steps from '../steps';
import * as util from './order.util';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      const { id, recipe } = action.payload;
      const initialStep = steps[0];
      const order = {
        id,
        recipe,
        ingredients: [],
        position: initialStep
      };

      return [...state, order];
    case MOVE_ORDER_NEXT:
      return util.moveOrder(state, action.payload, MOVE_ORDER_NEXT);
    case MOVE_ORDER_BACK:
      return util.moveOrder(state, action.payload, MOVE_ORDER_BACK);
    case ADD_INGREDIENT:
      const { from, ingredient } = action.payload;
      const { updated, order: updatedOrder } = util.addIngridientToOrder(
        state,
        from,
        ingredient
      );
      return updated
        ? util.updateOrderInOrderList(state, updatedOrder.id, updatedOrder)
        : state;
    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);

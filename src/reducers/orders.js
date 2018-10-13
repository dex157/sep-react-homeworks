import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';
import { positionOrder, getPosition, completedRecipe } from './util'

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER: {
      const { id, recipe } = action.payload
      const initOrder = {
        id,
        recipe,
        position: positionOrder[0],
        ingredients: []
      }
      return [ ...state, initOrder]
    }

    case MOVE_ORDER_NEXT: {
      const { payload: orderId } = action;
      const order = state.find(({ id }) => id === orderId);
      const step = getPosition(order);
      if(step < 4 || completedRecipe(order)) {
        return state.map(elOrder => {
          return elOrder.id === orderId 
            ? { ...elOrder, position: positionOrder[step + 1] }
            : elOrder;
        })
      }

      return state
    }

    case MOVE_ORDER_BACK: {
      const { payload: orderId } = action;
      const order = state.find(({ id }) => id === orderId);
      const step = getPosition(order);
      if(step > 1) {
        return state.map(elOrder => {
          return elOrder.id === orderId 
            ? { ...elOrder, position: positionOrder[step - 1] } 
            : elOrder;
        })
      }

      return state
    }

    case ADD_INGREDIENT: {
      const { from, ingredient } = action.payload;
      const order = state.find(({ position }) => position === from);
      if(order) {
        return state.map(elOrder => {
          return elOrder.id === order.id
            ? { ...elOrder, ingredients: [...elOrder.ingredients, ingredient] }
            : elOrder;
        })
      }

      return state;
    }

    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);

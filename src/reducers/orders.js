import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      const { id, recipe } = action.payload;
      const order = { id, recipe, ingredients: [], position: 'clients' };
      if (state.orders === undefined) return [...state, order];
      else return [...state.orders, order];

    case MOVE_ORDER_NEXT:
      const newState1 = JSON.parse(JSON.stringify(state));
      const index1 = parseInt(action.payload, 10) - 1;
      switch (state[index1].position) {
        case 'clients':
          newState1[index1].position = 'conveyor_1';
          break;
        case 'conveyor_1':
          newState1[index1].position = 'conveyor_2';
          break;
        case 'conveyor_2':
          newState1[index1].position = 'conveyor_3';
          break;
        case 'conveyor_3':
          newState1[index1].position = 'conveyor_4';
          break;
        case 'conveyor_4':
          const { recipe, ingredients } = newState1[index1];
          for (let r of recipe)
            if (ingredients.includes(r) !== true) return state;
          newState1[index1].position = 'finish';
          break;
        default:
      }
      return newState1;

    case MOVE_ORDER_BACK:
      const newState2 = JSON.parse(JSON.stringify(state));
      const index2 = parseInt(action.payload, 10) - 1;
      switch (state[index2].position) {
        case 'conveyor_4':
          newState2[index2].position = 'conveyor_3';
          break;
        case 'conveyor_3':
          newState2[index2].position = 'conveyor_2';
          break;
        case 'conveyor_2':
          newState2[index2].position = 'conveyor_1';
          break;
        default:
      }
      return newState2;

    case ADD_INGREDIENT:
      const { from, ingredient } = action.payload;
      const newState3 = JSON.parse(JSON.stringify(state));
      for (const el of newState3) {
        if (el.position === from) {
          el.ingredients.includes(ingredient) === false &&
            el.ingredients.push(ingredient);
          break;
        }
      }
      return newState3;

    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);

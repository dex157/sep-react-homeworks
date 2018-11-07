import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

const positions = [
  'clients',
  'conveyor_1',
  'conveyor_2',
  'conveyor_3',
  'conveyor_4',
  'finish'
];

export default (state = [], action) => {
  switch (action.type) {
    case CREATE_NEW_ORDER:
      const { id, recipe } = action.payload;
      const order = { id, recipe, ingredients: [], position: 'clients' };
      return [...state, order];

    case MOVE_ORDER_NEXT:
      return state.map(order => {
        if (order.id === action.payload) {
          const newPositionNumber = positions.indexOf(order.position) + 1;
          if (positions[newPositionNumber] === 'finish') {
            const { recipe, ingredients } = order;
            for (let ingred of recipe)
              if (ingredients.includes(ingred) !== true) return order;
          }

          return { ...order, position: positions[newPositionNumber] };
        }
        return order;
      });

    case MOVE_ORDER_BACK:
      return state.map(order => {
        if (order.id === action.payload) {
          let newPositionNumber = positions.indexOf(order.position) - 1;
          if (newPositionNumber === 0) return order;
          return { ...order, position: positions[newPositionNumber] };
        }

        return order;
      });

    case ADD_INGREDIENT:
      let notFound = true;
      const { from, ingredient } = action.payload
      return state.map(order => {
        if (order.position === from && notFound) {
          if (
            order.recipe.includes(ingredient) === true &&
            order.ingredients.includes(ingredient) === false
          ) {
            notFound = false;
            return {
              ...order,
              ingredients: [...order.ingredients, ingredient]
            };
          }
        }
        return order;
      });

    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);
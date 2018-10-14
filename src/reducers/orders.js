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
      return [
        ...state,
        {
          id: action.payload.id,
          position: 'clients',
          recipe: action.payload.recipe,
          ingredients: []
        }
      ];

    case MOVE_ORDER_NEXT:
      return state.map(order => {
        if (order.id === action.payload) {
          const indexPositions = positions.findIndex(
            elem => elem === order.position
          );
          if (positions[indexPositions + 1] !== 'finish') {
            order.position = positions[indexPositions + 1];
          } else {
            const finishOrder = order.ingredients.filter(ing =>
              order.recipe.includes(ing)
            );
            if (finishOrder.length === order.recipe.length) {
              order.position = positions[indexPositions + 1];
            }
          }
        }
        return order;
      });

    case MOVE_ORDER_BACK:
      return state.map(order => {
        if (order.id === action.payload) {
          const indexPositions = positions.findIndex(
            elem => elem === order.position
          );
          if (positions[indexPositions - 1] !== 'clients')
            order.position = positions[indexPositions - 1];
        }
        return order;
      });

    case ADD_INGREDIENT:
      let search = true;

      return state.map(order => {
        if (search && order.position === action.payload.from) {
          if (
            order.recipe.includes(action.payload.ingredient) &&
            !order.ingredients.includes(action.payload.ingredient)
          ) {
            order.ingredients = [
              ...order.ingredients,
              action.payload.ingredient
            ];
          }
          search = false;
        }
        return order;
      });

    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);

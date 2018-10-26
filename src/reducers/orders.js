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
    return state.map(item => {
        if(item.id === action.payload){
          let position = positions.indexOf(item.position);
          if(positions[position + 1] === 'finish'){
            let index = 0;
            item.ingredients.map(riceptIngred => {
              item.recipe.map(ing => {
                index = (ing === riceptIngred) ? index + 1 : index;
              })
            })
            item.position = (index === item.recipe.length) ? positions[position + 1] : item.position;
          } else{
          item.position = positions[position + 1];
          }
        }
      return item;
  
    });
    
    case MOVE_ORDER_BACK:
    return state.map(item => {
        if(item.id === action.payload){
          let position = positions.indexOf(item.position);
          if(positions[position - 1] !== 'clients'){
            item.position = positions[position - 1];
          }
        }
      return item;
  
    });
    case ADD_INGREDIENT:
    console.log(action);
    console.log(state);
    let iteration = true;
    return state.map(item => {
      if(item.position === action.payload.from && iteration){
        // item.ingredients.push(action.payload.ingredient);
        item.ingredients = [
          ...item.ingredients,
          action.payload.ingredient
        ];
        iteration = false;
      }
      return item;
    })
    
    // return state;

    default:
      return state;
  }
};

export const getOrdersFor = (state, position) =>
  state.orders.filter(order => order.position === position);

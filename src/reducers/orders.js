import { CREATE_NEW_ORDER } from '../modules/clients';
import { MOVE_ORDER_NEXT, MOVE_ORDER_BACK } from '../actions/moveOrder';
import { ADD_INGREDIENT } from '../actions/ingredients';

const steps = [
    'clients',
    'conveyor_1',
    'conveyor_2',
    'conveyor_3',
    'conveyor_4',
    'finish'
];

const getStep = (pizza, step) => {
    const indexStep = steps.indexOf(pizza.position);
    const nextStep = indexStep + step;
    const newPosition = steps[nextStep];
    let resolveMove;

    if (
        nextStep > 0 &&
        (nextStep < steps.length - 1 ||
            pizza.recipe.length === pizza.ingredients.length)
    )
        resolveMove = true;
    else resolveMove = false;

    return resolveMove ? newPosition : pizza.position;
};

export default (state = [], action) => {
    switch (action.type) {
        case CREATE_NEW_ORDER: {
            const { id, recipe } = action.payload;
            const newPizza = {
                id: id,
                recipe: recipe,
                ingredients: [],
                position: steps[0]
            };

            return [...state, newPizza];
        }
        case MOVE_ORDER_NEXT: {
            return state.map(pizza => {
                if (pizza.id === action.payload) {
                    return { ...pizza, position: getStep(pizza, 1) };
                } else {
                    return pizza;
                }
            });
        }
        case MOVE_ORDER_BACK: {
            return state.map(pizza => {
                if (pizza.id === action.payload) {
                    return { ...pizza, position: getStep(pizza, -1) };
                } else {
                    return pizza;
                }
            });
        }
        case ADD_INGREDIENT: {
            const { from, ingredient } = action.payload;
            let flag = false;

            return state.map(pizza => {
                if (pizza.position === from && !flag) {
                    flag = true;
                    if (
                        pizza.recipe.indexOf(ingredient) >= 0 &&
                        pizza.ingredients.indexOf(ingredient) < 0
                    )
                        return {
                            ...pizza,
                            ingredients: [...pizza.ingredients, ingredient]
                        };
                    else return pizza;
                } else {
                    return pizza;
                }
            });
        }
        default:
            return state;
    }
};

export const getOrdersFor = (state, position) =>
    state.orders.filter(order => order.position === position);

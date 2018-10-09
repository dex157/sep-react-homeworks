import { MOVE_ORDER_NEXT } from '../actions/moveOrder';
import steps from '../steps';

export const addIngridientToOrder = (orderList, from, ingredient) => {
  const orders = orderList.filter(order => order.position === from);

  if (orders.length === 0) {
    return { updated: false };
  }
  const currentOrder = orders[0];
  const { recipe, ingredients } = currentOrder;

  return ingredients.includes(ingredient) || !recipe.includes(ingredient)
    ? { order: currentOrder, updated: false }
    : {
        order: { ...currentOrder, ingredients: [...ingredients, ingredient] },
        updated: true
      };
};

export const moveOrder = (orderList, orderId, direction) => {
  return updateOrderInOrderList(orderList, orderId, el => {
    const { position } = el;
    const newStep =
      direction === MOVE_ORDER_NEXT
        ? steps[steps.indexOf(position) + 1]
        : steps[steps.indexOf(position) + -1];

    return canMove(el, newStep) ? { ...el, position: newStep } : el;
  });
};
export const updateOrderInOrderList = (orderList, orderId, updatedValue) => {
  return orderList.map(el => {
    const { id: elId } = el;

    if (orderId !== elId) {
      return el;
    }
    return typeof updatedValue === 'function' ? updatedValue(el) : updatedValue;
  });
};

export const canMove = (order, newStep) => {
  switch (newStep) {
    case steps[0]:
      return false;
    case steps[steps.length - 1]:
      return checkIngredients(order);
    default:
      return true;
  }
};

export const checkIngredients = order => {
  const { recipe, ingredients } = order;

  return recipe.reduce((acc, recipeIngredient) => {
    if (!acc) {
      return acc;
    }
    return ingredients.includes(recipeIngredient);
  }, true);
};

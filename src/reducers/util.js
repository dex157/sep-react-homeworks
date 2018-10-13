export const positionOrder = [
    'clients',
    'conveyor_1',
    'conveyor_2',
    'conveyor_3',
    'conveyor_4',
    'finish',
  ]
  
export const getPosition = ({ position }) => 
    positionOrder.findIndex(el => el === position);
  
export const completedRecipe = ({ position, recipe, ingredients}) =>  
    (position === positionOrder[4] && recipe.every(el => ingredients.some(ingr => ingr === el)));
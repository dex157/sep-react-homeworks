export const handleRequest = reqName => (state, action) => {
  const { name: actionName, sol } = action.payload;
  return actionName === reqName
    ? { ...state, [sol]: { photos: [], isLoading: true, isLoaded: false } }
    : state;
};

export const handleRequestSuccess = reqName => (state, action) => {
  const { name: actionName, sol, photos } = action.payload;
  return actionName === reqName
    ? { ...state, [sol]: { photos, isLoading: false, isLoaded: true } }
    : state;
};

export const handleRequestFailure = reqName => (state, action) => {
  const { name: actionName, sol, error } = action.payload;
  return actionName === reqName
    ? { ...state, [sol]: { isLoading: false, isLoaded: true, error } }
    : state;
};
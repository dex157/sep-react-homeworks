import { combineReducers } from 'redux';
import search from './search';
import shows from './shows';
console.log(search, shows);

export default combineReducers({
    search,
    shows
});
// export default search;
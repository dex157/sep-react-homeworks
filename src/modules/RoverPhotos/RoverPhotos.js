import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure, changeSol } from './actions';
import { rovers, minSol, maxSol } from '../../rovers';

const photos = combineReducers(rovers.reduce((rover, name) => {
    rover[name] = handleActions(
        {
            [fetchPhotosRequest]: (_state, action) => (
                action.payload.name === name 
                    ? { 
                        ..._state, 
                        [action.payload.sol]: { isLoading: true, photos: [], isLoaded: false }
                    }
                    : _state
            ),
            [fetchPhotosSuccess]: (_state, action) => (
                action.payload.name === name 
                    ? {
                        _state,
                        [action.payload.sol]: { isLoading: false, photos: action.payload.photos, isLoaded: true }
                    }
                    : _state
            ),
            [fetchPhotosFailure]: (_state, action) => (
                action.payload.name === name 
                    ? {
                        ..._state,
                        [action.payload.sol]: { isLoading: false, error: action.payload.error, isLoaded: true }
                    } 
                    : _state
            )
        },
        {}
    );
    return rover;
}, {}));

const sol = handleActions(
    {
        [changeSol]: (state, action) => ({ ...state, current: action.payload })
    },
    {
        current: 1,
        min: minSol,
        max: maxSol
    }
);

export default combineReducers({
    photos,
    sol,
}); 
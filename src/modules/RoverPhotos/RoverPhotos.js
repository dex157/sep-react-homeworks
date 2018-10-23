import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { fetchPhotosRequest, fetchPhotosSuccess, fetchPhotosFailure, changeSol } from './actions';
import { rovers, minSol, maxSol } from '../../rovers';

const photos = combineReducers(rovers.reduce((rover, name) => {
    rover[name] = handleActions(
        {
            [fetchPhotosRequest]: (_state, action) => ({
                ..._state,
                [action.payload.name]: {..._state[action.payload.name],
                [action.payload.sol]: { isLoading: true, photos: [], isLoaded: false }
                }
            }),
            [fetchPhotosSuccess]: (_state, action) => ({
                ..._state,
                [action.payload.name]: {..._state[action.payload.name],
                    [action.payload.sol]: {
                        isLoading: false,
                        photos: action.payload.photos,
                        isLoaded: true
                    }
                }
            }),
            [fetchPhotosFailure]: (_state, action) => ({
                ..._state,
                [action.payload.name]: {..._state[action.payload.name],
                    [action.payload.sol]: {
                        isLoading: false,
                        photos: [],
                        isLoaded: false
                    }
                }
            })
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
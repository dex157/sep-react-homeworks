import { combineReducers } from 'redux';
import { handleActions } from 'redux-actions';
import { 
    fetchPhotosRequest,
    fetchPhotosSuccess,
    fetchPhotosFailure,
    changeSol
} from './actions';
import { 
    rowsName,
    minValue,
    maxValue,
    currentValue
} from '../../constants';

const photosReducer = rowsName.reduce((row, name) => {
    row[name] = handleActions(
        {
            [fetchPhotosRequest]: (_state, action) => (
                action.payload.name === name ? { 
                    ..._state, 
                        [action.payload.sol]: { 
                            isLoading: true, 
                            photos: [], 
                            isLoaded: false 
                        }
                    }
                    : _state
            ),
            [fetchPhotosSuccess]: (_state, action) => (
                action.payload.name === name ? { 
                    ..._state, 
                        [action.payload.sol]: { 
                            isLoading: false, 
                            photos: action.payload.photos, 
                            isLoaded: true 
                        }
                    }
                    : _state
            ),
            [fetchPhotosFailure]: (_state, action) => (
                action.payload.name === name ? { 
                    ..._state, 
                        [action.payload.sol]: { 
                            isLoading: false, 
                            error: action.payload.error, 
                            isLoaded: true 
                        }
                    }
                    : _state
            )
        },
        {}
    );
    return row;
}, {});


const sol = handleActions(
    {
        [changeSol]: (state, action) => (
            { ...state, current: action.payload }
        )
    },
    {
        current: currentValue,
        min: minValue,
        max: maxValue
    }
);

const photos = combineReducers(photosReducer);

export default combineReducers({
    photos,
    sol,
});
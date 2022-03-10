import Reciept from './actions/Reciept';

const initialstate={
    Reciepts: null
}

const recieptsReducer = (state=initialstate,action) => {
    switch(action.type) {
        case 'Reciept':
            return state
        default:
            return state 
    }
};

export default recieptsReducer;
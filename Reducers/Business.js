import Business from './actions/Business';

const initialstate={
    Business: null
}

const businessReducer = (state=initialstate,action) => {
    switch (action.type) {
        case 'Business' :
            return state 
        default:
            return state
                                            
    }
};

export default businessReducer;
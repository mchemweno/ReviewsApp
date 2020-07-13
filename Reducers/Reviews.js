import Reviews from './actions/Reviews';

const initialstate={
   Reviews: null
}

const reviewReducer = (state=initialstate,action) => {
    switch (action.type) {
        case 'Review' :
            return state                           
    }
};

export default reviewReducer;
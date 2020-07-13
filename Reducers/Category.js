import Category from './actions/Category';

const initialstate={
   Category: null
}

const categoryReducer = (state=initialstate,action) => {
    switch (action.type) {
        case 'Category' :
            return state    
        default:
            return []                       
    }
};

export default categoryReducer;
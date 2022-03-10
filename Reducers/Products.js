import Products from './actions/Products';

const initialstate={
   Products: null
}
const productsReducer = (state=initialstate,action) => {
    switch (action.type) {
        case 'Products' :
            return state  
        default:
            return state                              
    }
};

export default productsReducer;
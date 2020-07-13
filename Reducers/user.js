import User from './actions/User';

const initialstate={
   User: null
}

const userReducer = (state=initialstate,action) => {
    switch (action.type) {
        case 'User' :
            return state                           
    }
};

export default userReducer;
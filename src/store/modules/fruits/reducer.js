const initialState = ["Banana", "Maçã", "Morango"];

const fruitsReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        default:
            return state;
    }
}

export default fruitsReducer;


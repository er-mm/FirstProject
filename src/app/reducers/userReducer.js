const userReducer = (state = {
	name : "MM",
	age : 22
}, action) => {
	switch (action.type){
		case "NAME":
		//state.result = state.result + action.payload;
		state = {
			...state,
			name : action.payload
		};
		//its also immmutablestate.lastValues.push(action.payload);
		break;
		case "AGE":
		//state = state - action.payload;
		//immutable way or using state
		state = {
			...state,
			age : action.payload
		};
		break;
	}
	return state;
};

export default userReducer
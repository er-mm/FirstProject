//creating reducer with taking actions
 const mathReducer = (state = {
	result : 1,
	lastValues : []
}, action) => {
	switch (action.type){
		case "ADD":
		//state.result = state.result + action.payload;
		state = {
			...state,
			result : state.result + action.payload,
			lastValues:[...state.lastValues,action.payload]
		};
		//its also immmutablestate.lastValues.push(action.payload);
		break;
		case "SUBTRACT":
		//state = state - action.payload;
		//immutable way or using state
		state = {
			...state,
			result : state.result - action.payload,
			lastValues:[...state.lastValues,action.payload]
		};
		break;
	}
	return state;
};

export default mathReducer;
import store from "./store";

//dispatching actions
store.dispatch({
	type:"ADD",
	payload:10
});
store.dispatch({
	type:"ADD",
	payload:20
});
store.dispatch({
	type:"SUBTRACT",
	payload:10
});
store.dispatch({
	type:"NAME",
	payload:"MAYANK"
});
store.dispatch({
	type:"AGE",
	payload:25
});

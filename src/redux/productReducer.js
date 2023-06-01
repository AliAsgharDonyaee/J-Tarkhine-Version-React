import { FETCH_REQUEST, FETCH_FAILURE, FETCH_SUCCESS } from "./productTypes";

const initialstate = {
	loading: false,
	datasMainFood: [],
	datasSecondaryFoods: [],
	datasSan: [],
	datasPiz: [],
	error: "",
	products: [],
};

const reducer = (state = initialstate, action) => {
	switch (action.type) {
		case FETCH_REQUEST:
			return {
				loading: true,
				data: [],
				error: "",
			};
		case FETCH_SUCCESS:
			return {
				loading: false,
				data: action.payload,
				error: "",
			};
		case FETCH_FAILURE:
			return {
				loading: false,
				data: [],
				error: action.payload,
			};
		default:
			return state;
			break;
	}
};
export default reducer;

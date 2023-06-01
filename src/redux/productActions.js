import { FETCH_FAILURE, FETCH_REQUEST, FETCH_SUCCESS } from "./productTypes";

export function fetchRequest() {
	return {
		type: FETCH_REQUEST,
	};
}
export function fetchFailure(error) {
	return {
		type: FETCH_FAILURE,
		payload: error,
	};
}
export function fetchSuccess(payload) {
	return {
		type: FETCH_SUCCESS,
		payload,
	};
}

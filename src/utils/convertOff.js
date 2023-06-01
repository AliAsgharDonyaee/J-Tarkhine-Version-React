import foramtNumber from "./formatNumber";

export default function convertOff(price, off) {
	let x = (price * off) / 100;
	let y = price - x;
	return `${foramtNumber(price)} تومان`
}

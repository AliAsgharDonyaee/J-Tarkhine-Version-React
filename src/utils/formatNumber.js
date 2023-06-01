export default function foramtNumber(price) {
	return new Intl.NumberFormat("fa-IR").format(price);
}

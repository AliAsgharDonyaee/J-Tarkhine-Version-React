import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export const ColorButton = styled(Button)(({ theme }) => ({
	width: "100%",
	height: "100%",
	color: "#fff",
	backgroundColor: "#417F56",
	"&:hover": {
		backgroundColor: "#417F56",
	},
	fontWeight: 700,
}));

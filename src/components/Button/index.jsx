import { ColorButton } from "./styles";

export const Button = ({ text, color }) => {
    return(
        <ColorButton color={color}>{text}</ColorButton>
    );
}
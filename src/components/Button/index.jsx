import { ColorButton } from "./styles";

export const Button = ({ text, color , action}) => {
    return(
        <ColorButton onClick={action} color={color}>{text}</ColorButton>
    );
}
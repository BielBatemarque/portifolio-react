import { ColorButton } from "./styles";

export const Button = ({ text, color , link}) => {

    const handleTransfer = (url) => {
        window.open(url, '_blank');
    }

    return(
        <ColorButton onClick={() => handleTransfer(link)} color={color}>{text}</ColorButton>
    );
}
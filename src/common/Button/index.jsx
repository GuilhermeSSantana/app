import { Button } from "./styled";

export default function ComponentButton({ onClick, text, icon, disabled, type, style }) {
    return (
        <Button type={type || 'button'} onClick={onClick} disabled={disabled} style={style}>
            {text || ""}
            {icon || ""}
        </Button>
    );
}

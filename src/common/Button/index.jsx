import { Button } from "./styled";

export default function ComponentButton({ onClick, text, icon, disabled, type }) {
    return (
        <Button type={type || 'button'} onClick={onClick} disabled={disabled}>
            {text || ""}
            {icon || ""}
        </Button>
    );
}

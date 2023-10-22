import { InputMask } from "./styled";

export default function Input({ type, onChange, mask, placeholder, value, required  }
) {
    return (
        <InputMask
            type={type}
            onChange={onChange}
            mask={mask}
            placeholder={placeholder}
            value={value}
            required={required}
        />
    );
}
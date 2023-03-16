import Image from "next/image";

export function InputText({
    className,
    inputType,
    inputValue,
    vModel,
    placeholder,
    style,
    variant,
    icon
}) {
    const handleChange = (e) => {
        vModel(e.target.value);
    };

    return (
        <div
            className={`${className} ${variant ? "bz-input-border" : ""} bz-flex`}
            style={style}
        >
            {icon && (
                <div className="bz-pl-2 bz-pr-3 bz-py-2">
                    <Image
                        src={`/icons/${icon}.svg`}
                        width={15}
                        height={15}
                        alt={icon}
                    />
                    </div>
            )}
            <input
                type={inputType ? `${inputType}` : "text"}
                value={inputValue}
                onChange={(e) => handleChange(e)}
                placeholder={placeholder}
                style={{ width: "100%" }}
            />
        </div>
    );
}

export default function BzInput() {
    return <>{InputText}</>;
}

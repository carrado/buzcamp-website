import Image from "next/image";
import { useState } from "react";
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Select from "react-select";
import InputValidator from "../services/validationSchema";

export function InputText({
    className,
    inputType,
    inputValue,
    vModel,
    placeholder,
    style,
    variant,
    icon,
    id,
}) {
    const [errorMessage, setErrorMessage] = useState('');
    const [type, setInputType] = useState(inputType);
    const [error, setError] = useState(false);
    const [openPassword, setOpenPassword] = useState(false);

    const handleChange = (e) => {
        vModel(e.target.value);
        setError(false);
        setErrorMessage('');
        e.currentTarget.parentElement.style.border = null;
    };

    const validateInput = (e, type, value, ref) => {
        const response = InputValidator(type, value, ref);
        if (response.error) {
            setErrorMessage(response.message);
            setError(true);
            e.currentTarget.parentElement.style.border = '1px solid #EA3C53';
        }
    };

    const togglePassword = (state) => {
        setOpenPassword(state);
        state ? setInputType(false) : setInputType('password')
    }

    return (
        <>
            <div
                className={`${className} ${variant ? "bz-input-border" : ""} bz-flex`}
                style={style}
                id={id}
            >
                {icon && (
                    <div className="bz-pl-2 bz-pr-3 bz-py-2">
                        <Image src={`/icons/${icon}.svg`} width={15} height={15} alt={icon} />
                    </div>
                )}
                <input
                    type={type ? `${type}` : "text"}
                    value={inputValue}
                    name={id}
                    onChange={(e) => handleChange(e)}
                    placeholder={placeholder}
                    style={{ width: "100%", backgroundColor: 'transparent' }}
                    onBlur={(e) => validateInput(e, inputType, inputValue, id)}
                    autoComplete="off"
                    required
                />
                {(inputType === 'password') ?
                    (openPassword ? (
                        <div className="bz-pl-2 bz-pr-3 bz-py-2 bz-cursor-pointer" onClick={() => togglePassword(false)}>
                            <Image src={`/icons/eye-open.svg`} width={15} height={15} alt={'eye-open'} />
                        </div>
                    )
                        :
                        (
                            <div className="bz-pl-2 bz-pr-3 bz-py-2 bz-cursor-pointer" onClick={() => togglePassword(true)}>
                                <Image src={`/icons/eye-closed.svg`} width={15} height={15} alt={'eye-closed'} />
                            </div>
                        )
                    )
                    :
                    <></>
                }
            </div>
            {(errorMessage !== '') ? (
                <span className="bz-text-desire bz-text-xs bz-px-3 bz-font-semibold bz--mt-4 bz-flex bz-w-full bz-capitalize">
                    {errorMessage}
                </span>
            )
                :
                <></>
            }
        </>
    );
}



export function InputSelect({ options, className, variant, placeholder, vModel, inputValue, id }) {
    const [errorMessage, setErrorMessage] = useState('');

    const validateInput = (e, type, value, ref) => {
        const response = InputValidator(type, value, ref);
        if (response.error) {
            setErrorMessage(response.message);
            e.currentTarget.parentElement.parentElement.parentElement.parentElement.parentElement.
                style.border = '1px solid #EA3C53';
        }
    };

    const selectStyles = {
        control: styles => ({ ...styles, border: '0px', boxShadow: 'none' })
    };

    const selectChange = (e, id) => {
        if (e) {
            vModel(e.value);
            setErrorMessage('');
            document.getElementById(`${id}`).parentElement.style.border = null;
        }
        else {
            vModel('')
        }
    }

    return (
        <>
            <div
                className={`${className} ${variant ? "bz-input-border" : ""} bz-flex`}
            >
                <Select name={id} id={id} options={options} defaultValue={inputValue} className={'bz-w-full'} isClearable={true} isSearchable={true}
                    styles={selectStyles}
                    placeholder={placeholder}
                    onChange={(e) => selectChange(e, id)}
                    onBlur={(e) => validateInput(e, 'select', inputValue, id)}
                    required
                />
            </div>
            {(errorMessage !== '') ? (
                <span className="bz-text-desire bz-text-xs bz-px-3 bz-font-semibold bz--mt-4 bz-flex bz-w-full bz-capitalize">
                    {errorMessage}
                </span>
            )
                :
                <></>
            }
        </>
    );
}



export function DateSelect({ className, vModel }) {
    const [value, setValue] = useState('');

    const currentYear = new Date().getFullYear();

    const getSelected = (value) => {
        setValue(value);

        const getYear = dayjs(value).get('year');
        const getMonth = dayjs(value).get('month') + 1;
        const getDate = dayjs(value).get('date');

        vModel(`${getDate}-${getMonth}-${getYear}`);
    }

    return (
        <div
            className={`${className} bz-flex`}
            style={{zIndex : 0}}
        >
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    label='Date of Birth'
                    maxDate={dayjs(`12-31-${currentYear}`).subtract(17, "years")}
                    showDisabledMonthNavigation
                    value={value}
                    onChange={(newValue) => getSelected(newValue)}
                    required
                />
            </LocalizationProvider>
        </div>
    )
}



export function InputRadio({ className, variant, icon, options, vModel, inputValue }) {
    const handleRadio = (e) => {
        vModel(e.currentTarget.value);
    }
    return (
        <div
            className={`${className} ${variant ? "bz-input-border" : ""} bz-flex`}
        >
            {icon && (
                <div className="bz-px-3 bz-pt-5">
                    <Image src={`/icons/${icon}.svg`} width={15} height={15} alt={icon} />
                </div>
            )}
            {options.map((option, index) => (
                <p key={index} className='bz-mt-4 bz-mx-4'>
                    <input type="radio" id={option.name} value={option.name} name="radio-group" checked={option.name === inputValue} onChange={(e) => handleRadio(e)} />
                    <label htmlFor={option.name}>{option.label}</label>
                </p>
            ))}
        </div>
    )
}

export function CheckBox({ label, className, checked, vModel }) {
    const checkedValue = () => {
        vModel(!checked);
    }

    return (
        <div className={`${className} checkbox-wrapper`}>
            <label className="bz-flex">
                <input type="checkbox" className="bz-mr-5" checked={checked} onClick={() => checkedValue()} />
                <span className="bz--mt-1 bz-text-grayScale">{label}</span>
            </label>
        </div>
    );  
};

export function Button({ className, inputValue, disabled }) {
    return (
        <div
            className={`${className} bz-flex bz-justify-center`}
            style={{ opacity: disabled ? '0.3' : '1', cursor: disabled ? 'wait' : 'pointer' }}
        >
            <button type="submit" style={{width : '100%'}} disabled={disabled}>{inputValue}</button>
        </div>
    )
}


export default function BzForm({ children, onSubmit }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(true)
    }
    return (
        <>
            <form className="bz-w-full" onSubmit={(e) => handleSubmit(e)}>
                {children}
            </form>
        </>
    );
}

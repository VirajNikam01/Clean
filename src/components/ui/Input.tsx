import { FieldErrors, Path, UseFormRegister } from "react-hook-form"
import { FormValues } from "../Form"
import { HTMLInputTypeAttribute } from "react";


type TInputProps = {
    label: Path<FormValues>;
    type: HTMLInputTypeAttribute
    register: UseFormRegister<FormValues>;
    errors: FieldErrors<FormValues>
};

const Input = (({ label, type, register, errors }: TInputProps) => {

    return (
        <div className="input-field relative text-red-50 my-4 ">
            <label htmlFor={label} className="absolute select-none -top-3 left-4 bg-[#242424] z-10 px-2 font-semibold">{label.toLocaleUpperCase()}</label>
            <input {...register(label, {
                required: `${label} are mandatory`
            })} type={type} id={label} className=" border-2 relative text-red-50 border-white rounded-lg p-3 font-semibold w-80 bg-transparent sm:w-96 outline-none focus:border-green-600 focus:border-1 duration-200" />
            {errors[label] && <div className="h-10 overflow-hidden"><p className={`font-normal text-red-600`}>{errors[label].message}</p></div>}
        </div>
    )
})

export default Input

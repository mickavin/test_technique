import { useState } from "react"

export const LabelizeInput = ({inputStyle, name, defaultValue, register, dirtyFields, errors, required}) => {
    const [isFocus, setFocus] = useState(false)
    console.log(dirtyFields?.[name], isFocus, {...(dirtyFields?.[name] || isFocus ? inputStyle.labelFloatingNotEmpty : {})})
    return (
        <div 
        id={`${name}-id`}
        className={`form-group`} style={inputStyle.inputContainer}>
            <label style={{...(dirtyFields?.[name] || isFocus ? inputStyle.labelFloatingNotEmpty : inputStyle.controlLabel)}}>{name}</label>
            <input 
            onFocus={(e) => {
                setFocus(true)
            }}
            onBlur={(e) => {
                if(typeof document != 'undefined' && !dirtyFields?.[name]){
                    setFocus(true)
                }
            }}
            type={name == "mot de passe" ? "password" : "text"}
            style={{...inputStyle.formControl, ...inputStyle.form_control}} 
            defaultValue={defaultValue} 
            {...register(name, {required: required})}/>
            {errors?.[name] && <span style={{fontSize: 14, color: "red" }}>Le champ {name} est obligatoire</span>}
        </div>
    )
}
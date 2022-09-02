export const LabelizeInput = ({inputStyle, name, defaultValue, register, dirtyFields, errors, required, value, onChange}) => {
    return (
        <div 
        id={`${name}-id`}
        className={`form-group label-floating ${dirtyFields?.[name] ? "" : "is-empty"}`} style={inputStyle.inputContainer}>
            <label className="control-label">{name}</label>
            <input 
            onFocus={(e) => {
                if(typeof document != 'undefined'){
                    document.getElementById(`${name}-id`).classList.remove('is-empty')
                }
            }}
            onBlur={(e) => {
                if(typeof document != 'undefined' && !dirtyFields?.[name]){
                    document.getElementById(`${name}-id`).classList.add('is-empty')
                }
            }}
            type={name == "mot de passe" ? "password" : "text"}
            style={inputStyle.formControl} 
            defaultValue={defaultValue} 
            {...register(name, {required: required})}/>
            {errors?.[name] && <span style={{fontSize: 14, color: "red" }}>Le champ {name} est obligatoire</span>}
        </div>
    )
}
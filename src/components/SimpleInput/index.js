export default ({onChangeText, styles, placeholder, value}) => {
    return (
        <input 
        placeholder={placeholder}
        type={"text"}
        style={styles} 
        value={value}
        onChange={(e) => onChangeText(e.target.value)}/>
    )
}
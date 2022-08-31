export default ({onChangeText, styles, value, data}) => {
    return (
        <select 
        type={"text"}
        style={styles} 
        value={value}
        onChange={(e) => onChangeText(e.target.value)}>
        <option value="">Ranger par</option>
        {
            data.map(i => 
                <option key={i?.key} value={i?.key}>{i?.value}</option>
            )
        }
        </select>
    )
}
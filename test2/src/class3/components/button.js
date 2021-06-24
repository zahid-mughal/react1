function Button(props){
    return(
        <div>
            <button style={{color:props.color},{background:props.background}}>{props.title}</button>
        </div>
    )
}
export default Button; 
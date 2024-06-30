const Button = (props) => {

    const handleClick = (e) => {
        e.preventDefault()
        const delta = e.target.dataset.delta
        const deltaNumber = parseInt(delta)

        props.changeCount(deltaNumber)
    }

    return (
        <button onClick={handleClick} data-delta={props.delta}> 
            {props.text}
        </button>
    )
}

export default Button;
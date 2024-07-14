const Person = (props) => {
    return (
        <div>
            {props.person.name} {props.person.number} <button onClick={props.handleDelete}>delete</button>
        </div>
    )
}
// (id: {props.person.id}) 

export default Person
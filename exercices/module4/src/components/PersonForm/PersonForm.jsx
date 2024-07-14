import { useState } from "react"

const PersonForm = ({ addedPerson }) => {
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addedPerson({ name: newName, number: newNumber })
        setNewName("")
        setNewNumber("")
    }
    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }


    return (
        <form onSubmit={handleSubmit}>
            <div> name: <input value={newName} onChange={handleNameChange} /></div>
            <div> number: <input value={newNumber} onChange={handleNumberChange} /></div>
            <div>
                <button type="submit" >add</button>
            </div>
        </form>
    )
}

export default PersonForm
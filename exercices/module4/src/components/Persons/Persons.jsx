import Person from "components/Person/Person"

const Persons = ({ persons, filter, handleDelete }) => {
    const filteredPersons = persons.filter(person => person.name.toLowerCase().includes(filter.toLowerCase()))
    // const filteredPersons = filter ? persons.filter(person => person.name.toLowerCase().includes(filter.toLocaleLowerCase())) : persons;

    return (
        <div>
            {filteredPersons.map(person => 
            <div key={person.id}>
                <Person person={person} handleDelete={() => handleDelete(person.id)}/>  

            </div>)}
        </div>
    )
}

export default Persons
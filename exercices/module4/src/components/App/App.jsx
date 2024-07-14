import { useEffect, useState } from 'react'
import Filter from 'components/Filter/Filter'
import PersonForm from 'components/PersonForm/PersonForm'
import Persons from 'components/Persons/Persons'
import PersonsAPI from 'services/Person'


const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    PersonsAPI.getAll().then(person => {
      setPersons(person)
    })
  }, [])


  const addedOrUpdatedPerson = ({ name, number }) => {
    const existingPerson = persons.find(person => person.name === name)
    if (existingPerson) {

      const windowConfirm = window.confirm(`${name} is already added to phonebook, replace the old number with a new one?`)
      if (windowConfirm) {
        PersonsAPI.update(existingPerson.id, { ...existingPerson, number }).then(p => {
          setPersons(persons.map(person => person.id !== p.id ? person : p))
        })
      }

    } else {
      const id = persons.length + 1
      const person = {
        name,
        number,
        id: id.toString()
      }

      PersonsAPI.create(person).then(p => {
        setPersons(persons.concat(p))
      })
    }

  }

  const deletedPerson = (id) => {
    const personById = persons.find(person => person.id === id)
    if (!window.confirm(`Delete ${personById.name} ?`)) {
      return
    }

    PersonsAPI.remove(id).then(() => {
      setPersons(persons.filter(person => person.id !== id))
    })
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <h3>Add a new</h3>
      <PersonForm addedPerson={addedOrUpdatedPerson} />
      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} handleDelete={deletedPerson} />
    </div>
  )
}

export default App
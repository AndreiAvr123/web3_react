import { useContext, useState} from "react"
import { Context as SortedOpinionsContext } from "contexts/sortedOpinions"

const Form = () => {
    const { addOpinion } = useContext(SortedOpinionsContext)
    const [newTextOpinion, setNewTextOpinion] = useState('')

    const handleNewTextOpinion = (e) => {
        setNewTextOpinion(e.target.value)
    } 

    const handleSubmit = (e) => {
        e.preventDefault()
        addOpinion(newTextOpinion)
        setNewTextOpinion("")
    }


    return (
        <form onSubmit={handleSubmit}>
            <input value={newTextOpinion} onChange={handleNewTextOpinion} />
            <button type="submit">Add Opinion</button>
        </form>
    )
}

export default Form
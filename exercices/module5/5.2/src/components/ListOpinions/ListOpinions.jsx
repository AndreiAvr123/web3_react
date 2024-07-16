import { useContext } from "react"
import Opinion from "components/Opinion/Opinion"
import { Context as SortedOpinionsContext } from "contexts/sortedOpinions"

const ListOpinions = () => {
    const { sortedOpinions } = useContext(SortedOpinionsContext)

    return (
        <div>
            {sortedOpinions().map((op) => (
                <Opinion key={op.id}  opinion={op} />
            ))}
           
        </div>
    )
}

export default ListOpinions
    
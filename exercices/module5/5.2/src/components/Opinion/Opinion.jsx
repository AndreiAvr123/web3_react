import { useContext } from "react";
import { Context as SortedOpinionsContext } from "contexts/sortedOpinions";

const Opinion = ({ opinion }) => {
    const { increaseScore } = useContext(SortedOpinionsContext);

    return (
        <div>
        <p>{opinion.text} : {opinion.score} <button onClick={() => increaseScore(opinion.id)}> Vote </button> </p> 
        </div>
    );
};  

export default Opinion;
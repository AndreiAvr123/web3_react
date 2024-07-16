import React, { useState } from "react";
import { v4 as uuid } from "uuid";

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

    const [opinions, setOpinions] = useState([
        {
            id: uuid(),
            text: "Opinion A",
            score: 1,
        },

        {
            id: uuid(),
            text: "Opinion B",
            score: 1,
        },

        {
            id: uuid(),
            text: "Opinion C",
            score: 1,
        },
    ]);

    const sortedOpinions = () => opinions.sort((a, b) => b.score - a.score);

    const increaseScore = (id) => {
        setOpinions(
            sortedOpinions().map((opinion) => {
                if (opinion.id === id) {
                    return {
                        ...opinion,
                        score: opinion.score + 1,
                    };
                }
                return opinion;
            })
        );

    }

    const addOpinion = (text) => {
        setOpinions([
            ...sortedOpinions(),
            {
                id: uuid(),
                text,
                score: 1,
            }
        ]);
    }


    const exposedValue = {
        sortedOpinions,
        increaseScore,
        addOpinion,
    }

    return (
        <Context.Provider value={exposedValue}>
            {props.children}
        </Context.Provider>
    )
}

export { ProviderWrapper, Context };
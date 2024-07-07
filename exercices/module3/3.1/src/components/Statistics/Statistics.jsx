import StatisticLine from "components/Statistics/StatisticLine";

const Statistics = ({ good, neutral, bad }) => {
    const all = good + neutral + bad;
    const average = all !== 0 ? (good - bad) / all : 0;
    const positive = all !== 0 ? (good / all) * 100 : 0;
    if (all === 0) {
        return <div>No feedback given</div>;
    }

    return (
        <table>
            <tbody>
                <StatisticLine text={"good"} value={good} />
                <StatisticLine text={"neutral"} value={neutral} />
                <StatisticLine text={"bad"} value={bad} />
                <StatisticLine text={"all"} value={all} />
                <StatisticLine text={"average"} value={average.toFixed(1)} />
                <StatisticLine text={"positive"} value={positive.toFixed(1)} />
            </tbody>
        </table>
        );
};

export default Statistics;
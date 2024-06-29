import Part from "../Part/Part";

const Content = ({
    part1, exercise1,
    part2, exercise2,
    part3, exercise3 }) => {
    return (
        <div>
            <Part name={part1} exercises={exercise1} />
            <Part name={part2} exercises={exercise2} />
            <Part name={part3} exercises={exercise3} />
        </div>
    );
}
export default Content;
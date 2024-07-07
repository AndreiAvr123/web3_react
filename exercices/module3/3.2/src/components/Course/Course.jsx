import Header from "components/Course/Header/Header"
import Content from "components/Course/Content/Content"
import Total from "components/Course/Total/Total"

const Course = ({ course }) => {
    const { name , parts } = course;

    return (
        <div>
        <Header title={name} />
        <Content parts={parts} />
        <Total total={parts} />
        </div>
    )
    }


export default Course
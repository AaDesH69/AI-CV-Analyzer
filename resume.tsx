import {useParams} from "react-router";

const Resume = () => {
    const {id} = use params();

    return (
        <div>Resume {id}</div>
    )
}
export default Resume
import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";

function CreateStudent() {
    const [arr, setArr] = useState([]);
    const getState = (out) => {
        setArr(out);
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = {name:arr[0], email:arr[1], rollNo:arr[2]};
        Axios.post("https://crud-deployment1-6r39.onrender.com/students/createStudent", data)
        .then((res)=>{
            if (res.status===200) {
                alert("Record added successfully");
            }
            else {
                Promise.reject();
            }
        })
        .catch((err)=>alert(err));
        event.target.reset();
    }
    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}  nameValue="" emailValue="" rollNoValue="">Create Student</StudentForm>
        </form>
    )
}

export default CreateStudent;
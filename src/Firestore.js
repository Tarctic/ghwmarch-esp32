import db from './Firebase';
import {useState} from 'react';

const Firestore = () => {
	const [name , Setname] = useState("");
	const [age , Setage] = useState("");
	const [course , Setcourse] = useState("");
	const sub = (e) => {
		e.preventDefault();
		
		// Add data to the store
		db.collection("data").add({
			Nane: name,
			Age: age,
			CourseEnrolled: course
		})
		.then((docRef) => {
			alert("Data Successfully Submitted");
		})
		.catch((error) => {
			console.error("Error adding document: ", error);
		})
	}

	return (
		<div>
			<center>
				<form style={{marginTop:"200px" }}
				onSubmit={(event) => {sub(event)}}>
					<input type="text" placeholder="Actuator Type"
					onChange={(e)=>{Setname(e.target.value)}} />
					<br/><br/>
					<input type="number" placeholder="Actuator value"
					onChange={(e)=>{Setage(e.target.value)}}/>
					<br/><br/>
					<input type="text" placeholder="Task"
					onChange={(e)=>{Setcourse(e.target.value)}}/>
					<br/><br/>
					<button type="submit">Submit</button>
				</form>
			</center>
		</div>
	);
}

export default Firestore;
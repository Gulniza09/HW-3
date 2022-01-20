import { useState } from 'react'
import './ProjectForm.css'

const ProjectForm = () => {
	const [userInput, setUserInput] = useState({
		title: '',
		amount: '',
		date: '',
	})

	const titleChangeHandler = (event) => {
		// setTitle(event.target.value)
		setUserInput((prevState) => {
			return {
				...prevState,
				title: event.target.value,
			}
		})
	}
	const amountChangeHandler = (event) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				amount: event.target.value,
			}
		})
	}
	const dateChangeHandler = (event) => {
		setUserInput((prevState) => {
			return {
				...prevState,
				title: event.target.value,
			}
		})
	}

	const submitHandler = (event) => {
		event.preventDefault()
		console.log(userInput)
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='project-user-info'>
				<div className='user-info'>
					<label>Username</label>
					<input
						name='title'
						type='text'
						onChange={titleChangeHandler}
						placeholder='Name'
					/>
				</div>
				<div className='user-info'>
					<label>Email</label>
					<input
						name='amount'
						type='email'
						placeholder='Email'
						min='0.1'
						step='1'
						onChange={amountChangeHandler}
					/>
				</div>
				<div className='user-info'>
					<label>Password</label>
					<input
						name='date'
						type='password'
						placeholder='Password'
						min='2022-01-01'
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className='project-actions'>
				<button>Add Project</button>
			</div>
		</form>
	)
}
export default ProjectForm

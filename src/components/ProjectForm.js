import { useState } from 'react'
import './ProjectForm.css'

const ProjectForm = () => {
	const [title, setTitle] = useState('')
	const [amount, setAmount] = useState('')
	const [date, setDate] = useState('')

	const inputChangeHandler = (event) => {
		const currentInput = event.target.name
		if (currentInput === 'title') {
			setTitle(event.target.value)
		} else if (currentInput === 'amount') {
			setAmount(event.target.value)
		} else if (currentInput === 'date') {
			setDate(event.target.value)
		}
	}

	
	const submitHandler = (event) => {
		event.preventDefault()
		console.log(title)
		console.log(amount)
		console.log(date)
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='project-user-info'>
				<div className='user-info'>
					<label>Username</label>
					<input
						name='title'
						type='text'
						onChange={inputChangeHandler}
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
						onChange={inputChangeHandler}
					/>
				</div>
				<div className='user-info'>
					<label>Password</label>
					<input
						name='date'
						type='password'
						placeholder='Password'
						min='2022-01-01'
						onChange={inputChangeHandler}
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

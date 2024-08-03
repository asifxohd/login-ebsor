import React, { useState } from 'react'
import axios from 'axios'


const Login = () => {
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')

	const handleLogin = async (e) => {
		e.preventDefault()

		const url = "http://13.36.34.213/ENCORE/Users/IsValidLogins/"
		const data = {
			"UserID": username,
			"Password": password,
			"DeviceUniqueID": "mydevice"
		}

		console.log(data);

		const config = {
			headers: {
				'Accept': 'application/json',
				'content-type': 'application/json',
				'HDR_keyValue': '3NO^6@nD!#1Z-.C',
				'HDR_keyCode': '9999',
				'SMAN_CODE': "123"
			},
		};
		console.log(config);

		try {
			const response = await axios.post(url, data, config);
			console.log(response.data);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<>
			<div className='h-screen bg-gray-200'>
				<div className=' h-screen flex flex-col justify-center items-center'>
					<div className='p-10 w-96 bg-gray-50'>
						<h2 className='text-2xl mb-4 font-mono text-center text-blue-500'><b>EBSOR INFOSYSTEMS</b></h2>
						<form onSubmit={handleLogin} className=' flex flex-col'>

							<label className='text-base mb-2' >username</label>
							<input className='py-2 px-4 bg-gray-300 rounded-md mb-2' onChange={(e) => setUsername(e.target.value)} type="text" />

							<label className='text-base mb-2'>password</label>
							<input className='py-2 px-4 bg-gray-300 rounded-md' onChange={(e) => setPassword(e.target.value)} type="password" />
							<button type='submit' className='bg-gray-950 text-white px-10 mt-5 py-2 rounded  '>
								login
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default Login
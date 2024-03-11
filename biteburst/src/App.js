import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './routes/Home/Home'
import Navigation from './routes/navigation/Navigation'
import PageNotFound from './routes/pageNotFound/PageNotFound'
import Layout from './components/layout/Layout'
import AboutUs from './routes/AboutUs/AboutUs'

import Login from './routes/Login/Login'
import Register from './routes/Register/Register'
import { useState } from 'react'
import Dashboard from './routes/Dashboard/Dashboard'
import ManageCategory from './routes/Category/ManageCategory'
import CreateMenuItem from './components/CreateMenuItem'
import ManageMenuItem from './routes/manageMenuItem/ManageMenuItem'
import ManageExtraPrice from './routes/MangeExtraPrice/ManageExtraPrice'
import AllMenuItems from './routes/allMenuItems/AllMenuItems'
import EditMenuItem from './components/EditMenuItem'
import Users from './components/Users'
import Menu from './routes/Menu/Menu'

function App() {
	const [loading, setloading] = useState(false)

	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Layout element={<Home />} />} />
				<Route
					path="/Login"
					element={
						<Layout
							loading={loading}
							setloading={setloading}
							element={
								<Login
									loading={loading}
									setloading={setloading}
								/>
							}
						/>
					}
				/>
				<Route
					path="/SignUp"
					element={<Layout element={<Register />} />}
				/>
				<Route
					path="/aboutUs"
					element={<Layout element={<AboutUs />} />}
				/>
				<Route
					path="/adminDashboard"
					element={<Layout element={<Dashboard />} />}
				/>
				<Route
					path="/manageUsers"
					element={<Layout element={<Users />} />}
				/>
				<Route
					path="/manageCategory"
					element={<Layout element={<ManageCategory />} />}
				/>
				<Route
					path="/menu"
					element={<Layout element={<Menu />} />}
				/>
				<Route
					path="/createMenuitem"
					element={<Layout element={<CreateMenuItem />} />}
				/>
				<Route
					path="/editMenuitem/:id"
					element={<Layout element={<EditMenuItem />} />}
				/>
				<Route
					path="/manageMenuitem"
					element={<Layout element={<ManageMenuItem />} />}
				/>
				<Route
					path="/ManageExtraPrice"
					element={<Layout element={<ManageExtraPrice/> } />}
				/>
				<Route
					path="/AllMenuItems"
					element={<Layout element={<AllMenuItems/> } />}
				/>

				<Route
					path="*"
					element={<Layout element={<PageNotFound />} />}
				/>
			</Routes>
		</div>
	)
}

export default App

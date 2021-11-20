import { Menu } from 'antd';
import { Link } from 'react-router-dom';

export const Header = () => {
	return (
		<Menu mode="horizontal">
			<Menu.Item key="home">
				<Link to="/">Home</Link>
			</Menu.Item>
			<Menu.Item key="form">
				<Link to="/form">Form</Link>
			</Menu.Item>
		</Menu>
	)
}
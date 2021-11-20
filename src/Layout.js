import { Header } from "./components/Header.component"

export const Layout = ({children}) => {
	return (
		<div>
			<Header/>
			{children}
		</div>
	)
}
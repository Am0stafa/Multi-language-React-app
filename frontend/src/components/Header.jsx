import { useEffect } from "react";
import { Link } from "react-router-dom";

import { useTranslation } from "react-i18next";
import i18next from "i18next";


const Header = () => {
	const {i18n,t} = useTranslation(["common"])

	//? what this useEffect is going to do is look for languages from the localStorage and look for the length of the language if it id grater than 2 we will set the language to english
	useEffect(() => {
		if(localStorage.getItem("i18nextLng")?.length >2 )
			i18next.changeLanguage("en");
			
		//! to fix bugs if the word is english we want it to be en
	}, []);

	const handleLanguageChange= (e) => {
		//! what is function is doing is using the i18n it changes the language based on the target value
		i18next.changeLanguage(e.target.value);
	}

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<Link className="navbar-brand" to="/">
				{t("title")}
			</Link>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation"
			>
				<span className="navbar-toggler-icon"></span>
			</button>
			<div className="collapse navbar-collapse" id="navbarNav">
				<ul className="navbar-nav ml-auto">
					<li className="nav-item">
						<select
							className="nav-link bg-dark border-0 ml-1 mr-2"
							value={localStorage.getItem("i18nextLng")}
							onChange={handleLanguageChange}
						>
							<option value="en">English</option>
							<option value="fr">Français</option>
							<option value="es">Español</option>
						</select>
					</li>
					<li className="nav-item ml-2">
						<Link className="nav-link" to="/profile">
							{t("profile")}
						</Link>
					</li>
				</ul>
			</div>
		</nav>
  )
}

export default Header
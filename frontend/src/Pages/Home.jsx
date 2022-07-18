//? to use the translation 

import { useTranslation } from 'react-i18next';

const Home = () => {
//! we de structure the t and pass it an array containing the name space we are looking for
const {t} = useTranslation(["home"])
//? to use this t("enter the name of the label you are looking for")
  return (
    <div className="container mt-5">
        <h1 className="text-center">{t("home")}</h1>
    </div>
  )
}

export default Home
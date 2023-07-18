import { FC } from 'react'
import { useTranslation } from "react-i18next"
type Props = {}

const Home: FC = (props: Props) => {
    const [t] = useTranslation("global")
    return (
        <div>{t("home.message")}</div>
    )
}


export default Home
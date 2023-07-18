import { FC } from 'react'
import { useTranslation } from "react-i18next"
type Props = {}

const Header: FC = (props: Props) => {
    const [t] = useTranslation("global")
    return (
        <div>{t("header.message")}</div>
    )
}


export default Header
import './Navigation.css'
import pathGearItem from '../../../../images/icon/icon-gear.svg'
import pathArchiveIcon from '../../../../images/icon/icon-archive.svg'
import pathClockIcon from '../../../../images/icon/icon-clock.svg'
import pathQrCodeIcon from '../../../../images/icon/icon-qr-code.svg'
import pathNotesIcon from '../../../../images/icon/icon-save.svg'
import pathListIcon from '../../../../images/icon/icon-list.svg'
import pathCertificateIcon from '../../../../images/icon/icon-certificate.svg'
import * as api from '../../../../utils/api'
import {useHistory} from 'react-router-dom'
import {persistor} from "../../../../Store/Store";

const Navigation = ({isOpenNavigation, handleShowMenu}) => {
const history = useHistory()
    const handleSignOut = () => {
    persistor.purge()
        api.signOut()
        history.push('/signin')
        document.body.classList.remove('page_lock')
    }
    return(
        <div className={`navigation ${isOpenNavigation ? 'navigation_active': ''}`} onClick={handleShowMenu}>
            <nav className={`navigation_menu ${isOpenNavigation ? 'navigation_menu_active' : ''}`}
                 onClick={event => event.stopPropagation()}>
                <ul className="navigation_menu-list">
                    <li className="navigation_menu-list-item">
                        <img className="navigation_menu-icon-item" src={pathGearItem} alt="Настройки"/>

                    <a className="navigation_menu-link-item"  href="#">Настройки</a></li>
                    <li className="navigation_menu-list-item">
                        <img className="navigation_menu-icon-item" src={pathArchiveIcon} alt="Архив"/>

                        <a className="navigation_menu-link-item"  href="#">Архив</a></li>
                    <li className="navigation_menu-list-item">
                        <img className="navigation_menu-icon-item" src={pathClockIcon} alt="Действия"/>

                        <a className="navigation_menu-link-item"  href="#">Ваши действия</a></li>
                    <li className="navigation_menu-list-item">
                        <img className="navigation_menu-icon-item" src={pathQrCodeIcon} alt="QR-code"/>

                        <a className="navigation_menu-link-item"  href="#">QR-код</a></li>
                    <li className="navigation_menu-list-item">
                        <img className="navigation_menu-icon-item" src={pathNotesIcon} alt="Сохраненные"/>

                        <a className="navigation_menu-link-item"  href="#">Сохраненные</a></li>
                    <li className="navigation_menu-list-item">
                        <img className="navigation_menu-icon-item" src={pathListIcon} alt="Друзья"/>

                        <a className="navigation_menu-link-item"  href="#">Близкие друзья</a></li>
                    <li className="navigation_menu-list-item">
                        <img className="navigation_menu-icon-item" src={pathCertificateIcon} alt="COVID"/>

                        <a className="navigation_menu-link-item"  href="#">Центр информации о COVID-19</a></li>
                    <button className="navigation_button"
                    onClick={handleSignOut}
                    >Выйти из аккаунта</button>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation
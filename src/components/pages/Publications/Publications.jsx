import PublicationsItem from './PublicationsItem/PublicationsItem'
import Header from '../../../common/Header/Header'
import './Publications.css'
import {useSelector} from "react-redux";


const Publications = () => {
    const currentUser = useSelector((state) => state.currentUser.value)
    return(
        <>
        <section className="publications">
            <Header/>
            <ul className="publications_list">
                {currentUser.cards.map((item) =>
                    <PublicationsItem
                        key={item._id}
                        card={item}
                    />
                )}
            </ul>
        </section>
        </>
    )
}

export default Publications
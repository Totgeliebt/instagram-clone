import './Subscribers.css'
import SubscribersItem from "./SubscribersItem/SubscribersItem";
import {useEffect,useState} from 'react'
import * as api from '../../../utils/api'
import Header from '../../../common/Header/Header'
import {useSelector} from "react-redux";

const Subscribers = () => {

    const myUserId = useSelector((state) => state.loggedInUser.value)
    const [otherUsersId, setOtherUsersId] = useState([])
    const [users, setUsers] = useState([])

    const handleGetOtherUsers = async () => {
        const allUsers = await api.getAllUsers()
        setUsers(allUsers)
        setOtherUsersId(Object.keys(allUsers).filter(item => item!==myUserId))
    }
    useEffect(() => {
        handleGetOtherUsers()
    }, [])

    return (
        <>
        <Header/>
       <section className="subscribers">
           <ul className="subscribers_list">
               {
                   otherUsersId.map((id, index)=>
                       <SubscribersItem
                       userData={users[id]}
                       id={id}
                       key={index}/>
                   )
               }
        </ul>
       </section>
        </>
    )
}
export default Subscribers
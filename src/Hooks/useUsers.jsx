import { useEffect, useState } from "react";


const useUsers = () => {
    const [allUser, setAllUser] = useState([]);
    const [loading, setloading] = useState(true);
    useEffect(() =>{
        fetch('https://users-crud-operation-server-side.vercel.app/AllUsers')
        .then(res => res.json())
        .then(data =>{
            setAllUser(data);
            setloading(false)
        })
    }, [])

    return [allUser, loading]
};

export default useUsers;
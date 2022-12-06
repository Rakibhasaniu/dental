import { useEffect, useState } from "react"

const useAdmin = email => {
    const [isAdmin, setAdmin] = useState(false);
    const [isAdminLoding, setLoding] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-site-zeta.vercel.app/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setAdmin(data.isAdmin)
                    setLoding(false)
                })
        }

    }, [email])
    return [isAdmin, isAdminLoding];
}


export default useAdmin;
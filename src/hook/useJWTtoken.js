import { useEffect, useState } from "react"

const useJWTtoken = email => {
    const [token, setToken] = useState('');
    const [lodings, setLoding] = useState(true)
    useEffect(() => {
        if (email) {
            fetch(`https://doctors-portal-server-site-zeta.vercel.app/jwt?email=${email}`)
                .then(res => res.json())
                .then(data => {
                    if (data.accessToken) {
                        localStorage.setItem('accessToken', data.accessToken)
                        setToken(data.accessToken);
                        setLoding(false)
                    }
                })
        }
    }, [email])
    return [token, lodings]
}

export default useJWTtoken;
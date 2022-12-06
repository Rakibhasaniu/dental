import { useEffect } from "react"

const useTitle = (title) => {

    useEffect(() => {
        document.title = `${title} Page`;
    }, [title])

}

export default useTitle;
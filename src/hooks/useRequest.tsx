import { useCallback, useState } from 'react'
 
const useRequest = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const request = useCallback(async (url: string) => {
        setLoading(true)
        try {
            const res = await fetch(url)

            if(!res.ok) {
                setLoading(false)
                setError(true)
                throw new Error('Couldn`t fetch ' + url)
            }

            const data = res.json()
            return data;
        } catch (error) {
            setLoading(false)
            setError(true)
            throw error;
        }
    }, [])

    return {loading, error, request}
}

export default useRequest
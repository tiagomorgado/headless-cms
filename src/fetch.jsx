import { createClient } from 'contentful'
import { useState, useEffect } from 'react';

const client = createClient({
    space: 'q4xa2015toko',
    environment: 'master',
    accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [projects, setProjects] = useState([])

    const getData = async() => {
        try {
            const response = await client.getEntries({content_type: 'projects'})
            const projects = response .items.map((item) => {
                const {title, url, image} = item.fields
                const id = item.sys.id
                const img = image?.fields?.file?.url
                return {title, url, id, img}
            })
            setProjects(projects)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return {isLoading, projects }

}

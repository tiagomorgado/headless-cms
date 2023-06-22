import { createClient } from 'contentful'

const client = createClient({
    space: 'q4xa2015toko',
    environment: 'master',
    /* accessToken: '1n1PiKp7Ygn1sK4yGZDfgfJb0LtBsTar3VS5Ue3p5Fo', */
});

const useFetchProjects = () => {
    const []
}




client.getEntries({content_type: 'projects'}).then((response) => console.log(response))

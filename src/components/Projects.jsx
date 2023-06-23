import { useFetchProjects } from '../fetch'

const Projects = () => {

   const myData = useFetchProjects()
   console.log('myData', myData);
  return (
    <h2>Projects</h2>
  )
}
export default Projects
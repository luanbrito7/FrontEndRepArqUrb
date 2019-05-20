import api from './index'

const projects = {
    getProjects: async () => {
        let { data } = await api.get('/')
        console.log(data)
    }
}


export default projects
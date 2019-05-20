import React, { Component } from 'react'
import projects from '../api/projects'

export default class Home extends Component {

    get = () => {
        console.log('heeey')
        projects.getProjects()
    }
    render() {
        return (
            <div 
             className='box'
             onClick={this.get}>
                <h1>Titulo</h1>
            </div>
        )
    }
}
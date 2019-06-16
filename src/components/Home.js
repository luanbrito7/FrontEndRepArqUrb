import React, { Component } from 'react'
import projects from '../api/projects'
import logo from '../assets/logo.jpg'
export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            navbar: 0
        }
    }

    get = () => {
        console.log('heeey')
        projects.getProjects()
    }

    selectNavItem = (index) => {
        this.setState({
            navbar: index
        })
    }

    render() {
        return (
            <div style={styles.container}>
                <header style={styles.header}>
                    <div style={{ width: '65%', display: 'flex', alignItems: 'flex-start' }}>
                        <img src={logo} alt="logo" style={{ height: 100, width: 150, marginTop: '10px' }} />
                    </div>
                    <div style={styles.navbar}>
                        <a onClick={() => this.selectNavItem(0)} style={{ width: '33%', color: this.state.navbar === 0 ? 'red' : '#fff', backgroundColor: this.state.navbar === 0 ? '#fff' : 'red' }}>
                            Inicio
                        </a>
                        <a onClick={() => this.selectNavItem(1)} style={{ width: '33%', color: this.state.navbar === 1 ? 'red' : '#fff', backgroundColor: this.state.navbar === 1 ? '#fff' : 'red' }}>
                            Projetos
                        </a>
                        <a onClick={() => this.selectNavItem(2)} style={{ width: '33%', color: this.state.navbar === 2 ? 'red' : '#fff', backgroundColor: this.state.navbar === 2 ? '#fff' : 'red' }}>
                            Sobre
                        </a>
                    </div>
                </header>
            </div>
            // <div style={{ width: '100%', flexDirection: 'row', backgroundColor: 'red', justifyContent: 'center', height: '75px' }}>
            //     <div style={{ width: '50%', marginLeft: 0, backgroundColor: '#000' }}>
            //         <img src={logo} alt="logo" style={{ height: 50, width: 50, marginLeft: '100px' }} />
            //     </div>
            //     <div style={{ border: '1px solid black', width: '50%', marginLeft: '50%', height: '50px' }}>
            //         <div style={{textAlign: 'center', backgroundColor: 'yellow'}}>Projetos</div>
            //     </div>
            // </div>
        )
    }
}

const styles = {
    container: { textAlign: 'center', width: '100%', minHeight: '100vh', backgroundColor: '#ffe856' },
    header: { display: 'flex', flexDirection: 'column', alignItems: 'center' },
    navbar: { width: '65%', height: '25px', display: 'flex', flexDirection: 'row', marginTop: '10px' }
}

// const container = {
//         backgroundColor: 'red'
// }
// const title = {
//         fontSize: 16,
//         color: 'pink'
// }
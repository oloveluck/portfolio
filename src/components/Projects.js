import React from 'react';

import Card from '../components/Card';

import logo from '../assets/project-management.png';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0, 
                    title: 'Project 1',
                    subTitle: 'subtitle for project 1',
                    imgSrc: logo, 
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 1, 
                    title: 'Project 2',
                    subTitle: 'subtitle for project 2',
                    imgSrc: logo, 
                    link: 'https://google.com',
                    selected: false
                },
                {
                    id: 2, 
                    title: 'Project 3',
                    subTitle: 'subtitle for project 3',
                    imgSrc: logo, 
                    link: 'https://google.com',
                    selected: false
                }
            ]
        }
    }

    handleCardClick = (id, card) => {
        let items = [...this.state.items];
        items[id].selected = items[id].selected ? false : true;
        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });
        this.setState({
            items
        })
    }

    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key = {item.id}></Card>
        })}
            

    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        )
    }
}

export default Projects;
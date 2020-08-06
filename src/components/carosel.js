import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


import github from '../photos/github.png';
import msword from '../photos/msword.png';
import linkedin from '../photos/linkedin.png';
import Card from './card'

class Carousel extends React.Component{

    constructor(props){
        super(props);
        this.state={
            items: [
                    {
                    id: 0,
                    title: "GitHub",
                    subtitle:"My projects and Repostories",
                    imgsrc: github,
                    link: "https://github.com/Matthew-Brogan/",
                    selected: false
                    },
            
                    {
                        id: 1,
                        title: "My Resume",
                        subtitle: "Functional resume in word.docx",
                        imgsrc: msword,
                        link: "docs/MatthewBrogan.docx",
                        selected: false
                    },
                    {
                        id: 2,
                        title:"My LinkedIn",
                        subtitle: "Add me! Lets connect!",
                        imgsrc: linkedin,
                        link: "https://www.linkedin.com/in/matt-brogan-aba6271a8/",
                        selected: false
                    }
                ]

        }
    }

    handleCardClick = (id,card) => {
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                items.selected = false;
            }
        });
        
        this.setState({
            items
        });

    }
    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }

    render(){
        return(
           <Container  fluid={true}>
               <Row className="b-display-cards justify-content-around">
                   {this.makeItems(this.state.items)}
               </Row>
           </Container>
        );

    }
}



export default Carousel;
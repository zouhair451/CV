import { WorkSection, WorkTitle, Span, WorkPart, Icon, PartTtitle, Line, PartDesc} from './style.js'
import React, { Component } from 'react';
import axios from 'axios';

class Work extends Component {

  state = {
    works : []
  }
  componentDidMount () {
    axios.get("data.json").then( res => { this.setState({works: res.data.works})
  });
    
  }

 

  render(){
    const {works} = this.state;
    const workList = works.map((workItem) => 
      {
        return(
          <WorkPart first={workItem.id} key={workItem.id}>
          <Icon className={workItem.icon_name}></Icon>
          <PartTtitle>{workItem.title}</PartTtitle>
          <Line />
          <PartDesc>
            {workItem.body}
          </PartDesc>
        </WorkPart>
        )
      }
    )
    return (
      
      <WorkSection>
        
          <div className="container">
              <WorkTitle><Span>My</Span> Work</WorkTitle>
          
              {workList}
              
          </div>
      </WorkSection>
    );
  }
  
}

export default Work;
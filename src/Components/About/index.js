
import {AboutSection, AboutInfo, InfoTitle, InfoDir, InfoDesk, Anchor,
Span} from './style.js'

const About =()=> {
  return (
    
    <AboutSection>
        <div className="container">
            <AboutInfo>
                <InfoTitle><Span>This is</Span> Me</InfoTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesk>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <Anchor href="#">explicabo</Anchor> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesk>
                <InfoDesk>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
                </InfoDesk>
            </AboutInfo>
        </div>
    </AboutSection>
  );
}

export default About;

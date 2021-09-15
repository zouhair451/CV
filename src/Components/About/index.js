
import {AboutSection, AboutInfo, InfoTitle, InfoDir, InfoDesk,
Span, Anchor} from './style.js'

const About =()=> {
  return (
    
    <AboutSection>
        <div class="container">
            <AboutInfo>
                <InfoTitle><Span>This is</Span> Me</InfoTitle>
                <InfoDir>Creative Director</InfoDir>
                <InfoDesk>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <a href="#">explicabo</a> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
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

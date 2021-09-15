import { ProfileSkillsSection, ProfileSkills, ProfileTitle, SpanProfileTitle, ProfileList,
  ProfileItem, SpanProfileItem, SpanProfileWeb, Skills, SkillsTilts, SpanSkillsTitle,
  SkillsDesk, BarSkills, PercSkills, ParentSkills, SpanBarParentSkills
 } from './style.js'

 import React, { useState, useEffect} from 'react';
 import axios from 'axios';

const Profile =()=> {
  
  const [ skills, setSkills ] = useState([])

  useEffect ( ()=>{
    axios.get("../js/data.json").then( res => { setSkills(res.data.Skills)})
  }, [])
  
  const SkillsInfo = skills.map( (skillsItem) =>{
    return(
      <BarSkills key={skillsItem.id}>
        <SpanSkillsTitle>{skillsItem.skillsBarTitle}</SpanSkillsTitle>
        <PercSkills>{skillsItem.skillsBarPerc}</PercSkills>
        <ParentSkills>
            <SpanBarParentSkills skillsId={skillsItem.id}></SpanBarParentSkills>
        </ParentSkills>
      </BarSkills>
    );
  })
  return (
  <ProfileSkillsSection>

      <div className="container">

          <ProfileSkills>
              <ProfileTitle><SpanProfileTitle>My </SpanProfileTitle>Profile</ProfileTitle>
              <ProfileList>
                  <ProfileItem>
                      <SpanProfileItem>Name</SpanProfileItem>
                      Zouhair Seghrouchni
                  </ProfileItem>
                  <ProfileItem>
                      <SpanProfileItem>Birthday</SpanProfileItem>
                      06/12/1992
                  </ProfileItem>
                  <ProfileItem>
                      <SpanProfileItem>Address</SpanProfileItem>
                      Nizhny novgorod, Russia
                  </ProfileItem>
                  <ProfileItem>
                      <SpanProfileItem>Phone</SpanProfileItem>
                      +7 9999 121 54 98
                  </ProfileItem>
                  <ProfileItem>
                      <SpanProfileItem>Email</SpanProfileItem>
                      zouhair451@gmail.com
                  </ProfileItem>
                  <ProfileItem>
                      <SpanProfileItem>Website</SpanProfileItem>
                      <SpanProfileItem>
                        <SpanProfileWeb>www.vk.com/cerpo</SpanProfileWeb>
                      </SpanProfileItem>
                  </ProfileItem>
              </ProfileList>
          </ProfileSkills>
          
          <Skills>
              <SkillsTilts>Some <SpanSkillsTitle>skills</SpanSkillsTitle></SkillsTilts>
              <SkillsDesk>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos praesentium blanditiis esse cupiditate, omnis similique.
              </SkillsDesk>

              {SkillsInfo}
          </Skills>
          
      </div>
  </ProfileSkillsSection>
  );
}

export default Profile;
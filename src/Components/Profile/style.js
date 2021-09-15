import styled from 'styled-components';

export const ProfileSkillsSection = styled.div `
    padding: 50px 0;
    overflow: hidden;
`

export const ProfileSkills = styled.div `
    width: 50%;
    float: left;
`

export const ProfileTitle = styled.h2 `
    font-size: 40px; 
    margin-bottom: 20px
`

export const SpanProfileTitle= styled.span `
    font-weight: normal;
`

export const ProfileList= styled.ul `
    list-style: none
`

export const ProfileItem= styled.li `
    margin-bottom: 8px
`

export const SpanProfileItem= styled.span `
    display: inline-block;
    width: 100px;
    font-weight: bold
`

export const SpanProfileWeb= styled.span `
    font-weight: normal;
    color: #eb5424
`

export const Skills= styled.div `
    width: 50%;
    float: left;
`

export const SkillsTilts= styled.h2 `
    font-size: 40px; 
    margin-bottom: 20px
`

export const SpanSkillsTitle= styled.span `
    font-weight: normal;
`

export const SkillsDesk= styled.p `
    font-size: 15px;
    color: #888;
    line-height: 1.5;
    margin-bottom: 20px
`

export const BarSkills= styled.div `
    overflow: hidden;
    padding: 10px 0;
    margin-bottom: 10px
`

export const PercSkills= styled.span `
    float: right;
    margin-right: 100px
`

export const ParentSkills= styled.div `
    height: 2px;
    clear: both;
    background: #f8f8f8;
    position: relative;
    top: 5px
`

export const SpanBarParentSkills= styled.span `
    background: #eb5424;
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    width: ${props => props.skillsId === 1 ? '100%' : props.skillsId === 2 ? '90%' : props.skillsId === 3 ? '80%' :'0'};
`


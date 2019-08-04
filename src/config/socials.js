import styled from 'styled-components';

const socialLinks = [
    { name: 'github', link: 'https://github.com/somberSomni' },
    { name: 'vimeo-v', link: 'https://vimeo.com/kartune' }
];
const SocialContainer = styled.div`
    position: ${props => props.isNav ? (props.mobile ? 'relative' : 'absolute' ) : 'relative'};
    display: flex;
    flex-direction: ${props => props.isNav ? (props.mobile ? 'row' : 'column') : 'row'};
    justify-content: center;
    width: ${props => props.isNav ? 'auto' : '100%'};
    margin-right: ${props => props.isNav ? '25px' : '0px'};
    right: 0px;
`;
const socials = { socialLinks, SocialContainer };
export default socials
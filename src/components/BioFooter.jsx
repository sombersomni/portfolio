import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

const BioContainer = styled.div`
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background: ${props => props.primaryColor || 'yellow'}
`;
const Avatar = styled.div`
    margin-top: 20px;
    border-radius: 50%;
    width: 200px;
    height: 200px;
    overflow: hidden;
    box-shadow: 1px 1px 5px 2px ${props => props.secondaryColor || 'white'}
`;
const Desc = styled.p`
    width: ${props => props.mobile ? '80vw' : '50vw'};
    padding: 0px 20px;
    text-align: justify;
    &:first-letter {
        color: ${props => props.secondaryColor || 'red'}
        font-size: 2em;
    }
`;
const EndFooter = styled.div`
    width: 100%;
    flex-direction: row;

`;
const FooterMessage = styled.h3`

`;
const Footer = styled.div`
    display: flex;
    flex-direction: column;
`;
const Bio = styled.div`
    flex-direction: ${props => props.mobile ? 'column' : 'row'};
`;
function BioFooter({ description, src, theme, mobile }) {

    return (
        <BioContainer
            mobile={mobile}
            primaryColor={theme[0]}>
            
            <Bio mobile={mobile}>
                <Avatar
                    secondaryColor={theme[1]}>
                    <img
                        src={src}
                        height={250}
                        style={{ transform: 'translate(-20px, 0px)' }} />
                </Avatar>

                <Desc
                    secondaryColor={theme[1]}
                    mobile={mobile}>{description}</Desc>

            </Bio>
            <Footer>
                <FooterMessage>This site was made using <span>React</span> and ❤️</FooterMessage>
                <EndFooter>
                    <p>Somber Somni ©️ 2019</p>
                </EndFooter>
            </Footer>
        </BioContainer>
    );
}

function mapStateToProps({ theme, mobile }) {
    return { theme, mobile }
}
export default connect(mapStateToProps)(BioFooter);
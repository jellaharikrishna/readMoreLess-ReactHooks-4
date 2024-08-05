import styled from 'styled-components'

export const AppContainer = styled.div`
height: 100vh;
overflow: auto;
padding: 20px;
display: flex;
flex-direction: column;
`

export const Heading = styled.h1`
font-family: Roboto;
color: #1e293b;
text-align: center;
margin: 0;
`

export const Subject = styled.p`
font-family: Roboto;
color: #334155;
text-align: center;
`

export const HookImage = styled.img`
width: 100%;
@media screen and (min-width: 768px){
    width: 40%;
    align-self: center;
}
`

export const Paragraph = styled.p`
font-family: Roboto;
color: #334155;
font-size: 14px;
line-height: 1.2;
@media screen and (min-width: 768px){
    width: 40%;
    align-self: center;
}
`

export const Button = styled.button`
font-family: Roboto;
color: #ffffff;
background-color: #1f81ff;
height: 35px;
width: 100px;
border-radius: 5px;
border-width: 0;
cursor: pointer;
@media screen and (min-width: 768px){
    align-self: center;
}
`

/*




export const Button = styled.button``


 AppContainer,
    Heading,
    Subject,
    HookImage,
    Paragraph,
    Button,


*/

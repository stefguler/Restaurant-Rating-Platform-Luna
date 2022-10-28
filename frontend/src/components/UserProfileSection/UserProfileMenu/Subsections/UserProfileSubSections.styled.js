import styled from 'styled-components';


export const UserSubSectionsContainer = styled.div`
    
    display: block;
    flex-grow: 1;
    address {
        padding-left: 16px;
        color: white;
        margin-bottom: 4px;
    }
`;

export const UserSubSectionContent = styled.div`
background-color: white;
padding-left: 16px;
padding-top: 12px;
width: 620px;
height: 300px;
h2 {
    
    font-size: 20px;
    font-weight: bold;
    color: #303030;
}

`;

export const CreateButton = styled.button`
    display: flex;
    border-radius: 1rem;
    border: none;
    background: #e47d31;
    color: white;
    padding: 1rem;
    margin-top: 1rem;
    text-transform: uppercase;
    align-self: center;
`
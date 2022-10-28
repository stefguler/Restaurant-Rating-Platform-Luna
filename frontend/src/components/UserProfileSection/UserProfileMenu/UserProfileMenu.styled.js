import styled from 'styled-components';

export const UserProfileContainer = styled.div`
    width: 850px;
    display: flex;
    flex-direction: row;
`;

export const UserProfileLeft = styled.div`
    width: 177px;    
    p{
        font-weight: bold;
        font-family: 'Helvetica';
        font-size: 18px;
        color: #4C4C4C;
        margin: 10px 0;
    }
    ul {
        font-family: 'Helvetica';
        font-size: 18px;
        border-top: 1px solid #979797;
        list-style-type: none;
        margin: 0;
        padding: 0;
        li {
            border-bottom: 1px solid #979797;
            padding: 8px 0;
            background-color: white;
            border-left: 5px solid white;
            &:hover {
                border-left: 5px solid #E47D31;
            }
            &[data-active=true] {
                background: rgba(0, 0, 0, 0.0837013);
                border-left: 5px solid #E47D31;
            }
            a {
                color: #303030;
                padding-left: 12px;
            }
        }
    }
`;

export const UserProfileContent = styled.div`
`;
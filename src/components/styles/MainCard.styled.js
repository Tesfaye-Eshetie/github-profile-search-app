import styled from 'styled-components'

export const MainCard = styled.div`
    max-width: 800px;
    background-color: #7640da;
    border-radius: 20px;
    box-shadow: 0 5px 10px rgba(154, 160, 185, 0.05),
        0 15px 40px rgba(0, 0, 0, 0.1);
    display: flex;
    padding: 3rem;
    margin: 0 1.5rem;

    @media (max-width: 500px) {
        flex-direction: column;
        align-items: center;
    }
`
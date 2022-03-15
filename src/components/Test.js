import styled from 'styled-components';

export default function Test(){
    return(
        <div>
          <Header>
            <h1>hi</h1>
          </Header>
        </div>
        )
}

const Header = styled.header`
h1{
    color: red;
    font-size: 1.1rem; 
    text-align: center;
}
`;
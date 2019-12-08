import styled from 'styled-components';

export const CardContainer = styled.div`
  height: 200px;
  width: 200;
`;

export const Card = styled.div`
  box-shadow: 3px 4px 14px -4px rgba(0, 0, 0, 0.3);
  border-radius: 14px;
  height: auto;
  padding: 1em;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  background-color: #FFF;
  transition: all 1s;
  max-height: ${props => (props.mode === 'details' ? '300px' : 'auto')};
  margin-bottom: ${props => (props.mode === 'details' ? '32px' : '0')};
  overflow: auto;
`;

export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 20px;
`;

import * as React from 'react';
import styled from 'styled-components';

import LogoIcon from '../assets/icons/icon.jpeg';

const Logo = styled.img`
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
`;

export default () => (
  <Logo src={LogoIcon} />
);

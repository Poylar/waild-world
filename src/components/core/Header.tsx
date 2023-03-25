import React from 'react';
import styled from 'styled-components';

import Container from '@/components/ui/Container';
// import useThemeStore from '@/store/useThemeStore';

const Wrapper = styled(Container)`
  display: flex;
`;

const Header: React.FC = (props) => {
  console.log(props);

  // const changeTheme = useThemeStore((state) => state.changeTheme);
  return <Wrapper as="header"></Wrapper>;
};

export default Header;

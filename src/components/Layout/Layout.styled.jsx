import styled from '@emotion/styled';

export const AppHeader = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  min-height: 64px;
  padding-right: 24px;
  padding-left: 24px;
  padding-top: 12px;
  padding-bottom: 12px;
  background: rgb(131,58,180);
  background: linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 50%, rgba(252,176,69,1) 100%);
  box-shadow: 0 8px 6px -6px black;
`;

export const AppBar = styled.div`
  display: flex;
  align-items: center;
`;

export const MainSection = styled.main`
  margin-bottom: 20px;
`;

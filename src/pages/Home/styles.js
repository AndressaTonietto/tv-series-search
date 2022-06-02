import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px;
  padding: 1rem 0.5rem;
`;

export const TVShowsContainer = styled.div`
  overflow-x: scroll;
  padding-left: 10px;
  display: flex;
  gap: 10px;

  ::-webkit-scrollbar {
    display: none;
  }

  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

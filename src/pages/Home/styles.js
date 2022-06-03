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

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #8b949e;
  }

  ::-webkit-scrollbar {
    width: 12px;
    background-color: transparent;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f0ab02;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

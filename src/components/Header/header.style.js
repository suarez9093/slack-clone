import { Avatar } from '@material-ui/core';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
  background-color: var(--slack-color);
`;

const HeaderLeft = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  margin-left: 20px;

  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 30px;
    color: white;
  }
`;
const HeaderRight = styled.div`
  flex: 0.3;
  display: flex;
  align-items: center;
  > .MuiSvgIcon-root {
    margin-left: auto;
    margin-right: 20px;
    color: white;
  }
`;
const HeaderSearch = styled.div`
  > input {
    width: 100%;
    background-color: transparent;
    border: none;
    min-width: 30vw;
    outline: none;
    color: white;
    padding: 0 50px;
    text-align: center;
  }
  flex: 0.4;
  display: flex;
  opacity: 1;
  color: grey;
  border: 1px gray solid;
  border-radius: 6px;

  text-align: center;
  background-color: #421f44;
  > .MuiSvgIcon-root {
    margin-left: 20px;
    :hover {
      cursor: pointer;
    }
  }
`;
const HeaderAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

export { HeaderContainer, HeaderRight, HeaderLeft, HeaderAvatar, HeaderSearch };

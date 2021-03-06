import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.4);
  padding: 30px;
  margin: 80px auto;

  span {
    color: #262626;
    font-size: 20px;
    letter-spacing: 1px;
  }

  h1 {
    font-size: 22px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: #262626;
    margin-bottom: 10px;

    svg {
      margin-right: 10px;
      color: #262626;
    }
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid ${props => (props.error ? '#ff0000' : '#eee')};
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 17px;
  }
`;

//Creating button animations
const animate = keyframes`
  from {
    transform: rotate(0deg)
  }
  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #262626;
  border: none;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  margin-left: 0px;
  padding: 0 15px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${animate} -2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
      list-style: none;
      margin-top: 20px;

      li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & + li {
          border-top: 1px solid #eee;
        }

        a {
          color: #262626;
          text-decoration: none;
        }
      }
`;

export const DeleteButton = styled.button.attrs({
  type: 'button'
})`
    background: transparent;
    color: #262626;
    border: none;
    padding: 8px 7px;
    outline: 0;
`;

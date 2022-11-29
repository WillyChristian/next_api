import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-bottom: 1rem;
  width: 100%;

  .sidebar__input {
    &-label {
      font-family: sans-serif;
      font-size: 1rem;
      line-height: 0.8rem;
      font-weight: 700;
      padding: 0.2rem 0;
    }
    &-wrapper {
      width: 100%;
    }
    &-item {
      border-color: ${(props) => props.theme.alpha.gray};
      border-radius: 0.5rem;
      padding: 0.5rem;
      width: 100%;
    }
  }
`

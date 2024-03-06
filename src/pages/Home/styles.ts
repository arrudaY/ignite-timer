import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem;
  }
`
export const BaseCountDownButton = styled.button`
  width: 100%;
  padding: 1rem;
  border-radius: 8px;
  font-weight: bold;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
export const StartCountDownButton = styled(BaseCountDownButton)`
  background-color: ${({ theme }) => theme['green-500']};
  color: ${({ theme }) => theme['gray-100']};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['green-700']};
  }
`
export const StopCountDownButton = styled(BaseCountDownButton)`
  background-color: ${({ theme }) => theme['red-500']};
  color: ${({ theme }) => theme['gray-100']};

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme['red-700']};
  }
`

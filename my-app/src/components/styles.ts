import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity`
  border-radius: 8px;
  padding: 20px;
  background-color: ${props => props.theme.colors.primary};
`;
export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.destructive};
  margin-bottom: 8px;
  font-size: 14px;
`;
export const FormContainer = styled.View`
  padding: ${({ theme }) => theme.space.default}px;
  width: 100%;
`;
export const Container = styled.SafeAreaView`
  flex: 1;
  padding: ${({ theme }) => theme.space.default}px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: space-between;
`;

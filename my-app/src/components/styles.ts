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
  position: relative;
  padding: ${({ theme }) => theme.space.default}px;
  background-color: ${({ theme }) => theme.colors.background};
  gap: 16px;
  margin: 0;
  padding: 0;
  width: 100%;
`;
export const ContentScreen = styled.SafeAreaView`
  display: flex;
  align-items: start;
  justify-content: flex-start;
  width: 100%;
  height: 500px;
`;
export const TitleContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  width: 100%;
`;
export const HeaderButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  width: 100%;
`;
export const TitleText = styled.Text`
  color: ${({ theme }) => theme.colors.foreground};
  font-size: 18px;
`;
export const DetailButtonContainer = styled.View`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 0 16px;
  width: 100%;
`;
export const GoBackButtonContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 16px;
`;

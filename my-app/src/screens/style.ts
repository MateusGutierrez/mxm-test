import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 32,
  },
  title: {
    fontWeight: 'bold',

    fontSize: 20,
    textAlign: 'center',
  },
  text: {
    color: '#550AB1',
    fontWeight: 'bold',
  },
});

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-left: ${({theme}) => theme.space.default}px;
  padding-right: ${({theme}) => theme.space.default}px;
  padding-bottom: 32px;
  background-color: ${props => props.theme.colors.background};
`;
import {StyleSheet} from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1B1B1B',
        ...Platform.select({
          ios: {paddingTop: 30},
        }),
      },
      button: {
        marginTop: 10,
        backgroundColor: '#64D3F0',
        borderRadius: 5,
        padding: 10,
        width: '50%',
      },
      buttonText: {
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 20,
        color: '#FFF',
      },
});

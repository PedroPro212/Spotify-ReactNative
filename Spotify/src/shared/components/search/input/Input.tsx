import { TextInputProps, ImageProps } from 'react-native';
import { ContainerInput, IconsContainer } from './input.style';
import { View, StyleSheet } from 'react-native';

type InputProps = TextInputProps & ImageProps;

const Input = ({...props}: InputProps) => {
    return (
        <View style={styles.container}>
            <IconsContainer source={props.source} />
            <ContainerInput {...props} />
        </View>
    )
};

const styles  = StyleSheet.create({
    container: {
        flexDirection: 'row',  
        width: '90%', 
        backgroundColor: '#FFFFFF', 
        borderRadius: 5,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 15,
        marginTop: 2
    }
})

export default Input;
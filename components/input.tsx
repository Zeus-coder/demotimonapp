/* eslint-disable react-native/no-inline-styles */
import {Pressable, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Fontisto';

interface InputProps {
  style: any;
  placeholder: string;
  searchIcon: boolean;
  inputButton: boolean;
  onChangeText: (text: string) => void;
}
export const Input = ({
  placeholder,
  onChangeText,
  searchIcon,
  inputButton,
  style,
}: InputProps) => {
  return (
    <View style={{flex: 1, position: 'relative'}}>
      {searchIcon && <Icon name={'search'} size={18} color={'#aaa'} style={{position: 'absolute', top: 20, left:15, zIndex: 999}}/>}
      <TextInput
        style={[
          style,
          {
            height: 58,
            borderWidth: 0,
            borderColor: '#aaa',
            borderRadius: 10,
            paddingVertical: 10,
            paddingHorizontal: 40,
            backgroundColor: '#fff',
          },
        ]}
        placeholder={placeholder}
        onChangeText={onChangeText}
      />
      {inputButton && (
        <Pressable style={{width: 90, alignItems: 'center', backgroundColor: '#000', padding: 10, borderRadius:10, position: 'absolute', top: 10, right: 10}}>
          <Text style={{color: '#fff'}}>Apply</Text>
        </Pressable>
      )}
    </View>
  );
};

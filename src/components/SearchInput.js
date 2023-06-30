import React from "react";
import { StyleSheet, TextInput, View } from 'react-native';
import { useState } from "react";
import PropTypes from 'prop-types';



const SearchInput = ({ onSubmit, placeholder }) =>{
    
    const [text, setText] = useState('');

    const handleChangeText = (newText) => {
    setText(newText);
    };

    const handleSubmitEditing = () => {
    if (!text) return;

        onSubmit(text);
        setText('');
    };
       
    return(
        <View style={styles.container}>
        <TextInput
        autoCorrect={false}
        placeholder={placeholder}
        placeholderTextColor="white"
        underlineColorAndroid="transparent"
        style={styles.textInput}
        clearButtonMode="always"
        onChangeText={handleChangeText}
        onSubmitEditing={handleSubmitEditing}
        returnKeyType="done"
        />
        </View>
    );
}

SearchInput.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
  };
  
  SearchInput.defaultProps = {
    placeholder: '',
  };


const styles = StyleSheet.create({
    container: {
    backgroundColor: '#666',
    color: 'white',
    height: 40,
    width: 300,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    alignSelf: 'center',
    borderRadius: 5,
},
textInput: {
    flex: 1,
    color: 'white',
},
});

export default SearchInput;
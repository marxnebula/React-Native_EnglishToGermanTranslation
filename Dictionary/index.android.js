/*
 * Application for translating english into german phrases commonly used.
 * The user inputs english text and the Mr. Honey's Beginner Dictionary JSON
 * file checks to see if it has a translation.  If it doesn't then it says
 * 'Not Found'.  The user may clear the text or retype into the textInput.
 * Dictionary words can be found at 
   http://www.gutenberg.org/cache/epub/3212/pg3212.txt


  - Created by Jordan Patrick Marx 
    (4/30/2016)
 */

'use strict'

// JSON file for checking the translation from english to german
var english_german = require('./english_german.json');

// Contains all the react native functions and objects
var React = require('react-native');

// Our component called Dictionary
var Dictionary = React.createClass({

 // Render
 // Text input from user.
 // OnchangeText sets the state of input to the text.
 // onSubmitEditing is called once the input has finished.
 render: function() {
 	// Define the layout of the component
    var layout =
        <React.View style = { styles.parent } >
 
            <React.Text>
                Type something in English:
            </React.Text>
 
            <React.TextInput 
                onChangeText={(e) => this.setState({input: e})}
                value = {this.state.input}
                              
                onSubmitEditing = { this.checkMeaning }
            />
 
            <React.Text style = { styles.germanLabel } >
                Its German equivalent is:
            </React.Text>
 
            <React.Text style = { styles.germanWord } >    
              { this.state.output }    
                     
            </React.Text>

            <React.TouchableOpacity onPress = {this.clearText}
            style = {styles.clearWord}>
            
            	<React.Text>  Click here to clear the text </React.Text>
            </React.TouchableOpacity>
           
        </React.View>
    ;
    return layout;
},

// Function for getting the initial state of given variables
getInitialState: function() {
    return {
        input: '',
        output: ''
    };
},

// Function for checking if the english has a german translation
// and sets it to the output state.
checkMeaning: function() {
    // Use the ternary operator to check if the word 
    // exists in the dictionary.
    var phrase = this.state.input in english_german ? 
                    english_german[this.state.input] : 
                    "Not Found";
 
    // Update the state
    this.setState({
         output: phrase
    });
},

clearText: function () {
	this.setState({
		input: '',
		output: ''
	});
},

});


// The style sheet
var styles = React.StyleSheet.create({
 
    // For the container View
    parent: {
        padding: 16,
        backgroundColor: '#E8CFB6'
    },
 
    // For the Text label
    germanLabel: {
        marginTop: 20,
        fontWeight: 'bold'
    },
 
    // For the Text meaning
    germanWord: {
        marginTop: 15,
        fontSize: 30,
        fontStyle: 'italic'
    },

    // For clearing the words
    clearWord: {
    	marginTop: 25,
    	borderWidth: 1,
    	backgroundColor: '#F4F7FF'
    }
});


// Lets React Native know that it should render your component 
// when your app starts
// React.AppRegistry.registerComponent('Dictionary', () => Dictionary);

React.AppRegistry.registerComponent('Dictionary', function() {
    return Dictionary;
});

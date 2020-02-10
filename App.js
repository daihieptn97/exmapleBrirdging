/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    NativeModules,
    TouchableOpacity,
} from 'react-native';


var {Flash} = NativeModules;

class App extends Component {

    componentWillMount(): void {
        // Flash.
        console.log(Flash)
    }

    render() {
        return <View style={{
            flex: 1,
            justifyContent: 'center',

        }}>
            <TouchableOpacity style={{}} onPress={() => {
                Flash.on();
            }}>
                <Text style={{textAlign: 'center', height: 60}}>On</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{}} onPress={
                () => {
                    Flash.off();
                }
            }>
                <Text style={{textAlign: 'center', height: 60}}>Off</Text>
            </TouchableOpacity>
        </View>;
    }
}

export default App;

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { parseMath } from './src/utils';

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  Button,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const [text, setText] = useState(""); // useState один из реакт хуков
  // const onPressHandler = event => setText(text + val);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const erace = event => {
    if (text.length != 0) {
      setText(toString(text).slice(0, text.length-1))
    }
  }

  return (
    <View>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />


            <Text>{text}</Text>
            <Button
              title={"1"}
              onPress={event => {setText(text + "1")}}
            />

            <Button
              title={"2"}
              onPress={event => {setText(text + "2")}}
            />

            <Button
              title={"3"}
              onPress={event => {setText(text + "3")}}
            />

            <Button
              title={"4"}
              onPress={event => {setText(text + "4")}}
            />

            <Button
              title={"5"}
              onPress={event => {setText(text + "5")}}
            />

            <Button
              title={"6"}
              onPress={event => {setText(text + "6")}}
            />

            <Button
              title={"7"}
              onPress={event => {setText(text + "7")}}
            />

            <Button
              title={"8"}
              onPress={event => {setText(text + "8")}}
            />

            <Button
              title={"9"}
              onPress={event => {setText(text + "9")}}
            />

            <Button
              title={"0"}
              onPress={event => {setText(text + "0")}}
            />

            <Button
              title={"+"}
              onPress={event => {setText(text + " + ")}}
            />

            <Button
              title={"-"}
              onPress={event => {setText(text + " - ")}}
            />

          <Button
              title={"*"}
              onPress={event => {setText(text + " * ")}}
            />

          <Button
              title={"/"}
              onPress={event => {setText(text + " / ")}}
            />

          <Button
              title={"="}
              onPress={event => {setText(parseMath(text))}}
            />

          <Button
              title={"<<"}
              onPress={erace}
            />

    </View>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

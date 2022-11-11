import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import Ionicons from "react-native-vector-icons/ionicons"
let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (!this.state.fontsLoaded) {
      return <AppLoading />;
    } else {
      return (
        <View style={styles.container}>
          <SafeAreaView style={styles.safearea}/>
          <View style={styles.cardcontainer}>
            <View style={styles.storyimage}>
              <Image source={require("../assets/story_image_1.png")} style={{resizeMode:"contain",
            width:Dimensions.get ("window").width-60,
            height:250,
            borderRadius:10}}/>
            </View>
            <View style={styles.titlecontainer}>
            <View style={styles.titletextcontainer}>
            <View style={styles.storytitle}>
              <Text style={styles.storytitletext}>{this.props.story.title}</Text>
              </View>
              <View style={styles.storyauthor}>
              <Text style={styles.storyauthortext}>{this.props.story.author}</Text>
              </View>
              </View>
            </View>
            <View style={styles.descriptioncontainer}>
            <Text style={styles.storydescriptiontext}>{this.props.story.description}</Text>
            </View>
            <View style={styles.actioncontainer}>
            <View style={styles.likebutttom}>
            <View style={styles.likeicon}>
              <Ionicons name={"heart"}size={30}color={"white"}/>
              </View>
              </View>
              <Text style={styles.liketext}>12k</Text>
              </View>
          </View>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

import React from "react";
import { StyleSheet, Dimensions, ScrollView } from "react-native";
import { Block, theme, Button } from "galio-framework";

import { Card } from "../components";
import articles from "../constants/articles";
const { width } = Dimensions.get("screen");

class Home extends React.Component {
  renderArticles = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.articles}
      >
        <Block style={{ marginBottom: theme.SIZES.BASE }}></Block>
        <Block flex>
          <Block>
            <Card item={articles[0]} horizontal />
          </Block>
          <Block>
            <Card item={articles[1]} horizontal />
          </Block>
          <Block>
            <Card item={articles[2]} horizontal />
          </Block>
          {/* <Card item={articles[0]} horizontal />
          <Block flex row>
            <Card
              item={articles[1]}
              style={{ marginRight: theme.SIZES.BASE }}
            />
            <Card item={articles[2]} />
          </Block>
          <Card item={articles[3]} horizontal />
          <Card item={articles[4]} full /> */}
        </Block>
      </ScrollView>
    );
  };

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderArticles()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE
  }
});

export default Home;

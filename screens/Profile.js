import React from "react";
import {
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
  ImageBackground,
  Platform
} from "react-native";
import { Block, Text, theme } from "galio-framework";

import { Button } from "../components";
import { Images, argonTheme } from "../constants";
import { HeaderHeight } from "../constants/utils";

const { width, height } = Dimensions.get("screen");

const thumbMeasure = (width - 48 - 32) / 3;

class Profile extends React.Component {
  render() {
    return (
      <Block flex style={styles.profile}>
        <Block flex>
          <ImageBackground
            source={Images.ProfileBackground}
            style={styles.profileContainer}
            imageStyle={styles.profileBackground}
          >
            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{ width, marginTop: "25%" }}
            >
              <Block flex style={styles.profileCard}>
                <Block middle style={styles.avatarContainer}>
                  <Image
                    source={{ uri: Images.ProfilePicture }}
                    style={styles.avatar}
                  />
                </Block>
                <Block style={styles.info}>
                  <Block
                    middle
                    row
                    space="evenly"
                    style={{ marginTop: 20, paddingBottom: 24 }}
                  >
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.INFO }}
                    >
                      CONNECT
                    </Button>
                    <Button
                      small
                      style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
                    >
                      MESSAGE
                    </Button>
                  </Block>
                  <Block row space="between">
                    <Block middle>
                      <Text
                        bold
                        size={12}
                        color="#525F7F"
                        style={{ marginBottom: 4 }}
                      >
                        2K
                      </Text>
                      <Text size={12}>Total Waste(kg)</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >
                        10
                      </Text>
                      <Text size={12}>Rewards</Text>
                    </Block>
                    <Block middle>
                      <Text
                        bold
                        color="#525F7F"
                        size={12}
                        style={{ marginBottom: 4 }}
                      >
                        89
                      </Text>
                      <Text size={12}>Pickups</Text>
                    </Block>
                  </Block>
                </Block>
                <Block flex>
                  <Block middle style={styles.nameInfo}>
                    <Text bold size={28} color="#32325D">
                      Jessica Jones, 27
                    </Text>
                    <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                      San Francisco, USA
                    </Text>
                  </Block>
                  <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                    <Block style={styles.divider} />
                  </Block>
                  <Block middle>
                    <Text
                      size={16}
                      color="#525F7F"
                      style={{ textAlign: "center" }}
                    >
                      An artist of considerable range, Jessica name taken by
                      Melbourne …
                    </Text>
                    {/* <Button
                      color="transparent"
                      textStyle={{
                        color: "#233DD2",
                        fontWeight: "500",
                        fontSize: 16
                      }}
                    >
                      Show more
                    </Button> */}
                  </Block>
                  <Block>
                    <Text bold size={22} color="#32325D">
                      Your monthly contributions
                    </Text>
                  </Block>
                  <Image
                    style={{ width: 250, height: 250 }}
                    source={{
                      uri:
                        "data:image/png;base64,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"
                    }}
                  />
                  {/* <Block
                    row
                    style={{ paddingVertical: 14, alignItems: "baseline" }}
                  >
                    <Text bold size={16} color="#525F7F">
                      Album
                    </Text>
                  </Block>
                  <Block
                    row
                    style={{ paddingBottom: 20, justifyContent: "flex-end" }}
                  >
                    <Button
                      small
                      color="transparent"
                      textStyle={{ color: "#5E72E4", fontSize: 12 }}
                    >
                      View all
                    </Button>
                  </Block>
                  <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                    <Block row space="between" style={{ flexWrap: "wrap" }}>
                      {Images.Viewed.map((img, imgIndex) => (
                        <Image
                          source={{ uri: img }}
                          key={`viewed-${img}`}
                          resizeMode="cover"
                          style={styles.thumb}
                        />
                      ))}
                    </Block>
                  </Block> */}
                </Block>
              </Block>
            </ScrollView>
          </ImageBackground>
        </Block>
        {/* <ScrollView showsVerticalScrollIndicator={false} 
                    contentContainerStyle={{ flex: 1, width, height, zIndex: 9000, backgroundColor: 'red' }}>
        <Block flex style={styles.profileCard}>
          <Block middle style={styles.avatarContainer}>
            <Image
              source={{ uri: Images.ProfilePicture }}
              style={styles.avatar}
            />
          </Block>
          <Block style={styles.info}>
            <Block
              middle
              row
              space="evenly"
              style={{ marginTop: 20, paddingBottom: 24 }}
            >
              <Button small style={{ backgroundColor: argonTheme.COLORS.INFO }}>
                CONNECT
              </Button>
              <Button
                small
                style={{ backgroundColor: argonTheme.COLORS.DEFAULT }}
              >
                MESSAGE
              </Button>
            </Block>

            <Block row space="between">
              <Block middle>
                <Text
                  bold
                  size={12}
                  color="#525F7F"
                  style={{ marginBottom: 4 }}
                >
                  2K
                </Text>
                <Text size={12}>Orders</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{ marginBottom: 4 }}>
                  10
                </Text>
                <Text size={12}>Photos</Text>
              </Block>
              <Block middle>
                <Text bold size={12} style={{ marginBottom: 4 }}>
                  89
                </Text>
                <Text size={12}>Comments</Text>
              </Block>
            </Block>
          </Block>
          <Block flex>
              <Block middle style={styles.nameInfo}>
                <Text bold size={28} color="#32325D">
                  Jessica Jones, 27
                </Text>
                <Text size={16} color="#32325D" style={{ marginTop: 10 }}>
                  San Francisco, USA
                </Text>
              </Block>
              <Block middle style={{ marginTop: 30, marginBottom: 16 }}>
                <Block style={styles.divider} />
              </Block>
              <Block middle>
                <Text size={16} color="#525F7F" style={{ textAlign: "center" }}>
                  An artist of considerable range, Jessica name taken by
                  Melbourne …
                </Text>
                <Button
                  color="transparent"
                  textStyle={{
                    color: "#233DD2",
                    fontWeight: "500",
                    fontSize: 16
                  }}
                >
                  Show more
                </Button>
              </Block>
              <Block
                row
                style={{ paddingVertical: 14, alignItems: "baseline" }}
              >
                <Text bold size={16} color="#525F7F">
                  Album
                </Text>
              </Block>
              <Block
                row
                style={{ paddingBottom: 20, justifyContent: "flex-end" }}
              >
                <Button
                  small
                  color="transparent"
                  textStyle={{ color: "#5E72E4", fontSize: 12 }}
                >
                  View all
                </Button>
              </Block>
              <Block style={{ paddingBottom: -HeaderHeight * 2 }}>
                <Block row space="between" style={{ flexWrap: "wrap" }}>
                  {Images.Viewed.map((img, imgIndex) => (
                    <Image
                      source={{ uri: img }}
                      key={`viewed-${img}`}
                      resizeMode="cover"
                      style={styles.thumb}
                    />
                  ))}
                </Block>
              </Block>
          </Block>
        </Block>
                  </ScrollView>*/}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  profile: {
    marginTop: Platform.OS === "android" ? -HeaderHeight : 0,
    // marginBottom: -HeaderHeight * 2,
    flex: 1
  },
  profileContainer: {
    width: width,
    height: height,
    padding: 0,
    zIndex: 1
  },
  profileBackground: {
    width: width,
    height: height / 2
  },
  profileCard: {
    // position: "relative",
    padding: theme.SIZES.BASE,
    marginHorizontal: theme.SIZES.BASE,
    marginTop: 65,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: theme.COLORS.WHITE,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 8,
    shadowOpacity: 0.2,
    zIndex: 2
  },
  info: {
    paddingHorizontal: 40
  },
  avatarContainer: {
    position: "relative",
    marginTop: -80
  },
  avatar: {
    width: 124,
    height: 124,
    borderRadius: 62,
    borderWidth: 0
  },
  nameInfo: {
    marginTop: 35
  },
  divider: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#E9ECEF"
  },
  thumb: {
    borderRadius: 4,
    marginVertical: 4,
    alignSelf: "center",
    width: thumbMeasure,
    height: thumbMeasure
  }
});

export default Profile;

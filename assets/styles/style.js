import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },

  timer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  timerText: {
    fontSize: 50,
    fontWeight: "black",
    color: Colors.text,
  },
  
  
  actions: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 12,
  },
  btn: {
    width: 100,
    height: 100,
    borderRadius: "50%",
    justifyContent: "center",
    alignItems: "center",
    color: Colors.text,
  },
  playBtn: {},
  restartBtn: {},
  

  footer: {
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    bottom: 0,
    left: 0,
    width: "auto",
  },
  slogan: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.text,
  },
});

export default styles;
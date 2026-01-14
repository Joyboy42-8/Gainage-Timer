import { StyleSheet } from "react-native";
import Colors from "../../constants/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bg,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    paddingHorizontal: 30,
    gap: 50,
    zIndex: 1,
  },
  watermark: {
    position: 'absolute',
    width: '100%',
    opacity: 0.08, // effet filigrane
    top: -80,
    left: -20,
    zIndex: 0,
  },

  timer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  timerText: {
    fontSize: 50,
    fontWeight: "bold",
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
    color: "white",
  },
  playBtn: {
    backgroundColor: Colors.accent,
  },
  restartBtn: {
    backgroundColor: Colors.text,
  },


  footer: {
    marginBottom: 64,
    justifyContent: "center",
    alignItems: "center",
  },
  slogan: {
    fontSize: 30,
    fontWeight: "bold",
    color: Colors.text,
    fontStyle: "italic",
    opacity: 0.3,
  },
});

export default styles;
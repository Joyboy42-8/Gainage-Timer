import styles from "../assets/styles/style";
import { Text, View } from 'react-native';

export default function Timer({ time }) {
    return (
        <View style={styles.timer}>
            <Text style={styles.timerText}>{time.min}</Text>
            <Text style={styles.timerText}>:</Text>
            <Text style={styles.timerText}>{time.sec}</Text>
        </View>
    );
}
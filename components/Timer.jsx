import styles from "../assets/styles/style";
import { Text, View } from 'react-native';

export default function Timer({ time }) {
    const min = Math.floor(time / 60);
    const sec = time % 60;
    const format = (value) => value.toString().padStart(2, '0');

    return (
        <View style={styles.timer}>
            <Text style={styles.timerText}>{format(min)}</Text>
            <Text style={styles.timerText}>:</Text>
            <Text style={styles.timerText}>{format(sec)}</Text>
        </View>
    );
}
import Timer from "../components/Timer";
import styles from '../assets/styles/style';

import { useState } from 'react';
import { Pause, Play, RefreshCwIcon } from 'lucide-react-native';
import { Text, TouchableOpacity, View } from 'react-native';


export default function App() {
  const [timer, setTimer] = useState({ min: 0o5, sec: 0o0 });
  const [state, setState] = useState(false);

  return (
    <View style={styles.container}>
      {/* Timer Component */}
      <Timer time={timer} />

      {/* Action: Play/Pause/Restart */}
      <View style={styles.actions}>
        <TouchableOpacity style={[styles.btn, styles.restartBtn]}>
          <RefreshCwIcon />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.playBtn]}>
          {state ?
            <Play />
            :
            <Pause />
          }
        </TouchableOpacity>

      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.slogan}>No Pain No Gain !</Text>
      </View>

    </View>
  );
}
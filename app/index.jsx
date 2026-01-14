import Timer from "../components/Timer";
import styles from '../assets/styles/style';

import { useEffect, useRef, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Pause, Play, RefreshCwIcon } from 'lucide-react-native';

export default function App() {
  const [timer, setTimer] = useState(300);
  const [isGaining, setIsGaining] = useState(false);
  const intervalRef = useRef();

  const handleStateChange = () => setIsGaining(prev => !prev);

  const handleReset = () => {
    setIsGaining(false);
    setTimer(300);
  }

  useEffect(() => {
    if (!isGaining) {
      clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          setIsGaining(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);


    // Cleanup
    return () => clearInterval(intervalRef.current);
  }, [isGaining]);

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        {/* Timer Component */}
        <Timer time={timer} />

        {/* Background Image */}
        <Image
          source={require('../assets/images/plank.png')}
          style={styles.watermark}
          resizeMode="contain"
        />

        {/* Action: Play/Pause/Restart */}
        <View style={styles.actions}>
          <TouchableOpacity style={[styles.btn, styles.restartBtn]} onPress={handleReset}>
            <RefreshCwIcon color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={[styles.btn, styles.playBtn]} onPress={handleStateChange}>
            {isGaining ?
              <Pause color="white" />
              :
              <Play color="white" />
            }
          </TouchableOpacity>
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.slogan}>No Pain No Gain !</Text>
      </View>

    </View>
  );
}
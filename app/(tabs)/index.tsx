import { StyleSheet, ScrollView } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

export default function HomeScreen() {
  return (
    <ScrollView>
      <ThemedView style={styles.Container}>
        <ThemedView style={styles.titleContainer}>
          <ThemedText type="title" style={styles.title}>Welcome! <HelloWave /></ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            This is a simple example of a home screen.
          </ThemedText>
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 30,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
  }
});


import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

type StoryCircleProps = {
  user: {
    id: string;
    name: string;
    avatarUrl: string;
    hasUnseenStory: boolean;
  };
  onPress: (userId: string) => void;
};

export function StoryCircle({ user, onPress }: StoryCircleProps) {
  return (
    <TouchableOpacity
      style={styles.storyContainer}
      onPress={() => onPress(user.id)}
    >
      <View style={[
        styles.storyRing,
        user.hasUnseenStory ? styles.unseenStory : styles.seenStory
      ]}>
        <Image source={{ uri: user.avatarUrl }} style={styles.storyAvatar} />
      </View>
      <ThemedText
        style={styles.storyUsername}
        numberOfLines={1}
      >
        {user.name}
      </ThemedText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  storyContainer: {
    alignItems: 'center',
    marginRight: 12,
  },
  storyRing: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  unseenStory: {
    borderWidth: 2,
    borderColor: '#007AFF',
  },
  seenStory: {
    borderWidth: 1,
    borderColor: '#ddd',
  },
  storyAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  storyUsername: {
    marginTop: 4,
    fontSize: 12,
    color: '#666',
  }
})
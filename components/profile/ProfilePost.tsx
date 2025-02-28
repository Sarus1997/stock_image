import React from 'react';
import { StyleSheet, Image, TouchableOpacity, View } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';

type PostProps = {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
  onPress: (id: string) => void;
};

export function ProfilePost({ id, imageUrl, caption, likes, comments, timestamp, onPress }: PostProps) {
  return (
    <TouchableOpacity style={styles.postContainer} onPress={() => onPress(id)}>
      <Image source={{ uri: imageUrl }} style={styles.postImage} />
      <View style={styles.postInfo}>
        <View style={styles.postStats}>
          <View style={styles.statGroup}>
            <Ionicons name="heart-outline" size={16} color="#666" />
            <ThemedText style={styles.statText}>{likes}</ThemedText>
          </View>
          <View style={styles.statGroup}>
            <Ionicons name="chatbubble-outline" size={16} color="#666" />
            <ThemedText style={styles.statText}>{comments}</ThemedText>
          </View>
        </View>
        <ThemedText numberOfLines={2} style={styles.caption}>{caption}</ThemedText>
        <ThemedText style={styles.timestamp}>{timestamp}</ThemedText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  postContainer: {
    marginBottom: 16,
    borderRadius: 8,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  postInfo: {
    padding: 16,
  },
  postStats: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  statGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    marginLeft: 4,
  },
  caption: {
    marginTop: 8,
    marginBottom: 8,
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
})
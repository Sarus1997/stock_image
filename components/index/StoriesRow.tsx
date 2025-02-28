import React from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { StoryCircle } from './StoryCircle';

type StoriesRowProps = {
  stories: Array<{
    id: string;
    name: string;
    avatarUrl: string;
    hasUnseenStory: boolean;
  }>;
  onStoryPress: (userId: string) => void;
};

export function StoriesRow({ stories, onStoryPress }: StoriesRowProps) {
  return (
    <ThemedView style={styles.storiesContainer}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.storiesScrollView}
      >
        {stories.map(user => (
          <StoryCircle
            key={user.id}
            user={user}
            onPress={onStoryPress}
          />
        ))}
      </ScrollView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  // PostCard styles
  postCard: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 36,
    height: 36,
    borderRadius: 18,
    marginRight: 10,
  },
  username: {
    fontWeight: '600',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    paddingVertical: 8,
  },
  leftActions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginRight: 16,
  },
  postInfo: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  likeCount: {
    fontWeight: '600',
    marginBottom: 6,
  },
  captionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 6,
  },
  caption: {
    flex: 1,
    flexWrap: 'wrap',
  },
  viewComments: {
    color: '#666',
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },

  // StoryCircle styles
  storyContainer: {
    alignItems: 'center',
    marginHorizontal: 8,
    width: 72,
  },
  storyRing: {
    width: 68,
    height: 68,
    borderRadius: 34,
    padding: 2,
    marginBottom: 5,
  },
  unseenStory: {
    borderWidth: 2,
    borderColor: '#FF3B30',
  },
  seenStory: {
    borderWidth: 2,
    borderColor: '#ddd',
  },
  storyAvatar: {
    width: '100%',
    height: '100%',
    borderRadius: 32,
  },
  storyUsername: {
    fontSize: 12,
    textAlign: 'center',
  },

  // StoriesRow styles
  storiesContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },
  storiesScrollView: {
    paddingVertical: 12,
    paddingHorizontal: 4,
  },
});
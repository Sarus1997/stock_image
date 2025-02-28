import React from 'react';
import { StyleSheet, FlatList, Dimensions } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { ProfilePost } from './ProfilePost';

type Post = {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
};

type ProfilePostsGridProps = {
  posts: Post[];
  onPostPress: (id: string) => void;
};

export function ProfilePostsGrid({ posts, onPostPress }: ProfilePostsGridProps) {
  return (
    <ThemedView style={styles.gridContainer}>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <ProfilePost
            id={item.id}
            imageUrl={item.imageUrl}
            caption={item.caption}
            likes={item.likes}
            comments={item.comments}
            timestamp={item.timestamp}
            onPress={onPostPress}
          />
        )}
        keyExtractor={(item) => item.id}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  gridContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
})
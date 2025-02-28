import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { ProfilePost } from './ProfilePost';

// Types
type Post = {
  id: string;
  imageUrl: string;
  caption: string;
  likes: number;
  comments: number;
  timestamp: string;
};

type ProfilePostsSectionProps = {
  posts: Post[];
};

export function ProfilePostsSection({ posts }: ProfilePostsSectionProps) {
  const [activeTab, setActiveTab] = useState<'grid' | 'list'>('grid');

  const handlePostPress = (id: string) => {
    console.log(`Post pressed: ${id}`);
    // Navigate to post detail or perform action
  };

  return (
    <ThemedView style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'grid' && styles.activeTab]}
          onPress={() => setActiveTab('grid')}
        >
          <Ionicons
            name="grid-outline"
            size={22}
            color={activeTab === 'grid' ? '#007AFF' : '#666'}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'list' && styles.activeTab]}
          onPress={() => setActiveTab('list')}
        >
          <Ionicons
            name="list-outline"
            size={22}
            color={activeTab === 'list' ? '#007AFF' : '#666'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.postsContainer}>
        {activeTab === 'grid' ? (
          <View style={styles.gridView}>
            {posts.map((post) => (
              <TouchableOpacity
                key={post.id}
                style={styles.gridItem}
                onPress={() => handlePostPress(post.id)}
              >
                <Image source={{ uri: post.imageUrl }} style={styles.gridImage} />
              </TouchableOpacity>
            ))}
          </View>
        ) : (
          posts.map((post) => (
            <ProfilePost
              key={post.id}
              id={post.id}
              imageUrl={post.imageUrl}
              caption={post.caption}
              likes={post.likes}
              comments={post.comments}
              timestamp={post.timestamp}
              onPress={handlePostPress}
            />
          ))
        )}
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  // Styles for ProfilePost component
  postContainer: {
    marginBottom: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
    overflow: 'hidden',
  },
  postImage: {
    width: '100%',
    height: 200,
  },
  postInfo: {
    padding: 12,
  },
  postStats: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  statGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  statText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#666',
  },
  caption: {
    fontSize: 14,
    marginBottom: 4,
  },
  timestamp: {
    fontSize: 12,
    color: '#999',
  },

  // Styles for ProfilePostsSection component
  container: {
    flex: 1,
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginBottom: 10,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 15,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderColor: '#007AFF',
  },
  postsContainer: {
    padding: 10,
  },
  gridView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  gridItem: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 10,
    borderRadius: 8,
    overflow: 'hidden',
  },
  gridImage: {
    width: '100%',
    height: '100%',
  },
});
import React, { useState } from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';

type PostCardProps = {
  post: {
    id: string;
    user: {
      id: string;
      name: string;
      avatarUrl: string;
    };
    imageUrl: string;
    caption: string;
    likes: number;
    comments: number;
    timestamp: string;
  };
  onLikePress: (postId: string) => void;
  onCommentPress: (postId: string) => void;
  onUserPress: (userId: string) => void;
};

export function PostCard({ post, onLikePress, onCommentPress, onUserPress }: PostCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(post.likes);

  const handleLikePress = () => {
    setIsLiked(!isLiked);
    setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    onLikePress(post.id);
  };

  function formatNumber(num: number) {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    } else {
      return num.toString();
    }
  }

  return (
    <ThemedView style={styles.postCard}>
      <View style={styles.postHeader}>
        <TouchableOpacity
          style={styles.userInfo}
          onPress={() => onUserPress(post.user.id)}
        >
          <Image source={{ uri: post.user.avatarUrl }} style={styles.avatar} />
          <ThemedText style={styles.username}>{post.user.name}</ThemedText>
        </TouchableOpacity>
        <TouchableOpacity>
          <Ionicons name="ellipsis-horizontal" size={24} color="#666" />
        </TouchableOpacity>
      </View>

      <Image source={{ uri: post.imageUrl }} style={styles.postImage} />

      <View style={styles.actionButtons}>
        <View style={styles.leftActions}>
          <TouchableOpacity style={styles.actionButton} onPress={handleLikePress}>
            <Ionicons
              name={isLiked ? "heart" : "heart-outline"}
              size={24}
              color={isLiked ? "#FF3B30" : "#333"}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.actionButton}
            onPress={() => onCommentPress(post.id)}
          >
            <Ionicons name="chatbubble-outline" size={22} color="#333" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="paper-plane-outline" size={22} color="#333" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Ionicons name="bookmark-outline" size={22} color="#333" />
        </TouchableOpacity>
      </View>

      <View style={styles.postInfo}>
        <ThemedText style={styles.likeCount}>{formatNumber(likeCount)} likes</ThemedText>
        <View style={styles.captionContainer}>
          <ThemedText style={styles.username}>{post.user.name}</ThemedText>
          <ThemedText style={styles.caption}> {post.caption}</ThemedText>
        </View>
        <TouchableOpacity onPress={() => onCommentPress(post.id)}>
          <ThemedText style={styles.viewComments}>
            View all {formatNumber(post.comments)} comments
          </ThemedText>
        </TouchableOpacity>
        <ThemedText style={styles.timestamp}>{post.timestamp}</ThemedText>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  postCard: {
    marginBottom: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    overflow: 'hidden',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  username: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  leftActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    marginHorizontal: 5,
  },
  postInfo: {
    padding: 10,
  },
  likeCount: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  captionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  caption: {
    fontSize: 14,
    marginLeft: 5,
  },
  viewComments: {
    fontSize: 14,
    color: '#007AFF',
    marginTop: 5,
  },
  timestamp: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});
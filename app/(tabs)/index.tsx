'use client';

import React, { useState } from 'react';
import { StyleSheet, FlatList, View, RefreshControl } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { HelloWave } from '@/components/HelloWave';
import { StoriesRow } from '@/components/index/StoriesRow';
import { PostCard } from '@/components/index/PostCard';


export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);

  // ข้อมูลเรื่องราว (stories)
  const stories = [
    {
      id: 'user1',
      name: 'Your Story',
      avatarUrl: 'https://i.pinimg.com/736x/3d/91/26/3d9126e00ee953735b1cf2152b4759c7.jpg',
      hasUnseenStory: false
    },
    {
      id: 'user2',
      name: 'ส้มเหมียว',
      avatarUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-03.jpg',
      hasUnseenStory: true
    },
    {
      id: 'user3',
      name: 'แมวเทา',
      avatarUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-04.jpg',
      hasUnseenStory: true
    },
    {
      id: 'user4',
      name: 'แมวเหมียว',
      avatarUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-05.jpg',
      hasUnseenStory: false
    },
    {
      id: 'user5',
      name: 'ทิกเกอร์',
      avatarUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-02.jpg',
      hasUnseenStory: true
    },
    {
      id: 'user6',
      name: 'คุณนายมีเหมียว',
      avatarUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-01.jpg',
      hasUnseenStory: true
    }
  ];

  // ข้อมูลโพสต์
  const posts = [
    {
      id: 'post1',
      user: {
        id: 'user2',
        name: 'ส้มเหมียว',
        avatarUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-03.jpg'
      },
      imageUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-03.jpg',
      caption: 'เหมียวๆ วันนี้ไปเที่ยวทะเลมา อากาศดีมาก #แมวเที่ยว #ทะเล',
      likes: 1542,
      comments: 89,
      timestamp: '2 ชั่วโมงที่แล้ว'
    },
    {
      id: 'post2',
      user: {
        id: 'user5',
        name: 'ทิกเกอร์',
        avatarUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-02.jpg'
      },
      imageUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-02.jpg',
      caption: 'นอนพักผ่อนรับแสงแดดยามเช้า สบายจัง #แมวนอน #สบายตัว #ยามเช้า',
      likes: 2876,
      comments: 142,
      timestamp: '5 ชั่วโมงที่แล้ว'
    },
    {
      id: 'post3',
      user: {
        id: 'user3',
        name: 'แมวเทา',
        avatarUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-04.jpg'
      },
      imageUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-04.jpg',
      caption: 'ได้รับของเล่นใหม่จากเจ้านาย ชอบมากเลย 😻 #ของเล่นแมว #ความสุข',
      likes: 9452,
      comments: 325,
      timestamp: '8 ชั่วโมงที่แล้ว'
    },
    {
      id: 'post4',
      user: {
        id: 'user6',
        name: 'คุณนายมีเหมียว',
        avatarUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-01.jpg'
      },
      imageUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-01.jpg',
      caption: 'วันนี้ได้อาหารพิเศษ อร่อยจังเลย ขอบคุณที่เลี้ยงดีๆนะ #อาหารแมว #แมวหิว',
      likes: 6841,
      comments: 201,
      timestamp: '12 ชั่วโมงที่แล้ว'
    }
  ];

  // Handler functions
  const handleLikePress = (postId: string) => {
    console.log(`Liked post: ${postId}`);
  };

  const handleCommentPress = (postId: string) => {
    console.log(`Comment on post: ${postId}`);
  };

  const handleUserPress = (userId: string) => {
    console.log(`Navigate to user profile: ${userId}`);
  };

  const handleStoryPress = (userId: string) => {
    console.log(`Open story for user: ${userId}`);
  };

  const onRefresh = () => {
    setRefreshing(true);
    // จำลองการโหลดข้อมูลใหม่
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  // Header ที่แสดงเฉพาะในส่วนบนสุดของ FlatList
  const renderHeader = () => (
    <>
      <ThemedView style={styles.headerContainer}>
        <View style={styles.titleContainer}>
          <ThemedText type="title" style={styles.title}>Meow Feed <HelloWave /></ThemedText>
        </View>
        <View style={styles.iconsContainer}>
          <Ionicons name="heart-outline" size={24} color="#333" style={styles.headerIcon} />
          <Ionicons name="chatbubble-outline" size={24} color="#333" style={styles.headerIcon} />
        </View>
      </ThemedView>
      <StoriesRow stories={stories} onStoryPress={handleStoryPress} />
    </>
  );

  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <PostCard
          post={item}
          onLikePress={handleLikePress}
          onCommentPress={handleCommentPress}
          onUserPress={handleUserPress}
        />
      )}
      keyExtractor={item => item.id}
      ListHeaderComponent={renderHeader}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      showsVerticalScrollIndicator={false}
    />
  );
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: '#fff',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingTop: 20,
  },
  iconsContainer: {
    flexDirection: 'row',
    paddingTop: 20,
  },
  headerIcon: {
    marginLeft: 20,
  }
});
'use client';
import React, { useState } from 'react';
import { StyleSheet, Image, TouchableOpacity, View, SafeAreaView, FlatList } from 'react-native';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Ionicons } from '@expo/vector-icons';
import { ProfilePostsSection } from '@/components/profile/ProfilePostsSection';


// สร้าง component ส่วนหัวของ Profile แยกออกมา
function ProfileHeader({
  name,
  email,
  profileImage,
  posts,
  followers,
  following,
  onAddFollower
}: {
  name: string;
  email: string;
  profileImage: string;
  posts: number;
  followers: number;
  following: number;
  onAddFollower: () => void;
}) {
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
    <View>
      <View style={styles.settingContainer}>
        <Ionicons name="settings" style={styles.settingButton} size={24} />
      </View>

      <ThemedView style={styles.header}>
        <Image
          source={{ uri: profileImage }}
          style={styles.profileImage}
        />
        <ThemedText type="title" style={styles.name}>{name}</ThemedText>
        <ThemedText type="subtitle" style={styles.email}>{email}</ThemedText>
      </ThemedView>

      <View style={styles.statsContainer}>
        <View style={styles.statItem}>
          <ThemedText type="title" style={styles.statNumber}>{posts}</ThemedText>
          <ThemedText type="subtitle" style={styles.statLabel}>Posts</ThemedText>
        </View>
        <TouchableOpacity style={styles.statItem} onPress={onAddFollower}>
          <ThemedText type="title" style={styles.statNumber}>{formatNumber(followers)}</ThemedText>
          <ThemedText type="subtitle" style={styles.statLabel}>Followers</ThemedText>
        </TouchableOpacity>
        <View style={styles.statItem}>
          <ThemedText type="title" style={styles.statNumber}>{following}</ThemedText>
          <ThemedText type="subtitle" style={styles.statLabel}>Following</ThemedText>
        </View>
      </View>

      <TouchableOpacity style={styles.editButton} onPress={() => console.log("Edit Profile Pressed")}>
        <ThemedText style={styles.editButtonText}>Edit Profile</ThemedText>
      </TouchableOpacity>
    </View>
  );
}
export default function ProfileScreen() {
  const name = "แมว ขาว";
  const email = "meow_white@meow.ai";
  const profileImage = "https://i.pinimg.com/736x/3d/91/26/3d9126e00ee953735b1cf2152b4759c7.jpg";
  const posts = 254;
  const [followers, setFollowers] = useState(2900000);
  const following = 150;

  // Sample posts data
  const postsData = [
    {
      id: '1',
      imageUrl: 'https://i.pinimg.com/736x/3d/91/26/3d9126e00ee953735b1cf2152b4759c7.jpg',
      caption: 'เหมียวๆ วันนี้อากาศดีจัง #แมวขาว #ธรรมชาติ',
      likes: 5420,
      comments: 132,
      timestamp: '2 ชั่วโมงที่แล้ว'
    },
    {
      id: '2',
      imageUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-02.jpg',
      caption: 'นอนสบายมากวันนี้ #แมวนอน #แมวขี้เกียจ',
      likes: 8743,
      comments: 254,
      timestamp: '1 วันที่แล้ว'
    },
    {
      id: '3',
      imageUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-05.jpg',
      caption: 'ได้ของเล่นใหม่แล้ว #ของเล่นแมว #ความสุข',
      likes: 7215,
      comments: 187,
      timestamp: '3 วันที่แล้ว'
    },
    {
      id: '4',
      imageUrl: 'https://puprle.com/wp-content/uploads/2022/05/cat-04.jpg',
      caption: 'วันนี้ไปเดินเล่นที่สวน #สวนสาธารณะ #แมวเที่ยว',
      likes: 6321,
      comments: 145,
      timestamp: '1 สัปดาห์ที่แล้ว'
    },
  ];

  function addFollower(currentFollowers: number, newFollowers = 1) {
    return currentFollowers + newFollowers;
  }

  const handleAddFollower = () => {
    setFollowers(prev => addFollower(prev, 1));
  };

  // สร้าง component ที่จะใช้ใน FlatList
  const renderContent = () => (
    <View style={styles.contentContainer}>
      <ProfileHeader
        name={name}
        email={email}
        profileImage={profileImage}
        posts={posts}
        followers={followers}
        following={following}
        onAddFollower={handleAddFollower}
      />
      <ProfilePostsSection posts={postsData} />
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* ใช้ ListHeaderComponent แทนการซ้อน ScrollView */}
      <FlatList
        data={[{ key: 'content' }]}
        renderItem={() => renderContent()}
        keyExtractor={item => item.key}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  contentContainer: {
    flex: 1,
  },
  // ส่วนของการตั้งค่า
  settingContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    padding: 10,
    marginTop: 20,
  },
  settingButton: {
    padding: 10,
    fontSize: 24,
  },
  // ส่วนของข้อมูลส่วนตัว
  header: {
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 15,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: '#666',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginHorizontal: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  // ส่วนของปุ่มแก้ไขข้อมูล
  editButton: {
    backgroundColor: '#007AFF',
    marginHorizontal: 20,
    marginTop: 20,
    marginBottom: 20,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
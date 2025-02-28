import React, { useState } from 'react';
import { StyleSheet, Pressable, Dimensions, View, Image, ScrollView } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Ionicons from "react-native-vector-icons/Ionicons";

const { width } = Dimensions.get('window');
const categorySize = width * 0.42;

const categories = [
  { id: 1, name: 'Nature', icon: 'leaf', color: '#4CAF50' },
  { id: 2, name: 'Architecture', icon: 'business', color: '#5C6BC0' },
  { id: 3, name: 'People', icon: 'people', color: '#FF9800' },
  { id: 4, name: 'Technology', icon: 'hardware-chip', color: '#00BCD4' },
  { id: 5, name: 'Food', icon: 'restaurant', color: '#F44336' },
  { id: 6, name: 'Animals', icon: 'paw', color: '#9C27B0' },
];

export default function CategoryScreen() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryPress = (category: { id: any; name: any; icon?: string; color?: string; }) => {
    setSelectedCategory(category.id);
    console.log(`Selected category: ${category.name}`);
    console.log(`Selected category: ${category.icon}`);
    console.log(`Selected category: ${category.color}`);
  };

  return (
    <ScrollView style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>Explore Categories</ThemedText>
        <ThemedText style={styles.subtitle}>Discover amazing content</ThemedText>
      </ThemedView>

      <ThemedView style={styles.categoriesGrid}>
        {categories.map((category) => (
          <Pressable
            key={category.id}
            style={({ pressed }) => [
              styles.categoryItem,
              selectedCategory === category.id && styles.selectedItem,
              pressed && styles.pressedItem
            ]}
            onPress={() => handleCategoryPress(category)}
          >
            <ThemedView style={[styles.categoryBox, { backgroundColor: category.color }]}>
              <ThemedView style={styles.iconContainer}>
                <Ionicons name={category.icon} size={36} color="#ffffff" />
              </ThemedView>
              <ThemedText style={styles.categoryName}>{category.name}</ThemedText>
            </ThemedView>
          </Pressable>
        ))}
      </ThemedView>

      <ThemedView style={styles.featuredSection}>
        <ThemedText style={styles.sectionTitle}>Featured Collection</ThemedText>
        <ThemedView style={styles.featuredBox}>
          <Ionicons name="camera" size={28} color="#555" />
          <ThemedText style={styles.featuredText}>Weekly Highlights</ThemedText>
          <Pressable style={styles.viewButton}>
            <ThemedText style={styles.viewButtonText}>View All</ThemedText>
          </Pressable>
        </ThemedView>
      </ThemedView>

      <ThemedView style={styles.recentSection}>
        <ThemedText style={styles.sectionTitle}>Recent Uploads</ThemedText>
        <ThemedView style={styles.recentGrid}>
          {[1, 2, 3].map((item) => (
            <Pressable key={item} style={styles.recentItem}>
              <ThemedView style={styles.recentImagePlaceholder}>
                <Ionicons name="image-outline" size={24} color="#888" />
              </ThemedView>
              <ThemedText style={styles.recentItemText}>Item {item}</ThemedText>
            </Pressable>
          ))}
        </ThemedView>
      </ThemedView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    opacity: 0.7,
    marginBottom: 12,
  },
  categoriesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  categoryItem: {
    width: categorySize,
    marginBottom: 16,
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  selectedItem: {
    transform: [{ scale: 0.98 }],
  },
  pressedItem: {
    opacity: 0.9,
    transform: [{ scale: 0.98 }],
  },
  categoryBox: {
    borderRadius: 16,
    height: categorySize,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: 'rgba(255,255,255,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  categoryName: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  featuredSection: {
    marginTop: 16,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    marginBottom: 16,
  },
  featuredBox: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    backgroundColor: 'rgba(200,200,200,0.2)',
    borderWidth: 1,
    borderColor: 'rgba(200,200,200,0.3)',
    marginBottom: 20,
  },
  featuredText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 16,
    flex: 1,
  },
  viewButton: {
    backgroundColor: '#0066cc',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  viewButtonText: {
    color: '#fff',
    fontWeight: '500',
  },
  recentSection: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  recentGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recentItem: {
    width: '31%',
  },
  recentImagePlaceholder: {
    aspectRatio: 1,
    borderRadius: 8,
    backgroundColor: 'rgba(200,200,200,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  recentItemText: {
    fontSize: 14,
  }
});
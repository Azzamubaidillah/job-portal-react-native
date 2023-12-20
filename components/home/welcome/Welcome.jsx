import React, { useState } from 'react';
import { useRouter } from 'expo-router';
import { 
  View, 
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList
} from 'react-native'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const Welcome = () => {
  const router = useRouter()
  const [activeJobTyoe, setActiveJobTyoe] = useState("Full-time")

  const jobTypes = ["Full-time", "Part-time","Contract"]

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Azzam</Text>
        <Text style={styles.welcomeMessage}>Find your Perfect Job</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
        <TextInput
          placeholder='Search Job'
          value=""
          style={styles.searchInput}
          onChange={() => {}} 
        />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={icons.search}
            resizeMode='cover'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={styles.tab(activeJobTyoe, item)}
              onPress={() => {
                setActiveJobTyoe(item)
                router.push(`/search/${item}`)
              }}
              
              >
              <Text style={styles.tabText(activeJobTyoe, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: SIZES.small }}
        />
      </View>
    </View>
  )
} 

export default Welcome
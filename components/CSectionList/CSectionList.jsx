import React from 'react';
import { View, Text, FlatList, SectionList, TouchableOpacity } from 'react-native';

// ... your data
let data = [
    {name:'Recommended',id:1,data:[]},
    {name:'Packages',id:2,data:[]},
    {name:'Face Care',id:3,data:[]},
    {name:'Hair Cutting',id:4,data:[]},
    {name:'Nail Cutting',id:5,data:[]},
]

const CSectionList = () => {
  return (
    <View>
      <FlatList
        horizontal
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity>
          <View style={{ margin: 10,
          alignItems: 'center',
          borderColor: 'blue',
          borderBottomWidth: 1,
          borderTopWidth: 1,
          borderLeftWidth: 1,
          borderRightWidth: 1,
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal:15,
          paddingVertical:5
        //   justifyContent:'center' 
          }}>
            {/* <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} /> */}
            <Text>{item.name}</Text>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CSectionList

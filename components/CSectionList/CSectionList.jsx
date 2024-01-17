import React from 'react';
import { View, Text, FlatList, SectionList, TouchableOpacity } from 'react-native';

const CSectionList = (props) => {
  return (
    <View>
      <FlatList
        horizontal
        data={props.data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={()=>props.setActiveId(item)}>
          <View style={{ margin: 5,
          backgroundColor:item.id == props.activeId.id?'#F2EFFF':'white',
          alignItems: 'center',
          borderColor: item.id == props.activeId.id?'transparent':'blue',
          borderBottomWidth: item.id == props.activeId.id?1: 1,
          borderTopWidth: item.id == props.activeId.id?1: 1,
          borderLeftWidth: item.id == props.activeId.id?1: 1,
          borderRightWidth: item.id == props.activeId.id?1: 1,
          borderRadius: 8,
          display: 'flex',
          flexDirection: 'row',
          paddingHorizontal:15,
          paddingVertical:5, 
          }}
          >
            {/* <Image source={{ uri: item.image }} style={{ width: 100, height: 100 }} /> */}
            <Text style={{color:item.id == props.activeId.id? '#6440FE':'#6440FE',fontWeight:'bold'}}>{item.name}</Text>
          </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default CSectionList

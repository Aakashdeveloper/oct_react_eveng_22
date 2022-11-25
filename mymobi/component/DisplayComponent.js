import React from 'react';
import {StyleSheet,View, ScrollView, Text, Image} from 'react-native';

function DisplayList(props){

    const renderList = ({restList}) => {
        if(restList){
            return restList.map((item) => {
                return (
                    <View key={item._id}>
                        <Image
                            style={styles.logo}
                            source={{uri: item.restaurant_thumb}}
                        />
                        <Text>{item.restaurant_name}</Text>
                    </View>
                )
            })
        }
    }

    return(
        <View>
            <ScrollView style={styles.container}>
                {renderList(props)}
            </ScrollView>
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    text:{
        fontSize:42
    },
    logo: {
        width: 170,
        height: 170,
    }
})


export default DisplayList;
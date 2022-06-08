import { View, TextInput, Button, StyleSheet, Alert } from 'react-native';
import React, { useState } from 'react';
import Client from '../../components/Client';
import Labios from '../../components/Labios';
import api from '../../services/api';

const Dashboard: React.FC =()=>{
    const [text, onChangeText] = useState("Useless Text");
    const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
      });

      const submit = async () => {
        try {
            const response = await api.get('/cid')
            console.log(response.data)
            Alert.alert('deu certo')
        } catch (error) {
            console.log('err', error)
        }        
      }

    return(
        <View>
            <Client/>
            <Labios/>
            <Button
                title="Press me"
                color="#f194ff"
                onPress={() => submit()}
            />
        </View>
    )
}

export default Dashboard;
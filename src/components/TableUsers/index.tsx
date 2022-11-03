import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, ScrollView} from 'react-native';
import { Table,  Row, } from 'react-native-table-component';
import ClientForm from '../Client';
import api from '../../services/api';

const [userlist, setUserlist] = useState<any>([]);

export default function TableUser (){
    
    const getuser = async () => {
        try {
            const response = await api.get('/user')
            const list: any = [];
            if (response.data) {
                response.data.map((item:any) => {
                  const { id, name, cpf } = item;
                  list.push({ label: `${name}-${cpf}`, value: id });
                });
                setUserlist(list);
              }
        } catch (error) {
            console.log('err', error)
        }
    }
    // chamar funcao
    getuser()
    return (
        <View style={styles.container}>
          <ScrollView horizontal={true}>
            <View>
              <Table borderStyle={{borderColor: '#C1C0B9'}}>
                <Row style={styles.head} textStyle={styles.text}/>
              </Table>
              <ScrollView style={styles.dataWrapper}>
                <Table borderStyle={{borderColor: '#C1C0B9'}}>
                  {
                    getuser.apply((index:any,cpf:any) => (
                      <Row
                        key={index} 
                        data={userlist}
                        widthArr={cpf}
                        style={[styles.row]}
                        textStyle={styles.text}
                      />
                    ))
                  }
                </Table>
              </ScrollView>
            </View>
          </ScrollView>
        </View>
      )
  }
  const styles = StyleSheet.create({
    container: { 
      flex: 1, 
      padding: 16, 
      paddingTop: 30, 
      backgroundColor: '#ffffff' 
    },
    head: { 
      height: 50, 
      backgroundColor: '#6F7BD9' 
    },
    text: { 
      textAlign: 'center', 
      fontWeight: '200' 
    },
    dataWrapper: { 
      marginTop: -1 
    },
    row: { 
      height: 40, 
      backgroundColor: '#F7F8FA' 
    }
  });
    

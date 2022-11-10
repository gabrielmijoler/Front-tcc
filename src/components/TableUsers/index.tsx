import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet, TextInput, ScrollView } from 'react-native';
// import { Table, Row,Rows } from 'react-native-table-component';
// import ClientForm from '../Client';
// import api from '../../services/api';
import { DataTable } from 'react-native-paper';

const optionsPerPage = [2, 3, 4];

const MyComponent: React.FC = () => {
  const [page, setPage] = React.useState<number>(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <DataTable>
      <DataTable.Header>
        <DataTable.Title>Dessert</DataTable.Title>
        <DataTable.Title numeric>Calories</DataTable.Title>
        <DataTable.Title numeric>Fat</DataTable.Title>
      </DataTable.Header>

      <DataTable.Row>
        <DataTable.Cell>Frozen yogurt</DataTable.Cell>
        <DataTable.Cell numeric>159</DataTable.Cell>
        <DataTable.Cell numeric>6.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Row>
        <DataTable.Cell>Ice cream sandwich</DataTable.Cell>
        <DataTable.Cell numeric>237</DataTable.Cell>
        <DataTable.Cell numeric>8.0</DataTable.Cell>
      </DataTable.Row>

      <DataTable.Pagination
        page={page}
        numberOfPages={3}
        onPageChange={(page:any) => setPage(page)}
        label="1-2 of 6"
        optionsPerPage={optionsPerPage}
        itemsPerPage={itemsPerPage}
        setItemsPerPage={setItemsPerPage}
        showFastPagination
        optionsLabel={'Rows per page'}
      />
    </DataTable>
  );
}

export default MyComponent;

// const TableUser: React.FC = () => {

//   const styles = StyleSheet.create({
//     container: { 
//       flex: 1,
//       padding: 18,
//       paddingTop: 35,
//       backgroundColor: '#ffffff' 
//     },
//     HeadStyle: { 
//       height: 50,
//       alignContent: "center",
//       backgroundColor: '#ffe0f0'
//     },
//     TableText: { 
//       margin: 10
//     }
//   });

//   const [userlist, setUserlist] = useState<any>([]);
//   const HeadTable = ['Nome', 'CPF', 'Editar']

//   const getuser = async () => {
//     try {
//       const response = await api.get('/user')
//       const list: any = [];
//       if (response.data) {
//         response.data.map((item: any) => {
//           const { id, name, cpf } = item;
//           list.push([name,cpf,id ]);
//         });
//         setUserlist(list);
//       }
//     } catch (error) {
//       console.log('err', error)
//     }
//   }
//   // chamar funcao

//   useEffect(() => {
//     getuser()
//   })
//   return (
//     <View style={styles.container}>
//       <ScrollView horizontal={true}>
//         <View>
//           <ScrollView >
//             <Table borderStyle={{ borderColor: '#C1C0B9' }}>
//               <Row data={HeadTable} style={styles.HeadStyle} textStyle={styles.TableText}/>
//               <Rows data={userlist} textStyle={styles.TableText}/>
//             </Table>
//           </ScrollView>
//         </View>
//       </ScrollView>
//     </View>
//   )
// }
// export default TableUser;

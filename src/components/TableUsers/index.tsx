import React, { useState, useEffect } from 'react';
import { Button, SafeAreaView, StyleSheet } from 'react-native';
import { DataTable, Text } from 'react-native-paper';
import api from '../../services/api'

const TableUser: React.FC = () => {

  // const numberOfItemsPerPageList = [2, 3, 4];

  // const items = [
  //   {
  //     key: 1,
  //     name: 'Page 1',
  //   },
  //   {
  //     key: 2,
  //     name: 'Page 2',
  //   },
  //   {
  //     key: 3,
  //     name: 'Page 3',
  //   },
  // ];
  // const [page, setPage] = React.useState(0);
  // const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
  // const from = page * numberOfItemsPerPage;
  // const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);

   const [userlist, setUserlist] = useState<any>([]);

  // const getuser = async () => {
  //   // body:JSON.stringify([])
  //   try {
  //     const response = await api.get('/cliente')
  //     console.log(response);
  //     const list: any = [];
  //     if (response.data) {
  //       response.data.map((item: any) => {
  //         const { id, name, cpf } = item;
  //         // list.push(
  //         // <DataTable.Row key={id}>
  //         //   <DataTable.Cell >{name}</DataTable.Cell>
  //         //   <DataTable.Cell>{cpf}</DataTable.Cell>
  //         //   <DataTable.Cell>EDITAR</DataTable.Cell>
  //         // </DataTable.Row>);
  //       });
  //       setUserlist(list);
  //     }
  //   } catch (error) {
  //     console.log('err', error)
  //   }
  // }


  React.useEffect(() => {
    // const getuser = async () => {
    //   // body:JSON.stringify([])
    //   try {
    //     const response = await api.get('/cliente')  
    //     console.log('response',response);
    //     const list: any = [];
    //     if (response.data) {
    //       response.data.map((item: any) => {
    //         const { id, name, cpf } = item;
    //         list.push({ label: `${name}-${cpf}`, value: id })
    //         // <DataTable.Row key={item.id}>
    //         //   <DataTable.Cell >{item.name}</DataTable.Cell>
    //         //   <DataTable.Cell>{item.cpf}</DataTable.Cell>
    //         //   <DataTable.Cell>EDITAR</DataTable.Cell>
    //         // </DataTable.Row>);
    //       });
    //     setUserlist(response);
    //     }
    //    } catch (error) {
    //      console.log('err', error)
    //    }
    // }

    const getuser = async () => {
      try {
          const response = await api.get('/cliente')
          const list: any = [];
          if (response.data) {
              response.data.map((item:any) => {
                const { id, cpf, nome } = item;
                list.push(
                <DataTable.Row key={id}>
                    <DataTable.Cell >{nome}            </DataTable.Cell>
                    <DataTable.Cell>{cpf}              </DataTable.Cell>
                    <DataTable.Cell>EDITAR             </DataTable.Cell>
                </DataTable.Row>
                )
              });
              setUserlist(list);
            }
      } catch (error) {
          console.log('err', error)
      }
  }
    getuser()
    console.log(setUserlist)
    // setPage(0);
  }, []);


  
  const data = {
    columns: ['NOME', 'CPF', 'EDITAR'],
  };

  const { columns } = data;

  return (
      <SafeAreaView style={styles.container}>
        <DataTable>
          <DataTable.Header>
            {columns.map((column, idx) => (
              <DataTable.Title key={column}>{column}</DataTable.Title>
            ))}
          </DataTable.Header>
          <DataTable.Row 
            children={userlist}
          />
            
          {/* <DataTable.Pagination
            page={page}
            numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
            onPageChange={page => setPage(page)}
            label={`${from + 1}-${to} of ${items.length}`}
            showFastPaginationControls
            numberOfItemsPerPageList={numberOfItemsPerPageList}
            numberOfItemsPerPage={numberOfItemsPerPage}
            onItemsPerPageChange={onItemsPerPageChange}
            selectPageDropdownLabel={'Linhas por pagina'} /> */}
        </DataTable>
      </SafeAreaView>

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


export default TableUser;

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { DataTable } from 'react-native-paper';
import api from '../../services/api'

const TableUser: React.FC = () => {
  const numberOfItemsPerPageList = [2, 3, 4];

  const items = [
    {
      key: 1,
      name: 'Page 1',
    },
    {
      key: 2,
      name: 'Page 2',
    },
    {
      key: 3,
      name: 'Page 3',
    },
  ];
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);
  const from = page * numberOfItemsPerPage;
  const to = Math.min((page + 1) * numberOfItemsPerPage, items.length);
  const [userlist, setUserlist] = useState<any>([]);

  const getuser = async () => {
    try {
      const response = await api.get('/user')
      const list: any = [];
      if (response.data) {
        response.data.map((item: any) => {
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

  React.useEffect(() => {
    setPage(0);
  }, [numberOfItemsPerPage]);

  const data = {
    columns: ['NOME','CPF', 'EDITAR'],
    results: [
      { column1: 'test', column2: 'passed', column3: "asd" },
      { column1: 'second test', column2: 'passed as well', column3: "asd" },
      { column1: 'terce a', column2: 'passed as well', column3: "asd" },
    ],
  };

  const { columns, results } = data;

  return (
    <>
    <SafeAreaView style={styles.container}>
      <DataTable>
        <DataTable.Header>
          {columns.map((column, idx) => (
            <DataTable.Title key={column}>{column}</DataTable.Title>
          ))}
        </DataTable.Header>

        {results.map((result, idx) => (
          <DataTable.Row key={idx}>
            <DataTable.Cell>{result.column1}</DataTable.Cell>
            <DataTable.Cell>{result.column2}</DataTable.Cell>
            <DataTable.Cell>{result.column3}</DataTable.Cell>
          </DataTable.Row>
        ))}
        {/* <DataTable.Pagination
          page={page}
          numberOfPages={Math.ceil(items.length / numberOfItemsPerPage)}
          onPageChange={page => setPage(page)}
          label={`${from + 1}-${to} of ${items.length}`}
          showFastPaginationControls
          numberOfItemsPerPageList={numberOfItemsPerPageList}
          numberOfItemsPerPage={numberOfItemsPerPage}
          onItemsPerPageChange={onItemsPerPageChange}
          selectPageDropdownLabel={'Rows per page'} /> */}
      </DataTable>
    </SafeAreaView>
    </>
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

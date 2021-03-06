import { View, Text, TextInput, StyleSheet, SafeAreaView, TouchableOpacity, Alert, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import DropDownPicker from 'react-native-dropdown-picker';
import { Client } from '../../models';
import DatePicker from 'react-native-datepicker';
import Picker from 'react-native-picker-select';
import RNPickerSelect from 'react-native-picker-select'

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        color: "#000",
        backgroundColor: "#f3F2F2"
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'green',
        padding: 10,
        borderRadius: 6,
        marginTop: 50,
    },
    fail:{
        color: '#dc3545',
    },
    select: {
        minHeight: 40,
        backgroundColor: '#dfdfdf',
        width: 373,
        margin: 12,
        
    },
    text: {
        color: '#000',
        marginLeft: 12,
        marginTop:5,
    },
    dataComponent:{
        width:350,
        margin:20,
    },
    obs:{
        backgroundColor: '#d3d3d3',
    }
});
interface Props{
    dataclient: (data: Client)=> void
} 


const ClientForm: React.FC<Props> = ({dataclient}) => {
    const [name, setName] = useState("");
    const [emails, setEmails] = useState("");
    const [sexo, setSexo] = useState("");
    const [cpf, setCpf] = useState("");
    const [phone, setPhone] = useState("");
    const [data, setData] = useState("");
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [cvstatus, setCvstatus] = useState("");
    const [prof, setProf] = useState("");
    const [relig, setRelig] = useState("");
    const [itemCompaniesSelect, setItemCompaniesSelect] = useState<any>([]);
    const [optionSelected, setOptionSelected] = useState<any>();
    const [isOpen, setIsOpen] = useState(false);
    const [sexox, setSexox] = useState(['MASCULINO', 'FEMININO', 'OUTROS']);
    const [selecionadosexo, setSelecionadosexo] = useState([]);
    const pickerRef = React.useRef<RNPickerSelect | null>()
    
    useEffect(() => {
        const getcid = async () => {
            try {
                const response = await api.get('/cid')
                const list: any = [];
                if (response.data) {
                    response.data.map((item:any) => {
                      const { id, cod, description } = item;
                      list.push({ label: `${cod}-${description}`, value: id });
                    });
                    setItemCompaniesSelect(list);
                  }
            } catch (error) {
                console.log('err', error)
            }
        }
        // chamar funcao
        getcid()
    }, [])

    useEffect(()=>{
        dataclient({
            nome:name,
            email: emails,
            sexo: sexo,
            cpf: cpf,
            profissao: prof,
            telefone: phone,
            religiao: relig,
            estadocivil: cvstatus,
            datanascimento: data,
            idCid: optionSelected,
            createdAt: null,
            updatedAt: null,
        }as Client)
    }, [
        sexo,
        emails,
        name,
        cpf,
        phone,
        data,
        cvstatus,
        prof,
        relig,
        optionSelected,
    ])

    return (
        <View>
            <Text style={styles.text}>Nome Completo</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Gabriel Silva"
            />
            <Text style={styles.text}>Endere??o(Rua, Bairro)</Text>
            <TextInput
                style={styles.input}
                onChangeText={setEmails}
                value={emails}
                placeholder="Endere??o"
            />
            <Text style={styles.text}>N??mero da casa</Text>
            <TextInput
                style={styles.input}
                onChangeText={setCpf}
                value={cpf}
                placeholder="N??"
                keyboardType="numeric"
            />
            <Text style={styles.text}>Telefone</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPhone}
                value={phone}
                placeholder="99999-9999"
                keyboardType="numeric"
            />
            {/* <DatePicker
                style={{width: 200}}
                date={data}
                mode="date"
                placeholder="select date"
                format="YYYY-MM-DD"
                minDate="2016-05-01"
                maxDate="2016-06-01"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                    dateIcon: {
                        position: 'absolute',
                        left: 0,
                        top: 4,
                        marginLeft: 0
                    },
                    dateInput: {
                        marginLeft: 36
                    }
                }}
                onDateChange={(data) => {setData}}
            /> */}
            {/* <DatePicker
                selected={selectedDate}
                onChange={date => setSelectedDate(date)}
                placeholderText={'dd/mm/yyyy'}
                filterDate={(date:any) => date.getDay() !== 6 && date.getDay() !== 0} // weekends cancel
                showYearDropdown // year show and scrolldown alos
                scrollableYearDropdown
            /> */}
            {/* <Picker
                selectedValue={selecionadosexo}
                onValueChange={(itemValue:any) => setSelecionadosexo(itemValue)}
                >
                    {
                        sexox.map(cr => {
                            return <Picker.item label={cr} value={cr} />
                        })
                    }
            </Picker> */}
            <RNPickerSelect
                ref={r => pickerRef.current = r}
                value={3}
                placeholder={{ label: '3', value: '3' }}
                onValueChange={() => console.log('change')}
                items={[
                    { label: "Masculino", value: "Masculino" },
                    { label: "Femenino", value: "Femenino" },
                ]}
            />
            <Text style={styles.text}>Sexo</Text>
            <TextInput
                style={styles.input}
                onChangeText={setSexo}
                value={sexo}
                placeholder="Masculino, Feminino, Outros"
                keyboardType="default"
            />
            <Text style={styles.text}>Estado Civil</Text>
            <TextInput
                style={styles.input}
                onChangeText={setCvstatus}
                value={cvstatus}
                placeholder="Solteiro(a), Casado(a), Vi??va(o)"
                keyboardType="default"
            />
            <Text style={styles.text}>Profiss??o</Text>
            <TextInput
                style={styles.input}
                onChangeText={setProf}
                value={prof}
                placeholder="Engenheiro, Dona de casa, etc"
                keyboardType="default"
            />
            <Text style={styles.text}>Religi??o</Text>
            <TextInput
                style={styles.input}
                onChangeText={setRelig}
                value={relig}
                placeholder="Catolico, Espirita, etc"
                keyboardType="default"
            />
            <Text style={styles.text}>CID</Text>
            <DropDownPicker
                open={isOpen}
                value={optionSelected}
                items={itemCompaniesSelect}
                setOpen={setIsOpen}
                setValue={setOptionSelected}
                placeholder="Selecione um CID"
                searchPlaceholder="Pesquise uma CID"
                searchable
                searchTextInputStyle={{
                    color: "#000",
                }}
                  searchContainerStyle={{
                    borderBottomColor: "#dfdfdf",
                }}
                style={styles.select}
                dropDownContainerStyle={{
                    backgroundColor:'#dfdfdf',
                    width: 370,
                    margin: 12
                }}
            />
        </View>
    )
}

export default ClientForm;
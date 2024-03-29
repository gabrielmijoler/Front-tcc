import { View, Text, StyleSheet, TextInput} from 'react-native';
import React, { createRef, useEffect, useState } from 'react';
import api from '../../services/api';
import DropDownPicker from 'react-native-dropdown-picker';
import { Client, IArraySelect, IBasicArray } from '../../models';
import DatePicker from 'react-native-datepicker';
import RNPickerSelect from 'react-native-picker-select'
import { TextInputMask } from 'react-native-masked-text'
import Picker from 'react-native-picker-select';

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
    },
    // scroll: {
    //     overflow-y: scroll;
    // },
});
interface Props{
    dataclient: (data: Client)=> void
}


const ClientForm: React.FC<Props> = ({dataclient}) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errorEmail, setErrorEmail] = useState("")
    const [cpf, setCpf] = useState("");
    const [errorCpf, setErrorCpf] = useState(null || "");
    const [telefone, setTelefone] = useState("");
    const [errorTelefone, setErrorTelefone] = useState(null || "" )
    const [data, setData] = useState("");
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
    const [cvstatus, setCvstatus] = useState("");
    const [prof, setProf] = useState("");
    const [relig, setRelig] = useState("");
    const [itemCompaniesSelect, setItemCompaniesSelect] = useState<any>([]);
    const [optionSelected, setOptionSelected] = useState<any>();
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [sexo, setSexo] = useState([
        {key:1, label: 'MASCULINO', value: 'MASCULINO'},
        {key:2, label: 'FEMININO', value: 'FEMININO'},
        {key:3, label: 'OUTROS', value: 'OUTROS'}
    ]);

    let ref_cpf = createRef<any>();
    let telefoneField = null

    const validar = () => {
        let error = false
        setErrorEmail('')
        setErrorCpf('')
        // setEmail(email.includes('@'));

        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (!re.test((email).toLowerCase())){
          setErrorEmail('Preencha seu e-mail corretamente')
          error = true
        }
        if (!ref_cpf.current()){
          setErrorCpf("Preencha seu CPF corretamente")
          error = true
        }
        if (telefone == null){
          setErrorTelefone("Preencha seu telefone")
          error = true
        }
        return !error
      }
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
        // setCpf('');
        // setCvstatus('');
        // setData('');
        // setEmail('');
        // setName('');
        // setProf('');
        // setRelig('');
        // setSexo([]);
        // setTelefone('');
        // setItemCompaniesSelect([]);

        dataclient({
            nome:name,
            email: email,
            sexo: [],
            cpf: cpf,
            profissao: prof,
            telefone: telefone,
            religiao: relig,
            estadocivil: cvstatus,
            datanascimento: data,
            idCid: optionSelected,
            createdAt: null,
            updatedAt: null,
        }as Client)
    }, [
        sexo,
        email,
        name,
        cpf,
        telefone,
        data,
        cvstatus,
        prof,
        relig,
    ])

    return (
        <View >
            <Text style={styles.text}>Nome Completo</Text>
            <TextInput
                style={styles.input}
                onChangeText={setName}
                value={name}
                placeholder="Nome Completo"
            />
            <Text style={styles.text}>Email</Text>
            <TextInput
                style={styles.input}
                onChangeText={value => {
                    setEmail(value)
                    setErrorEmail('')
                    }
                }
                value={email}
                keyboardType="email-address"
                placeholder="teste@hotmail.com"
            />
            <Text>{errorEmail}</Text>
            <Text style={styles.text}>CPF</Text>
            <TextInputMask
                placeholder="000.000.000-00"
                type={'cpf'}
                value={cpf}
                onChangeText={value => {
                    setCpf(value)
                    setErrorCpf("")
                    validar()
                    }
                }
                style={styles.input}
                keyboardType="number-pad"
                returnKeyType='done'
                // errorMenssage={errorCpf}
                maxLength={14}
                ref={ref_cpf}
            />
            <Text>{errorCpf}</Text>
            <Text style={styles.text}>Telefone</Text>
            <TextInputMask
            placeholder="(11)99999-0000"
            type={'cel-phone'}
            options={{
                maskType: 'BRL',
                withDDD: true,
                dddMask: '(99) '
            }}
            value={telefone}
            onChangeText={value => {
                setTelefone(value)
                setErrorTelefone('')
                }
            }
            keyboardType="phone-pad"
            returnKeyType="done"
            ref={(ref) => telefoneField = ref}
            style={styles.input}
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
            <Text style={styles.text}>Sexo</Text>
            <DropDownPicker
                style={styles.select}
                open={open}
                value={value}
                items={sexo}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setSexo}
                placeholder={' --  --  --'}
            />
            <Text style={styles.text}>Estado Civil</Text>
            <TextInput
                style={styles.input}
                onChangeText={setCvstatus}
                value={cvstatus}
                placeholder="Solteiro(a), Casado(a), Viúva(o)"
                keyboardType="default"
            />
            <Text style={styles.text}>Profissão</Text>
            <TextInput
                style={styles.input}
                onChangeText={setProf}
                value={prof}
                placeholder="Engenheiro, Dona de casa, etc"
                keyboardType="default"
            />
            <Text style={styles.text}>Religião</Text>
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
                // dropDownContainerStyle={{
                //     backgroundColor:'#dfdfdf',
                //     width: 370,
                //     margin: 12
                // }}
            />
        </View>
    )
}


export default ClientForm;
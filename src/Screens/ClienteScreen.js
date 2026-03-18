import react, {useState} from 'react'
import{View,Text,TextInput,TouchableOpacity,KeyboardAvoidingView,ScrollView,Alert,Platform,StyleSheet}from 'react-native'
import {SafeAreaView}from 'react-native-safe-area-context'

const ClienteScreen = ({navigation, route})=>{
        const {tipoPropiedades} = route.params
        const [nombre, setNombre] = useState('')
        const [cedula, setCedula] = useState('')
        const [telefono, setTelefono] = useState('')
        const [email, setEmail] = useState('')

        //Funcion de validacion

        const validarFormulario =()=>{
            if(!nombre.trim() && !cedula.trim){
                Alert.alert('Campos requeridos','Por favor completar campos de nombre y/o cedula');
                return;
            }
            navigation.navigate('CotizacionScreen'),{
                tipoPropiedades,
                cliente:{
                    nombre:nombre.trim(),
                    cedula:cedula.trim(),
                    telefono:telefono.trim(),
                    email:email.trim()
                }
            }
        }

    return(
        <SafeAreaView>
            <KeyboardAvoidingView className = "flex-1">
                <ScrollView>
                    <Text>Datos del cliente</Text>
                    <Text>Cotizando la propiedad {tipoPropiedades.tipo}</Text>

                    <Text>Nombre completo</Text>
                    <TextInput
                        placeholder='Nombre completo'
                        placeholderTextColor='#9CA3AF'
                        value ={nombre}
                        onChangeText={setNombre}
                    />

                    <Text>Cedula</Text>
                    <TextInput
                        placeholder='Cedula'
                        placeholderTextColor='#9CA3AF'
                        value ={cedula}
                        onChangeText={setCedula}
                    />

                    <Text>Telefono</Text>
                    <TextInput
                        placeholder='Telefono'
                        placeholderTextColor='#9CA3AF'
                        value ={telefono}
                        onChangeText={setTelefono}
                    />

                    <Text>Email</Text>
                    <TextInput
                        placeholder='Email'
                        placeholderTextColor='#9CA3AF'
                        value ={email}
                        onChangeText={setEmail}
                    />
                    <TouchableOpacity
                        onPress={validarFormulario}
                    >
                        <Text>Cotizar</Text>
                    </TouchableOpacity>
                         
                

                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default ClienteScreen
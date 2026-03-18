import react, { useState } from 'react'
import {View, Text, FlatList, TouchableOpacity, Button} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

//IMPORTACION DE DATA
import {tiposPropiedades} from '../Data/properties'

const HomeScreen =({navigation})=>{
    const [tipoSeleccionado, setTipoSeleccionado] = useState(null);

    const renderTipo = (item) => {
        const seleccionado = tipoSeleccionado?.id===item.id
        return(
            <TouchableOpacity
                onPress={()=> setTipoSeleccionado(item)}
            >
                <View>
                    <Text> {item.tipo} </Text>
                    <Text> {item.descripcion} </Text>
                </View>
            </TouchableOpacity>
        )
    }

    const handleContinuar = ()=>{
        if(tipoSeleccionado){
            navigation.navigate('ClienteScreen',{tiposPropiedades: tipoSeleccionado})
        }
    }

    return(
        <SafeAreaView className ="flex-1 bg-gray-50">
            <View className = "flex-1 px-5 py-6">
                <Text>Cotizador inmobiliario</Text>
                <Text>Selecciona el tipo de inmueble que te interesa</Text>
                <FlatList
                    data={tiposPropiedades}
                    renderItem={renderTipo}
                    keyExtractor={ item=> item.id}
                    showsVerticalScrollIndicator = {false}
                />
                //Boton de continuar
                <Button
                    onPress={handleContinuar}
                    disabled={!tipoSeleccionado}
                    title=' Continuar '
                    className = {`py-4 rounded-x1 mb-4 ${tipoSeleccionado ? 'bg-emerald-600' : 'bg-gray-200'} `}
                />
            </View>
        </SafeAreaView>
    )
}
export default HomeScreen
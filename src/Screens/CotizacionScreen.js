import React, {useState, useEffect} from 'react'
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native'
import {SafeAreaView} from 'react-native-safe-area-context'

const CotizacionScreen =({route, navigation})=>{
        const {tipoPropiedades, cliente, estrato} = route.params;
        const [total, setTotal] = useState(0);
        const [cargando, setCargando] = useState(true);

        useEffect(()=>{
            //calculo de impuestos
            const calcularImpuesto =()=>{
                const impuestoEstrato = estrato * 0.05;
                const subTotal = tipoPropiedades.precio; 
                const totalCalculado = subTotal + (setTotal*impuestoEstrato);

                setTotal(totalCalculado);
                setTimeout(()=> {
                    setCargando(false)
                    },1500
                )
            }
            calcularImpuesto();
        },[])
    return(
        <SafeAreaView>
            <View>
                <Text>Cotizacion de inmueble</Text>
            </View>
            <View>
                <Text>Cedula del cliente: {cliente.cedula}</Text>
                <Text>Nombre del cliente: {cliente.nombre}</Text>
                <Text>Tipo de propiedad seleccionada: {tipoPropiedades.tipo}</Text>
                <Text>Estrato de la propiedad: {tipoPropiedades.estrato}</Text>
                <Text>Valor propiedad: {total}</Text>
            </View>
        </SafeAreaView>

    )
}
export default CotizacionScreen
import react from 'react';
import {View, Text, StyleSheet} from 'react-native';

const InfoBox =({titulo, datos})=>{
    return(
        <View>
            <Text> {titulo} </Text>
            {Object.entries(datos).map(([clave, valor])=>(
                <Text key={clave}>
                    <Text> {valor} </Text>
                </Text>
            ))
            }
        </View>

    )

    
}
export default InfoBox
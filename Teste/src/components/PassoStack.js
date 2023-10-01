import { Button, View } from "react-native";

export default props => (
    <View style={{flex: 1}}>
        <View style={{flex: 1}}>
            {props.children}
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
            {   
                props.voltar
                ? <Button
                        title="Voltar"
                        onPress={()=>{
                            props.navigation.goBack()
                        }}
                    />
                : false
            }
            {
                props.avancar 
                ?   <Button 
                        title="Avançar" 
                        onPress={()=>{
                            props.navigation.push(props.avancar, props.avancarParam || null)
                        }}
                    />
                : false
            }
        </View>
    </View>
)
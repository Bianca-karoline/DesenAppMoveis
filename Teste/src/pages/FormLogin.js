import { TouchableOpacity, Text, TextInput, View} from "react-native"
import Estilo from "../components/Estilo"
import { useContext, useState } from "react"
import UserContext from "../context/UserContext";

export default props => {
    [valorLogin, setValorLogin] = useState("");
    [valorSenha, setValorSenha] = useState("");
    const {state} = useContext(UserContext);

    return(
            <View style={Estilo.loginContainer}>
                <TextInput 
                    style={Estilo.loginTextInputs}
                    placeholder="Digite o login"
                    value={valorLogin}
                    onChangeText={ (valorLogin) => setValorLogin(valorLogin)}
                />
                <TextInput
                    style={Estilo.loginTextInputs}
                    placeholder="Digite a senha"
                    value={valorSenha}
                    onChangeText={ (valorSenha) => setValorSenha(valorSenha) }
                    secureTextEntry={true}
                />
                <TouchableOpacity 
                    style={Estilo.loginButton}
                    onPress={ ()=> {
                        const userLogado = state.users.filter( u => u.login === valorLogin)[0]
                        if(userLogado){
                            userLogado.password == valorSenha ? props.navigation.navigate("Page01") : console.warn("Usuário e/ou Senha incorreta!")
                        }
                    }}
                >
                    <Text style={Estilo.loginButtonText}>LOGIN</Text>    
                </TouchableOpacity>
            </View>
    )
}
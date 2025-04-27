import { Text, View, StyleSheet } from 'react-native'
import Button from '../components/Button'

export default function CompleteProfile(navigation) {
    return (
        <View style={styles.container}>

            <Button title="Continue" onPress={() => navigation.navigate('Code')} />

        </View>
    )
}


const styles = StyleSheet.create({
    container: {}
})
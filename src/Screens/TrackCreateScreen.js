import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaView, withNavigationFocus } from 'react-navigation'
import Map from '../components/Map'
import { Context as LocationContext } from '../context/LocationContext'
import useLocation from '../hooks/useLocation'
import '../_mockLocation'

const TrackCreateScreen = ({ isFocused }) => {
    const { addLocation } = useContext(LocationContext)
    const [err] = useLocation(isFocused, addLocation)

    return (
        <SafeAreaView forceInset={{ top: 'always' }} style={styles.container}>
            <Text h2>Create a Track</Text>
            <Map />
            {err ? <Text>Please enable location services</Text> : null}
        </SafeAreaView>
    )
}

export default withNavigationFocus(TrackCreateScreen)

const styles = StyleSheet.create({
    container: {
        marginTop: 30
    }
})

import * as Location from 'expo-location'
const tenMetersWithDegrees = 0.0001
const getLoaction = increment => {
    return {
        times: 1000000,
        coords: {
            speed: 0,
            heading: 0,
            accuracy: 5,
            altitudeAccuracy: 5,
            altitude: 5,
            longitude: 77.1746652 + increment * tenMetersWithDegrees,
            latitude: 28.5731772 + increment * tenMetersWithDegrees
        }
    }
}
let counter = 0
setInterval(() => {
    Location.EventEmitter.emit('Expo.locationChanged', {
        watchId: Location._getCurrentWatchId(),
        location: getLoaction(counter)
    })
    counter++
}, 1000)
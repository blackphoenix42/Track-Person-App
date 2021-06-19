import { useState, useEffect } from "react";
import { Accuracy, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";

export default (shouldTrack, callback) => {
    const [err, setErr] = useState(null)
    const [subscriber, setSubscriber] = useState(null)

    const startWatching = async () => {
        try {
            const res = await requestForegroundPermissionsAsync()
            if (res.granted) {
                setErr(null)
                const sub = await watchPositionAsync({
                    accuracy: Accuracy.BestForNavigation,
                    timeInterval: 1000,
                    distanceInterval: 10
                }, callback)
                setSubscriber(sub)
            } else { setErr("Permission Not Given") }
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        if (shouldTrack) {
            startWatching()
        }
        else {
            subscriber.remove()
            setSubscriber(null)
        }
    }, [shouldTrack])

    return [err]
}
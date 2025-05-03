import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import * as Location from 'expo-location'
import { useEffect } from 'react'
import { useState } from 'react'

const useLocation = () => {
    const [erroMsg, setErrorMsg] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [address, setAddress] = useState("");
    const [loading, setLoading] = useState(true);

    const getLocation = async () => {
        setLoading(true);
        try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("Permission to access location was denied");
            setLoading(false);
            return;
        }

        let location = await Location.getCurrentPositionAsync({});
       // console.log("Location", location);
        
        let addressData = await Location.reverseGeocodeAsync({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            
        });
        //console.log("Address data", addressData);

        if (addressData.length > 0){
            const {name, city, country} = addressData[0];
            setAddress(`${name || ""}, ${city || ""}, ${country || ""}`);
        }else {
            setErrorMsg("No address found for this location");
        }
    } catch (error) {
        setErrorMsg("Failed fetching address");
    } finally {
        setLoading(false);  
    }

       
    };

    useEffect(() => {
        getLocation();
    },[])


  return {address, erroMsg, loading};
   
};

export default useLocation

const styles = StyleSheet.create({})
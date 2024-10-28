import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Project from '../components/Project';
impor StudentInfo from '../components/StudentInfo';


const ProfileScreen = () => {
    return(
        <View style={styles.screen}>
            <StudentInfo 
                fullname="John Doe"
                jobPosition="UI/UX Designer"
                desc="We're passionate about creating beat"
                image={require('../../assets/Avatar-4.jpg')}
            />
            <View style={styles.heading}>
                <Text style={styles.text}>PROJECTS</Text>
                <TouchableOpacity style={styles.btn}>
                    <Text style={styles.btnText}>View All</Text>
                </TouchableOpacity>
            </View>
            <Project first={require('../../assets/project-1.jpg') second={require('../../assets/project-2.png')}}/>
        </View>
    );
}

const styles = StyleSheet.create({
    heading: {
        flexDirection:'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        alignItems: 'center',
        marginTop: 15
    },
    text: {
        fontWeight: 'bold',
        fontSize: 16
    },
    screen: {
        backgroundColor: 'white'
    },
    btnText: {
        fontWeight: 'bold',
        color: 'white'
    },
    btn: {
        backgroundColor: '#FFD700',
    }
})
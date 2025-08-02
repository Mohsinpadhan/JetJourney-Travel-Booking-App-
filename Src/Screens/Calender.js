import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, item } from 'react-native';
import React, { useState } from 'react';
import { Calendar } from 'react-native-calendars'; // Importing Calendar

const Calender = ({ navigation }) => {
    const [selectedDate, setSelectedDate] = useState(''); // State to manage selected date

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
        console.log('Selected day:', day);
    };
    const currentDate = new Date(); // Create a new Date object
    const dayName = currentDate.toLocaleString('default', { weekday: 'long' }); // Get the day name
    const day = currentDate.getDate(); // Get the day number
    const monthName = currentDate.toLocaleString('default', { month: 'long' }); // Get the month name
    const year = currentDate.getFullYear(); // Get the year

    return (
        <View style={styles.cantainer}>
            <ScrollView showsVerticalScrollIndicator={false}>

                {/* Top Bar */}
                <View style={styles.mainView}>
                    <Image source={require('../Assests/backicon.png')} style={styles.backicon} />
                    <Text style={styles.heading}>Schedule</Text>
                    <Image source={require('../Assests/bell.png')} style={styles.ballicon} />
                </View>

                {/* Date View */}
                <View style={styles.cview}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={styles.dateText}>{selectedDate || `Today is ${dayName}, ${day} ${monthName} ${year}`}</Text>
                        <View style={{ flexDirection: 'row', gap: 15 }}>
                            <Image source={require('../Assests/backicon.png')} style={styles.left} />
                            <Image source={require('../Assests/back.png')} style={styles.right} />
                        </View>
                    </View>


                </View>

                {/* Global Calendar */}
                <View style={styles.globalCalendar}>
                    <Calendar
                        style={{
                            borderWidth: 0,
                            borderRadius: 15,
                            elevation: 5, // Adds shadow for Android
                            shadowColor: '#000', // Shadow color for iOS
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.1,
                            shadowRadius: 3,
                            backgroundColor: '#fff',
                        }}
                        theme={{
                            backgroundColor: '#f9f9f9',
                            calendarBackground: '#ffffff',
                            textSectionTitleColor: '#9b2226', // Section title (e.g., Sun, Mon)
                            textSectionTitleDisabledColor: '#ccc',
                            selectedDayBackgroundColor: '#ff6347', // Selected day background
                            selectedDayTextColor: '#fff', // Selected day text
                            todayTextColor: '#ff6347', // Today's date color
                            dayTextColor: '#2d4150', // General day text
                            textDisabledColor: '#d9e1e8', // Disabled day text
                            dotColor: '#9b2226', // Dots on event days
                            selectedDotColor: '#ffffff',
                            arrowColor: '#9b2226', // Arrows for navigating
                            monthTextColor: '#ff6347', // Month name color
                            textDayFontFamily: 'Roboto', // Font for day
                            textMonthFontFamily: 'Roboto-Bold', // Font for month
                            textDayFontWeight: '400',
                            textMonthFontWeight: '700',
                            textDayFontSize: 16,
                            textMonthFontSize: 18,
                            textDayHeaderFontSize: 14, // Font size for Sun, Mon, etc.
                        }}
                        onDayPress={handleDayPress}
                        markedDates={{
                            [selectedDate]: {
                                selected: true,
                                marked: true,
                                selectedColor: '#ff6347',
                            },
                        }}
                    />


                </View>

                {/* Schedule Section */}
                <View style={styles.schedule}>
                    <Text style={styles.stex}>My Schedule</Text>
                    <Text style={styles.Viewall}>View all</Text>
                </View>

                {/* Items Section 1 */}
                <View style={styles.Section}>
                    <View style={styles.place}>
                        <Image source={require('../Assests/Rectangle.png')} style={styles.img} />
                        <View>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Image source={require('../Assests/calender.png')} style={styles.calender} />
                                <Text style={styles.dtext}>1 january 2k25</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() =>
                                    navigation.navigate('SearchDetailsScreen', { item: { name: 'Florida Beach',
                                    location: 'Goa (India)'  } }) }>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 80 }}>
                                    <Text style={styles.name}>Florida Beach</Text>
                                    <Image source={require('../Assests/back.png')} style={{ width: 20, height: 20 }} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', gap: 5, marginVertical: 5 }}>
                                <Image source={require('../Assests/location1.png')} style={styles.calender} />
                                <Text style={styles.dtext}>Goa (India) .</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* item section 2*/}
                <View style={styles.Section}>
                    <View style={styles.place}>
                        <Image source={require('../Assests/Rectangle1.png')} style={styles.img} />
                        <View>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Image source={require('../Assests/calender.png')} style={styles.calender} />
                                <Text style={styles.dtext}>20 january 2k25</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() =>
                                    navigation.navigate('SearchDetailsScreen', { item: { name: 'The Little Nill',
                                    location: 'Switzerland'  } }) }>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 80 }}>
                                    <Text style={styles.name}>The Little Nill</Text>
                                    <Image source={require('../Assests/back.png')} style={{ width: 20, height: 20 }} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', gap: 5, marginVertical: 5 }}>
                                <Image source={require('../Assests/location1.png')} style={styles.calender} />
                                <Text style={styles.dtext}>Aspen, (United States)</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* item section 3*/}
                <View style={styles.Section}>
                    <View style={styles.place}>
                        <Image source={require('../Assests/Rectangle2.png')} style={styles.img} />
                        <View>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Image source={require('../Assests/calender.png')} style={styles.calender} />
                                <Text style={styles.dtext}>02 February 2025</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() =>
                                    navigation.navigate('SearchDetailsScreen', { item: { name: 'Harder Kulm',
                                    location: 'Switzerland'  } }) }>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 80 }}>
                                    <Text style={styles.name}>Harder Kulm</Text>
                                    <Image source={require('../Assests/back.png')} style={{ width: 20, height: 20 }} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', gap: 5, marginVertical: 5 }}>
                                <Image source={require('../Assests/location1.png')} style={styles.calender} />
                                <Text style={styles.dtext}>Switzerland .</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* item section 4*/}
                <View style={styles.Section}>
                    <View style={styles.place}>
                        <Image source={require('../Assests/Rectangle3.png')} style={styles.img} />
                        <View>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Image source={require('../Assests/calender.png')} style={styles.calender} />
                                <Text style={styles.dtext}>25 February 2025</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() =>
                                    navigation.navigate('SearchDetailsScreen', { item: { name: 'Khalifa Tower',
                                    location: 'Dubai , (UAE)'  } }) }>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 80 }}>
                                    <Text style={styles.name}>Khalifa Tower</Text>
                                    <Image source={require('../Assests/back.png')} style={{ width: 20, height: 20 }} />
                                </View>
                            </TouchableOpacity>
                            <View style={{ flexDirection: 'row', gap: 5, marginVertical: 5 }}>
                                <Image source={require('../Assests/location1.png')} style={styles.calender} />
                                <Text style={styles.dtext}>Dubai, (UAE)</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {/* item section 5*/}
                <View style={styles.Section}>
                    <View style={styles.place}>
                        <Image source={require('../Assests/Rectangle4.png')} style={styles.img} />
                        <View>
                            <View style={{ flexDirection: 'row', gap: 5 }}>
                                <Image source={require('../Assests/calender.png')} style={styles.calender} />
                                <Text style={styles.dtext}>10 March 2025</Text>
                            </View>
                            <TouchableOpacity
                                style={styles.item}
                                onPress={() =>
                                    navigation.navigate('SearchDetailsScreen', { item: { name: 'Eiffel Tower', location: 'Paris (France)'  } }) }>
                                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 80 }}>
                                    <Text style={styles.name}>Eiffel Tower</Text>
                                    <Image source={require('../Assests/back.png')} style={{ width: 20, height: 20 }} />
                                </View>
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'row', gap: 5, marginVertical: 5 }}>
                                <Image source={require('../Assests/location1.png')} style={styles.calender} />
                                <Text style={styles.dtext}>Paris (France)</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView >

        </View >
    );
};

export default Calender;

const styles = StyleSheet.create({
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 20,
        backgroundColor: 'white',
        height: 70,
        borderRadius: 20,
        alignItems: 'center',
    },
    cantainer: {
        flex: 1,
        backgroundColor: '#FBFBFB',
        padding: 8,
    },
    backicon: {
        width: 20,
        height: 20,
    },
    ballicon: {
        width: 20,
        height: 20,
    },
    heading: {
        fontSize: 17,
        fontWeight: '500',
        color: 'black',
    },
    cview: {
        height: 70,
        backgroundColor: 'white',
        marginTop: 5,
        borderRadius: 20,
        padding: 20,
    },
    month: {
        fontSize: 20,
        color: 'black',
        fontWeight: '600',
    },
    left: {
        width: 20,
        height: 20,
    },
    right: {
        width: 20,
        height: 20,
    },
    weekly: {
        flexDirection: 'row',
        gap: 30,
        marginTop: 10,
    },
    day5: {
        backgroundColor: '#ff6347',
        width: 30,
        height: 52,
        borderRadius: 10,
        alignItems: 'center',
    },
    daytex: {
        fontSize: 15,
        textAlign: 'center',
    },
    date: {
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        fontWeight: '500',
        marginVertical: 8,
    },
    globalCalendar: {
        marginVertical: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        padding: 10,
    },
    schedule: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        height: 50,
        padding: 10,
        borderRadius: 20,
        marginVertical: 4,
    },
    stex: {
        fontSize: 20,
        color: '#000',
        fontWeight: '500',
    },
    Viewall: {
        color: '#ff6347',
    },
    Section: {
        borderRadius: 20,
        marginVertical: 4,
    },
    place: {
        flexDirection: 'row',
        gap: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 5,
        margin: 5,
    },
    calender: {
        width: 20,
        height: 20,
    },
    dtext: {
        fontSize: 13,
    },
    name: {
        fontSize: 15,
        fontWeight: '400',
        color: '#000',
        padding: 5,
    },
    img: {
        width: 80,
        height: 80,
        borderRadius: 10,
    }
});

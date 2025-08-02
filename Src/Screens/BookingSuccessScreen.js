import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';

const BookingSuccessScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [roomQuantity, setRoomQuantity] = useState('');
  const [dayDuration, setDayDuration] = useState('');
  const [AddPerson, setAddPerson] = useState('');

  const handleConfirm = () => {
    if (roomQuantity && dayDuration && AddPerson) {
      setModalVisible(true);
    } else {
      alert('Please enter room quantity , day duration And Add Person.');
    }
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Booking Successful!</Text>
      <Text style={styles.message}>Your destination has been successfully booked. Have a great trip!</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Room Quantity"
        keyboardType="numeric"
        value={roomQuantity}
        onChangeText={setRoomQuantity}
      />

<TextInput
        style={styles.input}
        placeholder="Add Person"
        keyboardType="numeric"
        value={AddPerson}
        onChangeText={setAddPerson}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Day Duration"
        keyboardType="numeric"
        value={dayDuration}
        onChangeText={setDayDuration}
      />

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>Confirm</Text>
      </TouchableOpacity>

      {/* Custom Modal */}
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Booking Confirmed!</Text>
            <Text style={styles.modalMessage}>Your destination has been successfully booked.</Text>
            <Text style={styles.modalDetails}>
              Room Quantity: {roomQuantity} {'\n'}
              Day Duration: {dayDuration} days
              Add Person:{AddPerson} Person
            </Text>
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Text style={styles.closeButtonText}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 16,
  },
  message: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6c757d',
    marginBottom: 24,
    paddingHorizontal: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ced4da',
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#28a745',
    marginBottom: 10,
  },
  modalMessage: {
    fontSize: 16,
    textAlign: 'center',
    color: '#6c757d',
    marginBottom: 20,
  },
  modalDetails: {
    fontSize: 16,
    color: '#495057',
    textAlign: 'center',
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: '#FF6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  closeButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default BookingSuccessScreen;

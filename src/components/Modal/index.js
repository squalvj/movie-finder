import React, { Component } from 'react'
import { connect } from 'react-redux'
import {Modal, View, Text, Alert, TouchableOpacity} from 'react-native';
import COMMONCSS from 'styles'
import styled from 'styled-components/native'
import {
   hideModal
} from 'reducers/Common'

const {
   ButtonCommon
 } = COMMONCSS

const ButtonClose = styled(TouchableOpacity)`
   align-items: center;
   justify-content: center;
   background-color: white;
   height: 50px;
   width: 100%;
`;

export class ModalWrapper extends Component {

   constructor(props) {
      super(props)
   }

   render() {
      const {
         modalVisible,
         modalContent,
         hideModal
      } = this.props
      return (
        <View style={{marginTop: 22}}>
          <Modal
            animationType="slide"
            transparent={false}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
            }}>
            {modalContent}
            <ButtonClose onPress={() => hideModal()}>
               <Text>CLOSE</Text>
            </ButtonClose>
          </Modal>
        </View>
      );
    }
}

const mapStateToProps = (state) => ({
   modalContent: state.common.modalContent,
   modalVisible: state.common.modalVisible,
})

const mapDispatchToProps = dispatch => {
   return {
      hideModal: () => {
         dispatch(hideModal())
      }
   }
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalWrapper)

/**
 * Airbnb Clone App
 * @author: Andy
 * @Url: https://www.cubui.com
 */
 
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  ScrollView,
  Button,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { ActionCreators } from '../redux/actions';
import Icon from '@expo/vector-icons/Ionicons';
import FontAwesomeIcon from '@expo/vector-icons/FontAwesome';
import colors from '../styles/colors';
import { transparentHeaderStyle } from '../styles/navigation';
import InputField from '../components/form/InputField';
import RadioInput from '../components/form/RadioInput';
import RoundedButton from '../components/buttons/RoundedButton';

class CreateUser extends Component {
  static navigationOptions = ({ navigation }) => ({
    tabBarVisible: false,
    headerLeft: <TouchableOpacity
      style={styles.closeButton}
      onPress={() => navigation.goBack()}
    >
      <Icon
        name="md-close"
        size={30}
        color={colors.lightBlack}
      />
    </TouchableOpacity>,
    headerStyle: styles.headerStyle,
  });

  constructor(props) {
    super(props);

    this.state = {
      privacyOption: 'private',
      loading: false,
      name: "",
      nickName: "",
      phone: "",
      email: "",
      nameValid: false,
      nickNameValid: false,
      emailValid: false,
      phoneValid: false,
    };
    
    this.listCreated = false;
    this.selectPrivacyOption = this.selectPrivacyOption.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleNickNameChange = this.handleNickNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePhoneChange = this.handlePhoneChange.bind(this);
    this.handleCreateEvent = this.handleCreateEvent.bind(this);
}

  componentWillUnmount() {
    const { navigation } = this.props;
    const { name, nickName, phone, email } = this.state;
    navigation.state.params.onCreateUserClose({
      'name': name,
      "phone": phone,
      "email": email,
    }, this.listCreated);
  }

  selectPrivacyOption(privacyOption) {
    this.setState({privacyOption});
  }

  handleNameChange(name) {
    this.setState({name, nameValid: true});
  }

  handleNickNameChange(nickName) {
    this.setState({nickName, nickNameValid: true});
  }

  handleEmailChange(email) {
    this.setState({email, emailValid: true});
  }

  handlePhoneChange(phone) {
      this.setState({phone, phoneValid: true});
  }

  handleCreateEvent() {
    const { goBack } = this.props.navigation;
    this.setState({loading: true});
    this.listCreated = true;

    // Faking slow server
    setTimeout(() => {
      this.setState({loading: false}, () => {
        goBack();
      });
    }, 2000);
  }

  render() {
    const { privacyOption, location, nameValid, phoneValid, emailValid } = this.state;

    return (
      <View style={styles.wrapper}>
        <ScrollView style={styles.scrollView}>
            <View style={{flexDirection: 'row'}}>
              <Text style={styles.heading}>Create User </Text>
              <FontAwesomeIcon name="user-plus" size={24} style={{marginTop: 18, color: colors.lightBlack,}}/>
            </View>
          <View style={styles.content}>
            <View style={styles.inputWrapper}>
              <InputField
                labelText="Name"
                labelTextSize={16}
                labelTextWeight="400"
                inputType="text"
                labelColor={colors.lightBlack}
                textColor={colors.lightBlack}
                placeholder="Full Name"
                defaultValue={location}
                customStyle={{marginBottom: 10}}
                borderBottomColor={colors.gray06}
                inputStyle={{fontSize: 18, fontWeight: '600', paddingBottom: 5}}
                onChangeText={this.handleNameChange}
                showCheckmark={nameValid}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                labelText="Nick Name"
                labelTextSize={16}
                labelTextWeight="400"
                inputType="text"
                labelColor={colors.lightBlack}
                textColor={colors.lightBlack}
                placeholder="Is there another name to go by?"
                defaultValue={location}
                customStyle={{marginBottom: 10}}
                borderBottomColor={colors.gray06}
                inputStyle={{fontSize: 18, fontWeight: '600', paddingBottom: 5}}
                onChangeText={this.handleNickNameChange}
                showCheckmark={false}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                labelText="Email"
                inputType="email"
                labelTextSize={16}
                labelTextWeight="400"
                labelColor={colors.lightBlack}
                textColor={colors.lightBlack}
                placeholder="Good email to contact"
                defaultValue={location}
                customStyle={{marginBottom: 10}}
                borderBottomColor={colors.gray06}
                inputStyle={{fontSize: 18, fontWeight: '600', paddingBottom: 5}}
                onChangeText={this.handleEmailChange}
                showCheckmark={emailValid}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputWrapper}>
              <InputField
                labelText="Phone"
                inputType="number"
                labelTextSize={16}
                customStyle={{marginBottom: 10}}
                labelTextWeight="400"
                labelColor={colors.lightBlack}
                textColor={colors.lightBlack}
                placeholder="Good number to text"
                defaultValue={location}
                borderBottomColor={colors.gray06}
                inputStyle={{fontSize: 18, fontWeight: '600'}}
                onChangeText={this.handlePhoneChange}
                showCheckmark={phoneValid}
                autoFocus={true}
              />
            </View>
          </View>
        </ScrollView>
        <View style={styles.createButton}>
          <RoundedButton
            text="Create"
            textColor={colors.white}
            textAlign="left"
            background={colors.green01}
            borderColor="transparent"
            iconPosition="left"
            disabled={false}
            loading={this.state.loading}
            icon={<View style={styles.buttonIcon}><FontAwesomeIcon name="angle-right" color={colors.white} size={30} /></View>}
            handleOnPress={this.handleCreateEvent}
          />
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: colors.white,
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  content: {
    paddingTop: 50,
  },
  closeButton: {
    position: 'absolute',
    left: 20,
    zIndex: 9999,
  },
  headerStyle: {
    backgroundColor: colors.white,
    borderBottomWidth: 0,
  },
  heading: {
    fontSize: 28,
    fontWeight: '800',
    color: colors.lightBlack,
    paddingLeft: 20,
    paddingRight: 12,
    marginTop: 15,
  },
  privacyOptions: {
    marginTop: 40,
  },
  privacyHeading: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.lightBlack,
    marginBottom: 5,
    paddingLeft: 20,
    paddingRight: 20,
  },
  privacyOptionItem: {
    flex: 1,
    padding: 20,
  },
  privacyOptionTitle: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.lightBlack,
  },
  privacyOptionDescription: {
    fontSize: 14,
    fontWeight: '200',
    color: colors.lightBlack,
    marginTop: 10,
    paddingRight: 90,
  },
  privacyRadioInput: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  inputWrapper: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray06,
    height: 1,
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  createButton: {
    position: 'absolute',
    bottom: 0,
    right: 10,
    width: 110,
  },
  buttonIcon: {
    position: 'absolute',
    right: 0,
    top: '50%',
    marginTop: -16,
  }
});

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(ActionCreators, dispatch);
};

export default connect(null, mapDispatchToProps)(CreateUser);

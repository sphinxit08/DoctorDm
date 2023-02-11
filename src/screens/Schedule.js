import {StyleSheet, View, Image, Button} from 'react-native';
import React from 'react';
import ScheduleBg from '../themes/BackgroundSchedule';
import SessionBg from '../themes/BackGroundSession';
import Icon from 'react-native-vector-icons/FontAwesome5';
import BtGoBack from '../components/BtGoBack';
import Colors from '../themes/Colors';
import {useSelector} from 'react-redux';
import {TextInput, Avatar, Text, ToggleButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
const ScheduleScreen = () => {
  const user = useSelector(state => state.user);
  const navigation = useNavigation();
  return (
    <ScheduleBg>
      <BtGoBack />
      <View style={styles.container}>
        <Text style={{fontWeight: 'bold', fontSize: 17}}>
          กำหนดการ
        </Text>
        <Text style={{fontSize: 17}}>ตรวจสุขภาพประจำปี 2565</Text>
        <View style={styles.card}>
          <Text>
            โรงพยาบาลส่งเสริมสุขภาพตำบล ตำบลปราสาท จะทำการตรวจสุขภาพประจำปี
            โรคเบาหวานและความดันโลหิตสูง ให้แก่ ประชาชนในพื้นที่ ชุมชนตลาดนิคม
            ต.ปราสาท อ.บ้านกรวด จ.บุรีรัมย์
          </Text>
          <View style={{marginVertical: 15}}>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>วันที่</Text>
              <Text> 1 ธันวาคม พ.ศ.2565</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>เวลา</Text>
              <Text> 09.30 น. - 16.30 น.</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text style={{fontWeight: 'bold'}}>สถานที่</Text>
              <Text>
                {' '}
                สถานที่ โดมอเนกประสงค์เทศบาลตำบล{'\n'} ตลาดนิคมปราสาท
              </Text>
            </View>
          </View>
          <Text>
            ขอให้ผู้เข้ารับการตรวจสุขภาพทุกท่านปฎิบัติตาม
            ข้อควรปฏิบัติและคำแนะนำก่อนเข้ารับการตรวจ อย่างเคร่งครัด
          </Text>
          <View style={{marginTop: 20}}>
            <Text style={{fontStyle: 'italic'}}>กดที่นี่ เพื่อดู</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 20,
              marginTop: 5,
            }}>
            <View style={{flex: 1}}>
              <Button
                title="ข้อควรปฏิบัติและคำแนะนำก่อนการตรวจสุขภาพ "
                color="seagreen"
                onPress={() => navigation.navigate('adviceSchedule')}
              />
            </View>
          </View>
        </View>
      </View>
    </ScheduleBg>
  );
};

export default ScheduleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  card: {
    padding: 20,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: Colors.gray,
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 20,
  },
});

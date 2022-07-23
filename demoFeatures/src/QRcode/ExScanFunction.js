
//https://viblo.asia/p/scan-qr-code-trong-react-native-app-gAm5yrPLKdb
import React, { Component, Fragment, useState } from 'react';
import { TouchableOpacity, Text, Linking, View, Image, ImageBackground, BackHandler } from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './ExScanStyle'
const ScanFunction = () => {

   const  [state, setState] = useState({
    scan: false,
    ScanResult: false,
    result: null
}) ;
    
const onSuccess = (e) => {
        const check = e.data.substring(0, 4);
        console.log('scanned data' + check);
        setState({
            result: e,
            scan: false,
            ScanResult: true
        })
        if (check === 'http') {
            Linking.openURL(e.data).catch(err => console.error('An error occured', err));
        } else {
            setState({
                result: e,
                scan: false,
                ScanResult: true
            })
        }
    }
    const activeQR = () => {
        setState({ scan: true })
    }
    const scanAgain = () => {
        setState({ scan: true, ScanResult: false })
    }

        const { scan, ScanResult, result } = state
        return (
            <View style={styles.scrollViewStyle}>
                <View>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={()=> BackHandler.exitApp()}>
                            <Image source={require('./assets.js/back.png')} style={{height: 36, width: 36}}></Image>
                        </TouchableOpacity>
                        <Text style={styles.textTitle}>Scan QR Code</Text>
                    </View>

                    {!scan && !ScanResult &&   //Nếu cả 2 scan và scanResult false hết mới hiển thị  View  --> tức lúc chưa quét chưa có kết quả 
                        <View style={styles.cardView} >
                            <Image source={require('./assets.js/camera.jpg')} style={{height: 36, width: 36}}></Image>
                            <Text numberOfLines={8} style={styles.descText}>Please move your camera {"\n"} over the QR Code</Text>
                            <Image source={require('./assets.js/qr-code.jpeg')} style={{margin: 20}}></Image>
                            <TouchableOpacity onPress={activeQR} style={styles.buttonScan}>
                                <View style={styles.buttonWrapper}>
                                <Image source={require('./assets.js/camera.jpg')} style={{height: 36, width: 36}}></Image>
                                <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Scan QR Code</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    }
                    {ScanResult &&  // Khi đã có kết quả 
                        <Fragment>
                            <Text style={styles.textTitle1}>Result</Text>
                            <View style={ScanResult ? styles.scanCardView : styles.cardView}>
                                <Text>Type : {result.type}</Text>
                                <Text>Result : {result.data}</Text>
                                <Text numberOfLines={1}>RawData: {result.rawData}</Text>
                                <TouchableOpacity onPress={scanAgain} style={styles.buttonScan}>
                                    <View style={styles.buttonWrapper}>
                                        <Image source={require('./assets.js/camera.jpg')} style={{height: 36, width: 36}}></Image>
                                        <Text style={{...styles.buttonTextStyle, color: '#2196f3'}}>Click to scan again</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </Fragment>
                    }
                    {scan && // Nếu scan được xét là true thì mới hiển thị màn hình quét QR code
                        <QRCodeScanner
                            onRead={onSuccess}    // Bắt buộc sẽ gọi hàm này khi camera quét được xong mã qr
                            reactivate={true}  // Kích hoạt khả năng quét mã khác
                            showMarker={true}  
                            ref={(node) => { scanner = node }}
                            topContent={  // Hiển thị bất kỳ nội dung nào ở trên view chế độ xem camera
                                <Text style={styles.centerText}>
                                   Please move your camera {"\n"} over the QR Code
                                </Text>
                            }
                            bottomContent={  // Hiển thị bất kỳ nội dung nào ở dưới view chế độ xem camera
                                <View>
                                    <ImageBackground source={require('./assets.js/bottom-panel.png')} style={styles.bottomContent}>
                                        <TouchableOpacity style={styles.buttonScan2} 
                                            onPress={() => scanner.reactivate()} 
                                            onLongPress={() => setState({ scan: false })}>  
                                            <Image source={require('./assets.js/camera2.jpeg')}></Image>
                                        </TouchableOpacity>
                                    </ImageBackground>
                                </View>
                            }
                        />
                    }
                </View>
            </View>
        );
    }

export default ScanFunction;

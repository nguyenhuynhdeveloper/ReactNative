//https://www.npmjs.com/package/react-native-fs/v/2.20.0
//npm install react-native-fs --save
/**
 * Có một số nơi bạn có thể lưu trữ các tệp của mình

Các thư mục sau có sẵn:

On Both
CachesDirectoryPath (Chuỗi) Đường dẫn tuyệt đối đến thư mục bộ nhớ đệm
DocumentDirectoryPath (Chuỗi) Đường dẫn tuyệt đối đến thư mục tài liệu

Chỉ IOS
MainBundlePath (Chuỗi) Đường dẫn tuyệt đối đến thư mục gói chính (chỉ dành cho iOS)
LibraryDirectoryPath (Chuỗi) Đường dẫn tuyệt đối đến NSLibraryDirectory (chỉ dành cho iOS)

Chỉ Android
DownloadDirectoryPath (Chuỗi) Đường dẫn tuyệt đối đến thư mục tải xuống (chỉ trên android)

ExternalCachesDirectoryPath (Chuỗi) Đường dẫn tuyệt đối đến thư mục bộ đệm bên ngoài (chỉ dành cho android)
TemporaryDirectoryPath (Chuỗi) Đường dẫn tuyệt đối đến thư mục tạm thời (quay trở lại Caching-Directory trên Android)
ExternalDirectoryPath (Chuỗi) Đường dẫn tuyệt đối đến các tệp bên ngoài, thư mục chia sẻ (chỉ dành cho android)
ExternalStorageDirectoryPath (Chuỗi) Đường dẫn tuyệt đối đến bộ nhớ ngoài, thư mục chia sẻ (chỉ dành cho android)

 */
import { Text, StyleSheet, View, TouchableOpacity, SafeAreaView , Image} from 'react-native'
import { ViewPropTypes } from 'deprecated-react-native-prop-types';
import React, { Component, useEffect ,useState} from 'react'
import RNFS from 'react-native-fs';



const DemoRn_fs = () => {
    // var RNFS = require('react-native-fs');
    const [text, setText ] = useState("")
    const [path, setPath] = useState("")

    useEffect(() => {
        // readDirection()
        // writeFile()
    }, [])



    //---------Tạo file và viết luôn vào đó
    // create a path you want to write to
    // :warning: on iOS, you cannot write into `RNFS.MainBundlePath`,
    // but `RNFS.DocumentDirectoryPath` exists on both platforms and is writable

    const writeFile = () => {
        var path = RNFS.DocumentDirectoryPath + '/test.txt';

        // write the file
        RNFS.writeFile(path, 'Lorem ipsum dolor sit amet', 'utf8')
            .then((success) => {
                console.log('File vừa được tạo ', success);
                console.log("Đường dẫn file vừa tại", path)
            })
            .catch((err) => {
                console.log(err.message);
            });
    }

    //------Đọc file 
    const readFile = () => {
        // var path = RNFS.DocumentDirectoryPath ;   // Đọc file ở folder Document
        var path = RNFS.DocumentDirectoryPath + '/test.txt';
        console.log('PATH', path, 'utf8')
        RNFS.readFile(path)
            .then((result) => {
                console.log('Nội dung file mới tạo  ', result);
                setText(result)
                // stat the first file           
            })
            .catch((err) => {
                console.log(err.message, err.code);
            });
    }

    //--------Xoá file 
    const deleteFile = () => {
        // create a path you want to delete
        var path = RNFS.DocumentDirectoryPath + '/test.txt';

        RNFS.unlink(path)
            .then(() => {
                console.log('FILE DELETED');
            })
            // `unlink` will throw an error, if the item to unlink does not exist
            .catch((err) => {
                console.log(err.message);
            });
    }

    //---------upload file lên 1 Url 

    //--------Tạo 1 thư mục 
    const mkdir = async () => {
        try {
            var path = RNFS.DocumentDirectoryPath + '/folderNew';
            const res = await RNFS.mkdir(path)
            console.log("Tạo thư mục thành công ")
        } catch (error) {
            console.log("Tạo thư mục lỗi ")
        }
    }

    //---------Move file : Di chuyển tức di chuyển hết nội dung trong file test.txt sang file /moveTarget/testMove   .
    // file test.txt cũ sẽ bị mất k tìm thấy - Phải dưa vào 1 tên file mới để hứng dữ liệu chứ không để mình folder được 
    const moveFile = () => {
        var path = RNFS.DocumentDirectoryPath + '/test.txt';
        var pathTarget = RNFS.DocumentDirectoryPath + '/folderNew/testMove'    // Chỉ có thể đưa luôn thành 1 file trên document  Hoặc folder trong document 
        RNFS.moveFile(path, pathTarget)
            .then((result) => {
                console.log('File đã được di chuyển ', result);
                // stat the first file           
            })
            .catch((err) => {
                console.log(err.message, err.code);
            });

    }

    ////------Đọc file tại đường dẫn mới move
    const readFileMoveNew = () => {
        // var path = RNFS.DocumentDirectoryPath ;   // Đọc file ở folder Document
        var path = RNFS.DocumentDirectoryPath + '/folderNew/testMove';
        console.log('PATH', path, 'utf8')
        RNFS.readFile(path)
            .then((result) => {
                console.log('GOT RESULT', result);
                // stat the first file           
            })
            .catch((err) => {
                console.log(err.message, err.code);
            });
    }

    //---------Copy file : Copy nội dung từ file test.txt sang file testCopy
    // file test.txt cũ sẽ không bị mất  - Phải dưa vào 1 tên file mới để hứng dữ liệu chứ không để mình folder được 

    const copyFile = () => {
        var path = RNFS.DocumentDirectoryPath + '/test.txt';
        // var pathTarget = RNFS.DocumentDirectoryPath + '/test1/test2'; // couldn’t be moved to “test1” because either the former doesn’t exist, or the folder containing the latter doesn’t exist.
        var pathTarget = RNFS.DocumentDirectoryPath + '/folderNew/testCopy'    // Chỉ có thể đưa luôn thành 1 file trên document 
        RNFS.copyFile(path, pathTarget)
            .then((result) => {
                console.log('GOT RESULT', result);
                // stat the first file           
            })
            .catch((err) => {
                console.log(err.message, err.code);
            });

    }

    //    //------Đọc file tại đường dẫn mới copy
    const readFileCopyNew = () => {
        // var path = RNFS.DocumentDirectoryPath ;   // Đọc file ở folder Document
        var path = RNFS.DocumentDirectoryPath + '/folderNew/testCopy';
        console.log('PATH', path, 'utf8')
        RNFS.readFile(path)
            .then((result) => {
                console.log('GOT RESULT', result);
                // stat the first file           
            })
            .catch((err) => {
                console.log(err.message, err.code);
            });
    }


    //--------Đọc ổ đĩa có gì :Đọc folder
    const readdir = async () => {
        try {
            var path = RNFS.DocumentDirectoryPath + '/folderNew';
            const res = await RNFS.readdir(path)
            console.log("Các file có trong thư mục", res)
        } catch (error) {
            console.log("LỖI", error)
        }
    }

    //------Download hình ảnh - video - file 
    const downloadFile = async () => {
        // var path = RNFS.DocumentDirectoryPath + '/avc.png'
        var path = RNFS.DocumentDirectoryPath  + "/video.mp4"   //Phần đằng sau cũng chính là tên hình ảnh 

        const  DownloadFileOptions = {
            // fromUrl: 'https://miro.medium.com/max/800/1*cEI87PYuoI_OccVvcj3xgA.png',  // Hình ảnh 
            // fromUrl:'https://img6.thuthuatphanmem.vn/uploads/2022/04/16/anh-bo-hoa-cuc-hoa-mi-nhieu-mau_022834616.jpg' ,  // hình ảnh
            // fromUrl: 'https://youtu.be/UTlIUsh_dfE',  // link video chưa được
            // fromUrl:"https://video.link/w/y4Hxd",   // link video vẫn chưa đúng 

             toFile: path,       // Local filesystem path to save the file to
            // headers?: Headers;        // An object of headers to be passed to the server
            // background?: boolean;     // Continue the download in the background after the app terminates (iOS only)
            // discretionary?: boolean;  // Allow the OS to control the timing and speed of the download to improve perceived performance  (iOS only)
            // cacheable?: boolean;      // Whether the download can be stored in the shared NSURLCache (iOS only, defaults to true)
            // progressInterval?: number;
            // progressDivider?: number;
            // begin?: (res: DownloadBeginCallbackResult) => void; // Note: it is required when progress prop provided
            // progress?: (res: DownloadProgressCallbackResult) => void;
            // resumable?: () => void;    // only supported on iOS yet
            // connectionTimeout?: number // only supported on Android yet
            // readTimeout?: number       // supported on Android and iOS
            // backgroundTimeout?: number // Maximum time (in milliseconds) to download an entire resource (iOS only, useful for timing out background downloads)
          };
        try {
           const res = RNFS.downloadFile(DownloadFileOptions)
           console.log("RES" , res)
            console.log("Download file thành công" , path)
        //    const data=  await res.promise
        //    console.log("RES promise", data)
            setPath(path)
        } catch (error) {
            console.log("downloadFIle có lỗi" , error)
        }
    }

    return (
        <SafeAreaView>
            <Text>DemoRn_fs</Text>

            <TouchableOpacity
            style= {styles.button}
                onPress={() => writeFile()}>
                <Text>TẠO VÀ VIẾT FILE </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style= {styles.button}

                onPress={() => readFile()}>
                <Text>ĐỌC FILE</Text>
                <Text> {text}</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style= {styles.button}

                onPress={() => deleteFile()}>
                <Text>XOÁ FILE </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style= {styles.button}

                onPress={() => moveFile()}>
                <Text>MOVE FILE </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style= {styles.button}

                onPress={() => readFileMoveNew()}>
                <Text>ĐỌC FILE tại đường dẫn mới move </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style= {styles.button}

                onPress={() => copyFile()}>
                <Text>COPY FILE </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style= {styles.button}

                onPress={() => readFileCopyNew()}>
                <Text>ĐỌC FILE tại đường dẫn mới copy </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style= {styles.button}

                onPress={() => readdir()}>
                <Text>ĐỌC trong ổ đĩa có gì </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style= {styles.button}

                onPress={() => mkdir()}>
                <Text>TẠO 1 thư mục  </Text>
            </TouchableOpacity>

            <TouchableOpacity
            style= {styles.button}

                onPress={() => downloadFile()}>
                <Text>Tải 1 hình ảnh trên mạng về folder máy  </Text>
               <Image source={path ? { uri: Platform.OS == 'android' ? `file://${RNFS.DocumentDirectoryPath}/avc.png` : path } : ""}  style={{width: 100, height: 100}}/> 
              
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default DemoRn_fs

const styles = StyleSheet.create({

    button: {
        margin: 16 
    }
})
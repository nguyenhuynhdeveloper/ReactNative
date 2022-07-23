var moment = require('moment')

// -----> moment()   sẽ thay thế cho new Date()  : tác dụng như nhau , nhưng moment giúp quyết định được format
/**
 * YYYY  => 2022
 * YY =>22
 * MMMM => June
 * MMM => Jun
 * MM => 05
 * DD => 12 "ngày 12"
 * dddd => Wednesday
 * Do => 14th
 * HH: định dạng 24h 
 * H => 5 " 5 giờ sáng"
 * hh: định dạng 12h 
 * h => 5 
 * mm => 03 phút
 * m => 3 phút
 * sss => milisecond
 * A => PM
 * a => pm
 * Z => +07:00 "múi giờ "
 */

const demoMoment = moment("2022/03/24") 
console.log("Object Time khởi tạo bằng moment  :" + demoMoment) // nó lại đưa về định dạng nguyên thuỷ
console.log("Chuyển thời gian đó về toISOString() : "  + demoMoment.toISOString())
console.log("Kiểu dữ liệu của moment trả về :" + typeof demoMoment)


//Bạn có thể tạo ra một moment với một mảng các con số phản chiếu các tham số được truyền đến new Date() [year, month, day, hour, minute, second, millisecond] 
const demoMoment1 = moment([2010, 1, 14, 15, 25, 03, 125]).format("YYYY ,  YY , MMMM , MMM , MM , DD , dddd, Do , HH , H , hh , h  , mm , m ,ss ,s ,sss, A ,a ,Z ")
console.log("Khởi tạo đối tượng thời gian với 1 format chỉ định :" + demoMoment1)
console.log("Kiểu dữ liệu của moment trả về sau khi đã được format :" + typeof demoMoment1)

//------> Có thể tạo moment với đối tượng JavaScript Date sẫn có 
const time= new Date()
console.log(moment().format('DD/MM/YYYY'))   // Nếu để tham số trống thì sẽ lấy ngày hôm nay 
console.log(moment(time).format('DD/MM/YYYY'))


const dateTime = new Date(2022, 04, 27, 16, 20, 51, 999)    // Khai báo 1 object thời gian 

// // toString() Trả về dạng string. (Giống dạng mặc định (type object) nhưng type string)
// dateTime0_1 = dateTime.toString()   // Fri May 27 2022 23:20:51 GMT+0700 (Indochina Time) -- Đây chính là dạng mặc định 
// console.log(dateTime0_1)
// // console.log(" toString  " + moment(dateTime0_1).format('DD/MM/YYYY'))  // FALSE

// // JSON.stringify() : Biến tất cả các dạng dữ liệu về string hết
// const dateTime0_11 = JSON.stringify(dateTime)
// console.log(dateTime0_11)   //Wed Jun 15 2022 08:56:42 GMT+0700 (Indochina Time)
// console.log("JSON.stringify()" + moment(dateTime0_11).format('DD/MM/YYYY'))   //FALSE không nhận string dạng JSON.stringify()

    // toISOString() Trả về dạng string theo tiêu chuẩn ISO (YYYY-MM-DDTHH:mm:ss.sssZ).  // QUAN TRỌNG : ĐẨY LÊN ĐẨY XUỐNG BACK END ĐỀU DÙNG DẠNG NÀY 
    dateTime0_2 = dateTime.toISOString()     //  2022-05-27T16:20:51.621Z
    // console.log(dateTime0_2)
    console.log("  toISOString " + moment(dateTime0_2).format('DD/MM/YYYY'))


    // toJSON() Trả về dạng chuỗi định dạng như 1 ngày tháng JSON (YYYY-MM-DDTHH:mm:ss.sssZ).
    dateTime0_3 = dateTime.toJSON()      //2022-05-27T16:20:51.621Z
    // console.log(dateTime0_3)
    console.log(" toJSON  " + moment(dateTime0_3).format('DD/MM/YYYY'))


    //---- Chuyển về tách dạng ngày--- giờ 
    // toDateString() Trả về dạng string. ngày, tháng, năm ( không bao gồm giờ, phút, giây)
    dateTime0_4 =  dateTime.toDateString()   //Fri May 27 2022
    // console.log(dateTime0_4)
    console.log(" toDateString " + moment(dateTime0_4).format('DD/MM/YYYY')) 


    //toTimeString() Trả về về dạng string 
    const dateTime0_5 = dateTime.toTimeString()
    // console.log(dateTime0_5) // 22:33:51 GMT+0700 (Indochina Time)
    // console.log(" toTimeString  " + moment(dateTime0_5).format('DD/MM/YYYY'))  // FALSE Phải là ngày 

    // toUTCString() Trả về 1 chuỗi thời gian dựa vào giờ quốc tế( UTC)
    const dateTime0_6 =dateTime.toUTCString()
    // console.log(dateTime0_6) // Thu, 15 Jun 2017 09:54:38 GMT
    console.log(" toUTCString  " + moment(dateTime0_6).format('DD/MM/YYYY'))

    //------Dạng nguyên thuỷ
    // valueOf() Trả về 1 số thời gian ở dạng nguyên thủy.  // Dạng số milisecond so với ngày 1.1.1970
    dateTime0_7 =  dateTime.valueOf()    // 1653668451621
    // console.log(dateTime0_7)
    console.log(" valueOf  " + moment(dateTime0_7).format('DD/MM/YYYY'))


    //------Chuyển về giờ địa phương 
    //toLocalString() Trả về về dạng string định dạng ngày giờ theo chuyển địa phương.
    const dateTime0_8 =dateTime.toLocaleString()
    // console.log(dateTime0_8) // 5/31/2022, 10:51:45 PM
    console.log(" toLocaleString  " + moment(dateTime0_8).format('DD/MM/YYYY'))

    // toLocaleDateString() Trả về về dạng string định dạng ngày giờ theo chuyển địa phương. (DD/MM/YYYY)
    dateTime0_9 =  dateTime.toLocaleDateString()        // 5/27/2022
    // console.log(dateTime0_9)
    console.log(" toLocaleDateString  " + moment(dateTime0_9).format('DD/MM/YYYY'))


    // toLocaleTimeString() Trả về dạng chuỗi theo chuyển địa phương. (HH:MM:SS AM/PM) chỉ có giờ
    dateTime0_10 =  dateTime.toLocaleTimeString()         // 11:20:51 PM
    // console.log(dateTime0_10)
    // console.log(" toLocaleTimeString  " + moment(dateTime0_10).format('DD/MM/YYYY'))   // FALSE Phải là ngày 


    // Vậy moment có thể nhận object new Date() thuần 
    // Hoặc các chuỗi string mà từ object new Date() convert dạng 

    /**
     * toISOString()
     * toJSON()
     * toDateString()
     * toUTCString()
     * valueOf()
     * toLocaleString()
     * toLocaleDateString()
     */


// Chức năng format date
// dateTime0_2  : là chuỗi toISOString()  được convert từ new Date()

const format0 = moment(dateTime0_2).format('MMMM Do YYYY, h:mm:ss a');
console.log("format0 :" +format0)

const format0_1 = moment(dateTime0_2).format('MMMM/YY/DD');
console.log("format 0_1 :" +format0_1)

const format0_2 = moment(dateTime0_2).format('MMMM-YYYY-DD ; hh/mm/ss ; sss ; Z ; a');
console.log("format 0_2 :" +format0_2)

const format1 = moment().format('dddd');    
console.log("format1 :" + format1)

const format2 = moment().format("MMM Do YY");  
console.log("format2 :" + format2)

const format3 = moment().format('YYYY [escaped] YYYY'); 
console.log("format3 :" + format3)

const format4 = moment().format();   
console.log("format4 :" + format4 )


// Realative time : Mối quan hệ thời gian 
// dateTime0_2  : là chuỗi toISOString()  được convert từ new Date() 

// console.log("??????????" + moment(dateTime0_2 ).moment("20120620", "YYYYMMDD"))  // FALSE không được 

const relative = moment(dateTime0_2 ).fromNow()  // Từ hôm nay tới ngày format1 là bao lâu  
console.log("relative0 :" +relative)

const relative1 = moment("2012-06-20", "YYYY-MM-DD").fromNow();   // từ ngày 20120620 tới nay là bao lâu 
console.log("relative1 :" +relative1)

const relative2 = moment().startOf('day').fromNow();   // Từ 00h bắt đầu ngày tới nay là mấy giờ
console.log("relative2 :" + relative2)

const relative3 = moment().endOf('day').fromNow();  // Còn bao lâu nữa hết  ngày    
console.log("relative3 :" +relative3)

const relative4 = moment().startOf('hour').fromNow();  // Đã trải qua mấy phút bắt đầu ngày 
console.log("relative4 :" +relative4)


//Calendar Time : lịch trình thời gian 
// dateTime là ngày 24/08/2022
const calendar = moment(dateTime).subtract(10, 'days').calendar();  //10 ngày trước ngày dateTime là ngày bao nhiêu 
console.log(" calendar0 :" +calendar)

const calendar1 = moment().subtract(6, 'days').calendar();  // 6 ngày trước hôm nay là ngày bao nhiêu 
console.log(" calendar1 :" +calendar1)

const calendar2 = moment().subtract(3, 'days').calendar();  // 3 ngày trước hôm nay là ngày bao nhiêu
console.log(" calendar2 :" +calendar2)

const calendar3 = moment().subtract(1, 'days').calendar();  // 1 ngày trước hôm nay là ngày bao nhiêu 
console.log(" calendar3 :" +calendar3)

const calendar4 = moment().calendar();   // Hôm nay là ngày bao nhiêu 
console.log(" calendar4 :" +calendar4)

const calendar5 =moment().add(1, 'days').calendar();  // 1 ngày tiếp theo là ngày bao nhiêu 
console.log(" calendar5 :" +calendar5)

const calendar6 = moment().add(3, 'days').calendar();  // 3 ngày tiếp theo là ngày bao nhiêu 
console.log(" calendar6 :" +calendar6)

const calendar7 =moment().add(10, 'days').calendar();  // 10 ngày tiếp theo là ngày bao nhiêu 
console.log(" calendar7 :" +calendar7)


// Multiple locale support : Hỗ trợ nhiều ngôn ngữ 
const multiple = moment.locale();
console.log(" multiple0 :" + multiple)

const multiple1 = moment().format('LT');
console.log(" multiple :1" + multiple1)

const multiple2 = moment().format('LTS');
console.log(" multiple :2" + multiple2)

const multiple3 = moment().format('L');  
console.log(" multiple3 :" + multiple3)

const multiple4 = moment().format('l'); 
console.log(" multiple4 :" + multiple4)

const multiple5 = moment().format('LL'); 
console.log(" multiple5 :" + multiple5)

const multiple6 = moment().format('ll');
console.log(" multiple6 :" + multiple6)

const multiple7 = moment().format('LLL'); 
console.log(" multiple7 :" + multiple7)

const multiple8 = moment().format('LLL'); 
console.log(" multiple8  :" + multiple8)

const multiple9 = moment().format('lll');
console.log(" multiple9 : " + multiple9)

const multiple10 = moment().format('LLLL');
console.log(" multiple10  :" + multiple10)

const multiple11 = moment().format('llll');
console.log(" multiple11 : " + multiple11)






    
    // Cách truyền tham số params 
    
    // //!!!! Lưu ý khi truyền đối số vào cho tham số thì thứ tự truyền vào phải tương ứng, vì tham số nó giống như mảng 
    // không thì kiểu truyền truyền tham số và đối số là 1 object , song destrusturing đúng key  ở ngay nơi khởi tạo hàm  
    //// Tức ở khởi tạo hàm thì nhận tham số là 1 object có các key , còn nơi gọi hàm thì truyền tham số vào là 1 object có trường key trùng với key của hàm nhận, còn value là giá trị truyền vào 
    
    ////Cách 1 truyền tham số hàm khởi tạo sẽ để là rest tham số : tức các phần tử còn lại 
    // const callback = (...params) => {
    //     // refValue.current = index  // Cái này k sài được vì nó không render lại view
    //     setReRender(params[0])
    //     console.log("chỉ mục được bấm vào " , params[0])
    // }

    ////Cách 2: Truyền tham số 
    //// Cách truyền đối số cho tham số là 1 object ,
    // Hàm nhận đối số , có tham số chỉ là 1 tên object đặt tuỳ ý . xong bên trong hàm mới phá từng phần tử ra 
    // Như vậy rất dễ để kiểm soát được tham số - đối số

        ////Test tham số thứ 2  của trình phát DeviceEventEmitter
    // const callback1 = (props) =>
    // {
    // console.log("Tham số truyền vào từ tham số thứ 2 của trình phát ", props)
    // }
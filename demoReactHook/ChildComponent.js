import React , {useCallback, useMemo, useEffect, useState, useReducer, useRef} from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
function ChildComponent() {
    console.log("ChildComponent - render")
    return <Text> ChildComponent</Text>
  } 
  export default React.memo(ChildComponent , (prevProp, nextProp) =>
  {
return prevProp.name === nextProp.name;  // Khi là false sẽ bị rerender lại
  })  // Khi bọc nó vào cái React.memo nó sẽ k bị rerender lại  chỉ khi nào props từ component cha truyền xuống thay đổi nó mới render lại 
  // Tham số thứ 2 là 1 call back để quy định custom . Mặc định React.memo chỉ so sánh Shallow Comparison (so sánh nông )
 // Trong trường hơp component rất đơn giản không quá tính toán phức tạp thì k cần sử dụng
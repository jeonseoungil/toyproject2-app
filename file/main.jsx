import React, { useEffect, useRef, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Input from "./input";
import Input2 from "./input2";
import List from "./list";

const todolist = [
  { id: 1, text: "수영하기" },
  { id: 2, text: '밥먹기' },
  { id: 3, text: '공부하기' },
  { id: 4, text: "수영하기" },
  { id: 5, text: '밥먹기' },
  { id: 6, text: '공부하기' },
];

const Main = () => {
  const [data,setData]=useState(todolist)
    // 추가 토글 
    const [toggleIn, setToggleIn] = useState(false);

    const [readdtoggleIn, setreaddtoggleIn] = useState(false);
    const [retext, setretext] = useState({
        
    });

    useEffect(() => {
      if (toggleIn) {
        setreaddtoggleIn(false);
      }
    }, [toggleIn]);
    // 삭제/ 체크 토클 
    const [selectedItemId, setSelectedItemId] = useState(null);
    const toggleStrongAndB = (id) => {
        if(id === selectedItemId ){
            setSelectedItemId(null)
        }
        else{setSelectedItemId(id);}
    };
  
    // 삭제함수
    const deleteLi=(id)=>{
        setData(data.filter(item=> item.id !== id ))
    }
    const readdt = (id) => {
        setSelectedItemId(null)
        setToggleIn(false)
        const selectedItem = data.find(item => item.id === id);
        
        if (selectedItem) {
            setretext(selectedItem);
            setreaddtoggleIn(true);
            console.log(retext)
        } else {
            console.log("해당 일정을 가진 항목을 찾을 수 없습니다.");
        }
    }

    const ref = useRef(7);
    const addttext = (addtext) => {
      setreaddtoggleIn(false)
        if (addtext !== "") {
            const current = ref.current; 
            setData([
                ...data,
                {
                    id: ref.current++,
                    text: addtext,
                }
            ]);
            setToggleIn(false)
        }
    }
     // 일정 완료 처리 
    const redOver=()=>{
        if(readdtoggleIn ===true){
            setreaddtoggleIn(false)
        }
        setSelectedItemId(null)
        alert('일정이 완료 처리됩니다.')
    }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>daily todo list</Text>
      {toggleIn && <Input addText={addttext} />}
      {readdtoggleIn && <Input2 retext={retext} data={data} setData={setData} setreaddtoggleIn={setreaddtoggleIn} />}
      <List data={data} selectedItemId={selectedItemId} toggleStrongAndB={toggleStrongAndB} deleteLi={deleteLi} redOver={redOver} readdt={readdt}/>
      {toggleIn ? (
        <TouchableOpacity style={styles.toggleButton} onPress={() => setToggleIn(false)}>
          <Text style={styles.toggleText}>-</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={styles.toggleButton} onPress={() => setToggleIn(true)}>
          <Text style={styles.toggleText}>+</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    paddingBottom:40,
    width: '100%', // 자식 요소가 가로 너비를 100%로 설정
    textAlign: 'center', // 텍스트를 중앙 정렬
    paddingTop:"30%",
    backgroundColor:"skyblue",
    color:"white"
  },
  toggleButton: {
    backgroundColor: 'blue',
    width: 50,
    height: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom:50,

  },
  toggleText: {
    color:"white",
    fontSize:40,
    
  }
});

export default Main;
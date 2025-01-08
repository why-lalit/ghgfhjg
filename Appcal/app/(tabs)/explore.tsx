import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";

interface DataProp {
  id: number;
  name: string;
  sellers: string;
  image: string;
  oldPrice: number;
  finalPrice: number;
}

const index = () => {
  const dummy: DataProp[] = [
    {
      id: 1,
      name: "IPHONE 15 PRO MAX",
      sellers: "BEST SELLER",
      image:
        "https://th.bing.com/th?q=Apple+16+Phone&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247.png",
      oldPrice: 90000,
      finalPrice: 71000,
    },
    {
      id: 2,
      name: "ASUS ROG 5",
      sellers: "BEST IN GAMING",
      image:
        "https://th.bing.com/th?q=Asus+ROG+Phone&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247.png",
      oldPrice: 45000,
      finalPrice: 41999,
      
    },
    {
      id: 3,
      name: "TELEPHONE ANTIQUEPIECE",
      sellers: "1857 COLLECTION",
      image:
        "https://th.bing.com/th?q=Old-Fashioned+Phone&w=120&h=120&c=1&rs=1&qlt=90&cb=1&dpr=1.3&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247.png",
      oldPrice: 1000,
      finalPrice: 800,
    },
      {
        id: 4,
      name: "SAMSUNAG S22 ULTRA",
      sellers: "TOP IN INDIA",
      image:
        "https://th.bing.com/th/id/OIP.spv1L-wMzAX0ftr5lOUO4QHaEm?w=356&h=183&c=7&r=0&o=5&dpr=1.3&pid=1.7.png",
      oldPrice: 1000,
      finalPrice: 800,
      
      },
    
  ];

  return (
    
   <ScrollView style={styles.container}>
      {/* <FlatList
        data={dummy}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              style={styles.img}
              source={{
                uri: item.image,
              }}
            />
            <Text style={styles.titleText}>{item.name}</Text>

            <View>
              <Text>{item.sellers}</Text>

              <Text style={styles.oldPrice}>Old Price: {item.oldPrice}</Text>
              <Text style={styles.finalPrice}>Final : ₹{item.finalPrice}</Text>
            </View>
            <TouchableOpacity style={styles.addBtn}>
              <Text style={styles.btnText}>+</Text>
            </TouchableOpacity>
          </View>
          
        )}
        numColumns={2}
        columnWrapperStyle={{ gap: 10 }}
      />
     */}

     {
      dummy.map((item,index)=>(
        <View style={styles.card}>
        <Image
          style={styles.img}
          source={{
            uri: `${item.image}`,
          }}
        />
        <Text style={styles.titleText}>{item.name}</Text>

        <View>
          <Text>{item.sellers}</Text>

          <Text style={styles.oldPrice}>Old Price: {item.oldPrice}</Text>
          <Text style={styles.finalPrice}>Final : ₹{item.finalPrice}</Text>
        </View>
        <TouchableOpacity style={styles.addBtn}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
      ))
     }
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "gray", 
    padding: 50,
 flex:1,
 flexDirection:'row',
  },
  card: {
    width: '90%',
    height: 350,
    backgroundColor: "orange",
    borderRadius: 30,
    paddingHorizontal:40,
    paddingVertical: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  img: {
    width: "110%",
    height: "71%",
    borderRadius: 10,
  },
  titleText: {
    fontSize: 16,
    fontWeight: 800,
    textAlign: "center",
    marginVertical: 5,
  },
  oldPrice: {
    fontSize: 16,
    color: "blue",
    fontWeight:'bold',
  },
  finalPrice: {
    fontSize: 16,
    color: "black",
    fontWeight:'bold',
  },
  addBtn: {
    width: 40,
    height: 40,
    backgroundColor: "black",
    color: "white",
    fontSize: 35,
    fontWeight: "600",
    position: "absolute",
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    marginTop:12,
  },
  btnText: {
    fontSize: 32,
    color: "white",
    textAlign: "center",
    marginBottom:20,
  },
});

export default index;

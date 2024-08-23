import axios from "axios"



export default function PostApi(){
    const baseUrl='https://fakestoreapi.com/products'
    const PayLoad =  [{
        imgUrl: "phone.jpg",
        title: "iPad 10th Generation",
        price: '$260.00',
        stock: '68',
        position: 'New'
    
      },
      {
        imgUrl: "phones.jpg",
        title: "Galaxy Note20 Ultra 5G",
        price: '$320.00',
        stock: '64',
        position: 'Sale'
    
      },
      {
        imgUrl: "phone3.jpg",
        title: "Sony Xperia 1 III Dual-SIM",
        price: '$250.00',
        stock: '52',
        position: ''
      },
      {
        imgUrl: "phone4.jpg",
        title: "iPhone 15 Pro Max",
        price: '$250.00',
        stock: '60',
        position: 'Sale'
    
      },
      {
        imgUrl: "phone5.jpg",
        title: "Samsung Galaxy Note 20",
        price: '$230.00',
        stock: '100',
        position: 'New'
    
      },
        {
          imgUrl: "phone.jpg",
          title: "Tablet Apple iPad",
          price: '$230.00',
          stock: '72',
          position: ''
    
    
        },
        {
          imgUrl: "phone6.jpg",
          title: "iPhone 12 Pro Max",
          price: '$120.00',
          stock: '84',
          position: 'Sale'
    
        },
        {
          imgUrl: "phone7.jpg",
          title: "Samsung Galaxy Fold",
          price: '$250.00',
          stock: '68',
          position: 'New'
    
        },
        {
          imgUrl: "phone8.jpg",
          title: "Samsung Galaxy S21 5G",
          price: '$290.00',
          stock: '100',
          position: 'Sale'
    
        },
        {
          imgUrl: "phone9.jpg",
          title: "Samsung S21 Ultra",
          price: '$230.00',
          stock: '76',
          position: 'New'
    
        },
      ]
 function AddApi  (){
        axios.post(baseUrl,PayLoad)
        .then((response)=>{
            console.log(response.data);
        })
       
      };
      function GetApi(){
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response)=>{
            console.log(response.data)
        })
      }
      function UpdateApi(){
        axios.put(baseUrl,PayLoad)
      }
    return(
      
       <>
       <button onClick={AddApi}>post</button>
       <button onClick={GetApi}>get</button>
       <button onClick={UpdateApi}>update</button>

       </>
    )
}
import React, { useEffect, useState } from "react";
import { HashRouter } from "react-router-dom";
import SearchBook from "./components/SearchBook";
import Home from "./routes/Home";
import Search from "./routes/Search";
import Search2 from "./routes/Search2";
import axios from "axios";
import { blogSearch } from "./Api";
import Item from "./Item";

function App() {
  // do something

  return (
    // <div>
    //   <HashRouter>
    //     {/* <Navigation /> */}
    //     <Route path="/" exact={true} component={Home}></Route>
    //     <Route path="/search" exact={true} component={Search}></Route>
    //   </HashRouter>
    // </div>
    <Search />
  );
}

// function App() {
//   // do something
//   let msg;
//   const [searchname, setSearchname] = useState("");
//   const searchContainerStyle = {
//     width: "100%",
//     display: "block",
//     marginLeft: "10%",
//     marginRight: "10%",
//   };

//   const loading = () => {
//     document.getElementById("secondTextID").innerHTML = "로딩중...";
//     setTimeout(function () {
//       document.getElementById("secondTextID").innerHTML = "";
//     }, 1000);
//   };

//   useEffect(() => {
//     const findBooks = async () => {
//       const search = this.state.value;
//       try {
//         if (search === "") {
//           this.setState({ books: [], isLoading: false });
//         } else {
//           const {
//             data: { items },
//           } = await axios.get(
//             "https://dapi.kakao.com/v3/search/book?target=title",
//             {
//               params: {
//                 query: search,
//                 size: 10,
//                 target: "title",
//               },
//               headers: {
//                 Authorization: "KakaoAK {543fa7220b2920a8a6c4035bb328cc10}",
//               },
//             }
//           );

//           this.setState({ books: items, isLoading: false });
//         }
//       } catch (error) {
//         console.log(error);
//       }
//     };

//     findBooks();
//   }, []);

//   const onClick = () => {
//     loading();
//     findBooks(searchname);
//   };

//   const onKeyPress = (e) => {
//     if (e.key === "Enter") {
//       onClick();
//     }
//   };

//   const onChange = (e) => {
//     msg = e.target.value;
//     setSearchname(msg);
//   };

//   return (
//     <div>
//       <div className="searchContainer" style={searchContainerStyle}>
//         <input
//           className="input_text"
//           type="search"
//           onChange={onChange}
//           onKeyPress={onKeyPress}
//         ></input>
//         <button onClick={onClick}>검색</button>
//         <br></br>
//         <p className="secondText" id="secondTextID">
//           검색어를 입력해주세요
//         </p>
//       </div>
//     </div>
//   );
// }

// const App = (props) => {
//   const [blogs, setBlogs] = useState([]);
//   const [text, setText] = useState("");
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     if (query.length > 0) {
//       blogSearchHttpHandler(query, true);
//     }
//   }, [query]);

//   // 엔터를 눌렀을 때 호출 되는 함수
//   const onEnter = (e) => {
//     if (e.keyCode === 13) {
//       setQuery(text);
//     }
//   };

//   // text 검색어가 바뀔 때 호출되는 함수.
//   const onTextUpdate = (e) => {
//     setText(e.target.value);
//   };

//   const blogSearchHttpHandler = async (query, reset) => {
//     const params = {
//       query: query,
//       sort: "accuracy", // accuracy | recency 정확도 or 최신
//       size: 10, // 한 페이지에 보여 질 문서의 개수
//       target: "title",
//     };

//     const { data } = await blogSearch(params);
//     if (reset) {
//       setBlogs(data.documents);
//     } else {
//       setBlogs(blogs.concat(data.documents));
//     }
//   };

//   return (
//     <div className="container">
//       <input
//         type="search"
//         placeholder="검색어를 입력 하세요..."
//         name="query"
//         className="input_search"
//         onKeyDown={onEnter} // enter
//         onChange={onTextUpdate} // change
//         value={text} // view
//       />

//       <ul>
//         {blogs.map((blog, index) => (
//           <Item
//             key={blog.url}
//             thumbnail={blog.thumbnail}
//             title={blog.title}
//             blogname={blog.authors}
//             contents={blog.price}
//             url={blog.url}
//           />
//         ))}
//       </ul>
//     </div>
//   );
// };

export default App;

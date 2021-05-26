import React from "react";
import axios from "axios";
import SearchBook from "../components/SearchBook";
import "./Home.css";
import "./Search.css";

class Search extends React.Component {
  state = {
    isLoading: true,
    books: [],
    value: "",
  };

  getSearchBook = async () => {
    const search = this.state.value;
    try {
      if (search === "") {
        this.setState({ books: [], isLoading: false });
      } else {
        const {
          data: { items },
        } = await axios.get("https://dapi.kakao.com/v3/search/book", {
          params: {
            query: search,
            size: 10,
            target: "title",
          },
          headers: {
            Authorization: "KakaoAK {543fa7220b2920a8a6c4035bb328cc10}",
          },
        });

        this.setState({ books: items, isLoading: false });
      }
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    this.getSearchBook();
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.getSearchBook();
  };

  render() {
    const { books, isLoading } = this.state;

    return (
      <section className="container">
        <form onSubmit={this.handleSubmit}>
          {/* INPUT */}
          <div>
            <div className="input_div">
              <h1>도서 검색</h1>
              <input
                className="input_search"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button
                type="submit"
                className="input_btn"
                onClick={this.handleChange}
              >
                찾기
              </button>
            </div>

            {/* TEXT */}
            {isLoading ? (
              <div className="loader">
                <span className="loader__text">로딩중..</span>
              </div>
            ) : (
              <div className="alert">
                <span className="alert__text">검색어를 입력해주세요..</span>
              </div>
            )}

            {/* RESULT */}
            <div className="books">
              {books.map((book) => (
                <SearchBook
                  key={book.url}
                  url={book.url}
                  thumbnail={book.thumbnail}
                  title={book.title}
                  authors={book.authors}
                  publisher={book.publisher}
                  datetime={book.datetime}
                  sale_price={book.sale_price}
                  price={book.price}
                  status={book.status}
                />
              ))}
            </div>
          </div>
        </form>
      </section>
    );
  }
}

export default Search;

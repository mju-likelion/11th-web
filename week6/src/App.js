import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BoardsList from "./pages/BoardsList";
import Board from "./pages/Board";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const goBoards = () => {
    navigate("/boards", {
      state: { message: "여긴 게시판입니다." },
    });
  };

  return (
    <>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goBoards}>게시글 목록</button>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/boards" element={<BoardsList />} />
        <Route path="/boards/:id" element={<Board />} />
      </Routes>
    </>
  );
}

export default App;

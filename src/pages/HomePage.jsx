import { useNavigate } from "react-router-dom";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <h1>Вітаємо на головній сторінці</h1>
      <button onClick={() => navigate("/about")}>
        Перейти на сторінку "Про нас"
      </button>
    </div>
  );
};

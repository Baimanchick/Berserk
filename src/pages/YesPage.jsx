import React, { useEffect } from "react";
import "../css/yes_style.css";
import { runConfetti } from "../utils/confeti";
import { useNavigate } from "react-router-dom";

function YesPage() {
  const navigate = useNavigate();
  useEffect(() => {
    runConfetti();
    setTimeout(() => {
      navigate("/");
    }, 5000);
  }, []);
  return (
    <>
      <div class="container">
        <div>
          <h1 class="header_text">Увидемся ?!!</h1>
        </div>
        <div class="gif_container">
          <img
            src="https://media1.tenor.com/m/kIZ5_VFKX-MAAAAd/guts-berserk.gif"
            alt="Cute animated illustration"
            className="image-gift"
          />
        </div>
      </div>
    </>
  );
}

export default YesPage;

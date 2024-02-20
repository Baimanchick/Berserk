import React, { useEffect, useState } from "react";
import "../css/styles.css";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function moveButton() {
    const button = document.getElementById("noButton");
    const buttonWidth = button.offsetWidth;
    const buttonHeight = button.offsetHeight;

    var x = Math.random() * (window.innerWidth - buttonWidth);
    var y = Math.random() * (window.innerHeight - buttonHeight);

    button.style.left = `${x}px`;
    button.style.top = `${y}px`;
  }

  return (
    <>
      {windowWidth > 900 ? (
        <div className="container">
          <div>
            <h1 className="header_text">Хочешь погулять со мной ?</h1>
            <h1 className="header_text">Ты свободна ?</h1>
          </div>
          <div className="gif_container">
            <img
              src={
                isHovered
                  ? "https://media1.tenor.com/m/jvPlUQim6R4AAAAC/berserk-guts.gif"
                  : "https://i.kym-cdn.com/photos/images/newsfeed/001/373/163/017.gif"
              }
              alt="Cute animated illustration"
              className="image-gift"
            />
          </div>
          <div className="buttons">
            <div>
              <button
                className="btn"
                id="yesButton"
                onClick={() => {
                  navigate("/yes");
                }}
              >
                ДА!
              </button>
            </div>
            <div>
              <div>
                <button
                  className="btn"
                  id="noButton"
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  onClick={moveButton}
                >
                  Нет :(
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="thousand-px">
            <h2>
              Данный сайт не потдерживает мобильное устройство, пожалуйста
              зайдите через ноутбук
            </h2>
            <h3>C уважениям Баймурат :)</h3>
          </div>
        </>
      )}
    </>
  );
}

export default HomePage;

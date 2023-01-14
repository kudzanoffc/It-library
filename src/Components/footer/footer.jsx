import "./footer.css";
import telegramLogo from "./img/telegram-logo.svg";
import instagramLogo from "./img/instagram-logo.svg";
function footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-section">
          <div className="title">Contact</div>
          <div className="footer-link">
            <img src={telegramLogo} alt="logo" width={20} />
            <a href="https://t.me/inseensee" target="_blank">
              Telegram
            </a>
          </div>
          <div className="footer-link">
            <img src={instagramLogo} alt="logo" width={20} />
            <a
              href="https://www.youtube.com/watch?v=jfKfPfyJRdk"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default footer;

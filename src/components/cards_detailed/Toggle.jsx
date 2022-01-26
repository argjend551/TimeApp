export default function Toggle({ toggled, onClick }) {
  return (
    <div onClick={onClick} className={`toggle${toggled ? " digital" : ""}`}>
      <div className="notch">
        <div className="hourToggle"></div>
        <div className="minToggle"></div>
        {!toggled && (
          <div className="digitalClockToggle">
            <h4>11:10</h4>
          </div>
        )}
      </div>
    </div>
  );
}

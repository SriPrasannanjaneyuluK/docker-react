import { useState, useEffect, useCallback } from 'react';
import './App.css';

const SISTER_NAME = 'AmmuuU';
const NICKNAME = 'Bangaram';

const REASONS = [
  { emoji: '🪙', text: 'You are my Bangaram — precious like gold, every single day' },
  { emoji: '✨', text: 'Your smile lights up every room you walk into, Ammu' },
  { emoji: '🌟', text: 'You turn ordinary days into something truly special' },
];

function App() {
  const [revealed, setRevealed] = useState(false);
  const [showMain, setShowMain] = useState(false);
  const [confetti, setConfetti] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => setShowMain(true), 400);
    return () => clearTimeout(timer);
  }, []);

  const burstConfetti = useCallback(() => {
    const colors = ['#ff6b9d', '#c77dff', '#ffd166', '#06d6a0', '#ff85a1', '#fff'];
    const pieces = Array.from({ length: 60 }, (_, i) => ({
      id: Date.now() + i,
      left: Math.random() * 100,
      delay: Math.random() * 0.4,
      color: colors[Math.floor(Math.random() * colors.length)],
      size: 6 + Math.random() * 8,
      rotation: Math.random() * 360,
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 3000);
  }, []);

  const handleReveal = () => {
    setRevealed(true);
    burstConfetti();
  };

  return (
    <div className={`surprise-app ${showMain ? 'surprise-app--visible' : ''}`}>
      <div className="bg-gradient" aria-hidden="true" />
      <div className="bg-orbs" aria-hidden="true">
        <span className="orb orb-1" />
        <span className="orb orb-2" />
        <span className="orb orb-3" />
      </div>

      <div className="floating-hearts" aria-hidden="true">
        {['💗', '💖', '💕', '✨', '🌸', '⭐'].map((heart, i) => (
          <span key={i} className={`heart heart-${i + 1}`}>
            {heart}
          </span>
        ))}
      </div>

      {confetti.map((piece) => (
        <span
          key={piece.id}
          className="confetti-piece"
          style={{
            left: `${piece.left}%`,
            backgroundColor: piece.color,
            width: piece.size,
            height: piece.size,
            animationDelay: `${piece.delay}s`,
            transform: `rotate(${piece.rotation}deg)`,
          }}
        />
      ))}

      <main className="surprise-main">
        <p className="eyebrow">Made with love, just for you</p>

        <h1 className="hero-title">
          <span className="hero-line">Surprise,</span>
          <span className="hero-name">{SISTER_NAME}!</span>
          <span className="hero-nickname">my {NICKNAME} ✨</span>
        </h1>

        <p className="hero-subtitle">
          Your sibling built this little corner of the internet — only for you,
          {` `}{NICKNAME}.
        </p>

        {!revealed ? (
          <section className="reveal-gate">
            <div className="gift-box" aria-hidden="true">
              <div className="gift-lid" />
              <div className="gift-body" />
              <div className="gift-bow" />
            </div>
            <p className="reveal-prompt">
              {SISTER_NAME}, tap below — this one is just for my Bangaram
            </p>
            <button type="button" className="reveal-btn" onClick={handleReveal}>
              Open your surprise, Bangaram 🎁
            </button>
          </section>
        ) : (
          <section className="surprise-content" aria-live="polite">
            <div className="letter-card">
              <span className="letter-stamp">💌</span>
              <h2>Dear {SISTER_NAME},</h2>
              <p>
                I have always called you <strong>{NICKNAME}</strong> because to me you
                are gold — rare, shining, and impossible to replace. I wanted to do
                something a little different for you: not just a message, but a whole
                experience, because my Bangaram deserves to feel celebrated.
              </p>
              <p>
                You are loved, valued, and remembered every day — even on the quiet
                ones. This page is my way of saying thank you for being you, Ammu. I
                hope it makes you smile as big as you make me smile.
              </p>
              <p className="letter-sign">With all my love, always 💜</p>
            </div>

            <h2 className="section-title">Why my Bangaram is amazing</h2>
            <ul className="reasons-grid">
              {REASONS.map((reason, index) => (
                <li
                  key={reason.text}
                  className="reason-card"
                  style={{ animationDelay: `${0.15 * index}s` }}
                >
                  <span className="reason-emoji">{reason.emoji}</span>
                  <p>{reason.text}</p>
                </li>
              ))}
            </ul>

            <blockquote className="quote-block">
              <p>
                &ldquo;Some people are gold — you do not find them, you are blessed
                with them.&rdquo;
              </p>
              <cite>— That is you, Ammu. My Bangaram, forever.</cite>
            </blockquote>

            <button type="button" className="celebrate-btn" onClick={burstConfetti}>
              Celebrate again! 🎉
            </button>
          </section>
        )}

        <footer className="surprise-footer">
          <span>Forever proud of you, Bangaram</span>
          <span className="footer-heart">♥</span>
        </footer>
      </main>
    </div>
  );
}

export default App;

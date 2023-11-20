import { useRef, useState, useContext } from 'react';
import { AnimationContext } from 'elements/Animations/AnimationContext';
import YouTube from 'react-youtube';
import css from './AudioPlayer.module.css';

const AudioPlayer = () => {
  const [status, setStatus] = useState('play');
  const [position, setPosition] = useState(0);
  const [showStatusBar, setShowStatusBar] = useState(false);
  const [durration, setDurration] = useState(false);
  const player = useRef();
  const {setIsAnimationShouldPlay} = useContext(AnimationContext);
  const icon = status === 'play' ? '▷' : '||';

  const opts = {
    height: '0',
    width: '0',
    playerVars: { autoplay: 1, controls: 1, loop: 1, wmode: 'opaque' },
    videoId: 'FOabQZHT4qY',
  };
  console.log();

  function onReady(e) {
    e.target.setVolume(100);
    setShowStatusBar(true);
  }

  function onPlayerStateChange(e) {
    let interval;

    if (e.target.playerInfo.playerState === 2) {
      setStatus('play');
      clearInterval(interval);
      setIsAnimationShouldPlay(false)
    } else if (e.target.playerInfo.playerState === 1) {
      setStatus('pause');
      interval = setInterval(() => updateProgressBar(e), 100);
      setIsAnimationShouldPlay(true)
    }
    setInterval(() => updateProgressBar(e), 100);
  }

  function handlePLay() {
    if (status === 'pause') {
      player.current.internalPlayer.pauseVideo();
    } else if (status === 'play') {
      player.current.internalPlayer.playVideo();
    }
  }

  function updateProgressBar(e) {
    setDurration(e.target.getDuration());
    var percent = (e.target.getCurrentTime() / e.target.getDuration()) * 100;
    let playedBar = percent;
    setPosition(Math.round(playedBar));
  }

  function onChange(e) {
    player.current.internalPlayer.seekTo((Number(e.target.valueAsNumber) * durration) / 100);
    setPosition(e.target.valueAsNumber);
  }

  return (
    <div style={{ position: 'relative' }}>
      <div className={css.player}>
        <button onClick={handlePLay} className={css.button} disabled={!showStatusBar}>
          {icon}
        </button>
        <p className={css.title}>Avengers Theme & Animation</p>
        {showStatusBar && (
          <input
            className={css.input}
            onChange={onChange}
            style={{
              background: `linear-gradient(to right, #34387f 0%, #34387f ${position}%, #fafafa66 ${position}%, #fafafa66 100%)`,
            }}
            type="range"
            name="range"
            min="0"
            max="100"
            value={position}
          />
        )}
      </div>
      <YouTube
        videoId="FOabQZHT4qY"
        opts={opts}
        onReady={onReady}
        onStateChange={onPlayerStateChange}
        ref={player}
        style={{ opacity: 1, inset: -1, position: 'absolute', zIndex: -1 }}
      />
    </div>
  );
};

export default AudioPlayer;

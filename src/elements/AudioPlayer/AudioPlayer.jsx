import { useRef, useState, useContext } from 'react';
import { AnimationContext } from 'elements/Animations/AnimationContext';
import { ReactComponent as VolumeNone } from './svg/volume-mute.svg';
import { ReactComponent as VolumeLow } from './svg/volume-low.svg';
import { ReactComponent as VolumeMed } from './svg/volume-medium.svg';
import { ReactComponent as VolumeFull } from './svg/volume-high.svg';
import YouTube from 'react-youtube';
import css from './AudioPlayer.module.css';
import useWindowResize from 'hooks/useWindowResize';

const AudioPlayer = () => {
  const {width} = useWindowResize()
  const [status, setStatus] = useState('play');
  const [position, setPosition] = useState(0);
  const [volume, setVolume] = useState(100);
  const [showStatusBar, setShowStatusBar] = useState(false);
  const [durration, setDurration] = useState(false);
  const player = useRef();
  const { setIsAnimationShouldPlay } = useContext(AnimationContext);
  const icon = status === 'play' ? '▷' : '||';


  const opts = {
    height: '0',
    width: '0',
    playerVars: { autoplay: 0, controls: 1, loop: 1, wmode: 'opaque' },
    videoId: 'FOabQZHT4qY',
  };

  const getVolumeIcon = volume => {
    switch (volume) {
      case 100:
        return <VolumeFull className={css.speakerIcon} />;
      case 67:
        return <VolumeMed className={css.speakerIcon} />;
      case 34:
        return <VolumeLow className={css.speakerIcon} />;
      case 0:
        return <VolumeNone className={css.speakerIcon} />;
      default:
        return <VolumeNone className={css.speakerIcon} />;
    }
  };

  function onReady(e) {
    e.target.setVolume(100);
    setShowStatusBar(true);
  }

  function onPlayerStateChange(e) {
    let interval;

    if (e.target.playerInfo.playerState === 2) {
      setStatus('play');
      setIsAnimationShouldPlay(false);
      clearInterval(interval);
    } else if (e.target.playerInfo.playerState === 1) {
      setStatus('pause');
      setIsAnimationShouldPlay(true);
      interval = setInterval(() => updateProgressBar(e), 100);
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

  function handleVolume() {
    volume !== 1 ? setVolume(prev => (prev -= 33)) : setVolume(100);
  }
  if (showStatusBar) {
    if (volume !== 1) {
      player.current.internalPlayer.unMute();
      player.current.internalPlayer.setVolume(volume);
    } else {
      player.current.internalPlayer.mute();
    }
  }

  return (
    <div className={css.relative}>
      <div className={css.player}>
        <button onClick={handlePLay} className={css.button} disabled={!showStatusBar}>
          {icon}
        </button>
        <p className={css.title}>{width >= 768 ? 'Music & Animation' : 'play'}</p>
        {showStatusBar && (
          <input
            className={css.input}
            onChange={onChange}
            style={{
              background: `linear-gradient(to right, #34387f 0%, #34387f ${position}%, #fafafa00 ${position}%, #fafafa00 100%)`,
            }}
            type="range"
            name="range"
            min="0"
            max="100"
            value={position}
          />
        )}
        <div className={css.speakerBtn} onClick={handleVolume}>
          {getVolumeIcon(volume)}
        </div>
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

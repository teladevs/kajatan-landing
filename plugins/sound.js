import { Howl } from 'howler';

export default defineNuxtPlugin(() => {
  const sound = new Howl({
    src: ['../public/wisuda51poltekpelsby/mars-perhubungan.mp3'],
    volume: 0.25,
    loop: true, // Enable this if you want the sound to loop
  });

  return {
    provide: {
      sound,
    },
  };
});

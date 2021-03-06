import breakBeats from "./120_stutter_breakbeats_16.mp3";
import futureFunk from "./120_future_funk_beats_25.mp3";
import BassWarwick from "./Bass_Warwick_heavy_funk_groove_120_BPM.mp3";
import coutrySlide from "./electric_guitar_coutry_slide_120bpm.mp3";
import StompySlosh from "./FUD_120_StompySlosh.mp3";
import GrooveB from "./GrooveB_120bpm_Tanggu.mp3";
import MazePolitics from "./MazePolitics_120_Perc.mp3";
import pAS3GROOVE1 from "./PAS3GROOVE1.03B.mp3";
import SilentStar from "./SilentStar_120_Em_OrganSynth.mp3";
import { Howl /* , Howler */ } from "howler";

export const arrayOfSounds = [
  { name: "Break Beats", sound: new Howl({ src: breakBeats, rate: 1.5 }) },
  { name: "Future Funk", sound: new Howl({ src: futureFunk, rate: 1.5 }) },
  { name: "Bass Jam", sound: new Howl({ src: BassWarwick, rate: 1.5 }) },
  { name: "Country Slide", sound: new Howl({ src: coutrySlide, rate: 1.5 }) },
  { name: "Stomp Slosh", sound: new Howl({ src: StompySlosh, rate: 1.5 }) },
  { name: "Groovy One", sound: new Howl({ src: GrooveB, rate: 1.5 }) },
  { name: "Maze Politics", sound: new Howl({ src: MazePolitics, rate: 1.5 }) },
  { name: "Groovy Two", sound: new Howl({ src: pAS3GROOVE1, rate: 1.5 }) },
  { name: "Silent Star", sound: new Howl({ src: SilentStar, rate: 1.5 }) },
];

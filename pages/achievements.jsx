import Head from 'next/head'
import Image from 'next/image'
import parseString from 'xml2js'

/* notice: if you see this code please dont look cause im not stopping you but i want things to be fun */
/* fine if you insist a box costs 100 parts for comparison */
/* self note: add a "resets every day" warning for daily achievements" */
/* t = title; d = description; a = achievement; r = reward; s = image source; ns = no image source */
const xml = `
  <a t="hello" d="join car crash" r.parts="10">
    <a t="lucky block" d="open a box" r.skin="mystery-car">
      <a t="its so rare" d="get a rare from a box" r.parts="50">
        <a t="e p i c" d="get an epic from a box" r.parts="100">
          <a t="the legend of the box" d="get a legendary from a box" r.parts="300"></a>
        </a>
      </a>
      <a t="boxes and boxes" d="open three boxes" r.parts="20">
        <a t="professional lottery-er" d="open five boxes" r.parts="100">
          <a t="i like boxes" d="open ten boxes in one go" r.skin="fancy-man"></a>
        </a>
      </a>
    </a>
    <a t="car accident" d="die (i know, its so hard)" r.skin="dead-car">
      <a t="oh hi again" d="get a revenge kill" r.parts="50">
        <a t="i kinda hate you" d="target someone 5 times in a row" r.parts="500"></a>
      </a>
      <a t="mechanical abuse" d="die 5 times" r.parts="50">
        <a t="very mechanical abuse" d="die 20 times" r.parts="100">
          <a t="your car hates you" d="die 200 times" r.parts="300"></a>
        </a>
      </a>
      <a t="spawndie" d="die within 5 seconds of spawning" r.parts="100">
        <a t="karma" d="die within 5 seconds of killing" r.parts="50"></a>
        <a t="more karma" d="revenge kill within 5 seconds of spawning" r.parts="200"></a>
      </a>
    </a>
    <a t="murderer" d="kill a car" r.parts="5">
      <a t="serial killer" d="kill 10 cars" r.parts="10">
        <a t="psycho killer" d="kill 100 cars IN ONE GAME" r.parts="750">
          <a t="overpowered" d="kill 1000 cars IN ONE GAME" r.parts="6500"></a>
        </a>
        <a t="cereal killer" d="kill a car with the legendary Cereal skin" r.parts="1000"></a>
        <a t="spawnkill" d="kill a car within 5 seconds of them spawning" r.parts="100"></a>
      </a>
      <a t="speedy killer" d="get kill streak 3" r.parts="10">
        <a t="sanic the hedgehog" d="get kill streak 10" r.parts="100">
          <a t="you're scary" d="get kill streak 100" r.parts="1000"></a>
        </a>
      </a>
    </a>
    <a t="achiever" d="get two achievements" r.parts="50">
      <a t="overachiever" d="get 10 achievements" r.parts="100">
        <a t="too good" d="get all the (one-time) achievements other than this one" r.parts="30000"></a>
      </a>
      <a t="chonk achiever" d="get all the skins" r.parts="9999999"></a>
    </a>
    <a t="new here" d="play for 10 minutes" r.parts="10">
      <a t="veteran" d="play for an hour" r.parts="50">
        <a t="og" d="play for 24 hours" r.parts="100">
          <a t="ancient" d="play for 200 hours" r.parts="5000"></a>
        </a>
      </a>
    </a>
  </a>
  <daily>
    <a t="daily play" d="play for 10 minutes" r.parts="100"></a>
    <a t="a murder a day" d="kill three cars" r.parts="50"></a>
    <a t="wow thats extreme" d="play for two hours" r.parts="200"></a>
  </daily>
`;

export default function Achievements() {
  return (
    <div>
      <Head>
        <title>achievements</title>
        <meta name="robots" content="noindex" /> <!-- i dont want the achievements page showing up -->
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="big-chonk">
        <div className="team-warning">TEAMING OR CHEATING FOR ACHIEVEMENTS IN ANY WAY IS BANNABLE (i can wipe all your data)</div>    
      </div>
    </div>
  )
}

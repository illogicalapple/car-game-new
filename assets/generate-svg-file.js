const { parseString } = require("xml2js");
const { exec } = require("child_process");
const XMLAchievements = "achievements go here; see achievements.xml";
var nodes = "";
var connections = "";
var count = 0;

parseString(XMLAchievements, handler);

function draw(achievements, recursive, parent) {
  let ownCount = count;
  nodes += `a${count} [id="achievement-${achievements.$.t.replace(/\s/g, "")}" label="" image="assets/achievement-icons/${achievements.$.t.replace(/\s/g, "")}.jpg"];\n`;
  if(recursive) {
    connections += `a${parent} -> a${count};\n`;
  }
  count++;
  if(achievements.a) {
    if(achievements.a instanceof Array) {
      achievements.a.forEach(a => draw(a, true, ownCount));
    } else {
      draw(achievements.a, true, ownCount);
    }
  }
  if(!recursive) {
    exec(`echo 'digraph { ${nodes}\n${connections}}' > input.dot`)
    exec(`dot -Tsvg -Nshape=square input.dot > output.svg`, function(err, stdout, stderr) {
      if(err) console.error(err);
      else console.log(`stdout: ${stdout} \n stderr: ${stderr}`);
    });
  }
}
function handler(error, result) {
  draw(result.a, false);
  exec("xdg-open output.svg");
}

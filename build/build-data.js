var fs = require('fs');

var lessonData = require('../src/app/Lesson.json');
var lodash = require('lodash');


// .writeFileSync('dist/version.txt', '1.2.3');

for (var lesson in lessonData.lessons) {
  console.log("*********************");
  console.log(lessonData.lessons[lesson]);
}


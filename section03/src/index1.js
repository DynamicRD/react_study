//외부에 있는 모듈을 가져온다(import)
//const moduleData = require('./math');
// const {add,sub} = require('./math');
import {add,sub} from './math.js'
import multiply from './math.js'
import randomColor from 'randomcolor';

const colorString = randomColor();
console.log(colorString);
console.log(add(10,30));
console.log(sub(10,30));
console.log(multiply(40,30));
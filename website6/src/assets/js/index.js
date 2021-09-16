//import '../css/all.css';

require('../css/all.css');
import '../css/dora.css';

import fun from './module.js';
fun();

/* var fun = require('./module.js');
fun(); */


var nobiImg = new Image();
nobiImg.src = require('../img/nobi.png');
document.querySelector('body').appendChild(nobiImg);
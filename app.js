"use strict";
import log from './logger.js'
import { sideKick as jarJar, mainCharacter as quiGon, characters }  from './starWarsCharacters.js'

characters.forEach(c => log(c))

log(jarJar)
log(quiGon)

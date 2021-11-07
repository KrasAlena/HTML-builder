const { readdir, readFile, stat } = require('fs/promises');
const { join } = require('path');

const stylesPath = join(__dirname, 'styles');
const bandlePath = join(__dirname, 'files-copy', 'project-dist', 'bundle.css');


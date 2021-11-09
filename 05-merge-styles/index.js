const { readdir, readFile, writeFile, appendFile } = require('fs/promises');
const { join, extname } = require('path');

const stylesPath = join(__dirname, 'styles');
const bundlePath = join(__dirname, 'project-dist', 'bundle.css');

async function createStyleFile() {
    await writeFile(bundlePath, '');
    const items = await readdir(stylesPath, { withFileTypes: true });
    for (let item of items) {
        const itemContent = await readFile(join(stylesPath, item.name))
            if (item.isFile() == true && extname(item.name).slice(1) == 'css')
            await appendFile(bundlePath, itemContent);
        }
}
createStyleFile();
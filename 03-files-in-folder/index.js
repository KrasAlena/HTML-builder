const { readdir, stat } = require('fs/promises');
const { join, extname, parse } = require('path');
const { stdout } = process;

const newPath = join(__dirname, 'secret-folder');

async function foo() {
     const files = await readdir(newPath, {withFileTypes: true});
        files.forEach(async (file) => {
            const item = await stat(join(newPath, file.name), stats => {
              stdout.write(stats);
            });
                if (!item.isDirectory()) {
                    stdout.write(`${parse(join(newPath, file.name)).name} - ${extname(join(newPath, file.name)).slice(1)} - ${item.size}B\n`)
                }
        });
};
foo();
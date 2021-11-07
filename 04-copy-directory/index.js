const { readdir, mkdir, copyFile, rm } = require('fs/promises');
const { join } = require('path');

const filePath = join(__dirname, 'files');
const copyFilePath = join(__dirname, 'files-copy');

    async function copyDir(src, dest) {
        const items = await readdir(src, { withFileTypes: true });
        
        if ((await readdir(__dirname)).includes('files-copy')) {
            const filesCopy = await readdir(copyFilePath);
            for (let fileCopy of filesCopy) {
              if (!items.includes(fileCopy)) {
                await rm(join(copyFilePath, fileCopy));
              }
            }
          }
        await mkdir(dest, { recursive: true });
        for (let item of items) { 
            const source = join(src, item.name);
            const destination = join(dest, item.name);
            if (item.isDirectory()) {
                await copyDir(source, destination);
            } else {
                await copyFile(source, destination);
            }
        }
    }
    copyDir(filePath, copyFilePath);
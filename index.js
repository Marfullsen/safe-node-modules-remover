const fs = require('fs');
const { exec } = require("child_process");

const empty_package_json_text = '{}';
const package_json = 'package.json';
const backup_package_json = 'package.json.bak';
const node_modules_folder = 'node_modules';

fs.renameSync(package_json, backup_package_json);

fs.writeFileSync(package_json, empty_package_json_text, 'utf8');

exec('npm install');

fs.unlinkSync(package_json);

fs.rmdirSync(node_modules_folder, {recursive: true});

fs.renameSync(backup_package_json, package_json);
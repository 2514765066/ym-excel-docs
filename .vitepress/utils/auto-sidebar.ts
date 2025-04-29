import { readdirSync, readFileSync } from "fs";
import { basename, extname, join } from "path";

//读取标题
const getTitle = (path: string) => {
  const res = readFileSync(path).toString();

  const match = res.match(/# (.*)/);

  if (match) {
    return match[1];
  }

  return "";
};

export const autoSideBar = (dirname: string) => {
  const path = join(__dirname, "../../", dirname);

  const files = readdirSync(path);

  return files.map(name => {
    const filename = basename(name, extname(name));
    const fullpath = join(path, name);

    return {
      text: getTitle(fullpath),
      link: `/${dirname}/${filename}`,
    };
  });
};

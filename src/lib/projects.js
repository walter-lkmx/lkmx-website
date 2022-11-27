import fs from 'fs'
import path from 'path'
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter'

const projectsDirectory = path.join(process.cwd(), 'src/projects');
const defaultLocale = 'es';

export function getSortedProjectsData(locale) {

  const fileNames = fs.readdirSync(projectsDirectory);

  const allProjectsData = fileNames.map(id => {
    const filename = locale === defaultLocale ? 'index.md' : `index.${locale}.md`;

    const fullPath = path.join(projectsDirectory, id, filename);
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
      id,
      ...matterResult.data
    }
  })
  .filter((post) => post);

  return allProjectsData.sort((a, b) => {
    return a.number > b.number ? 1 : -1;
  })
}

export async function getProjectData(id, locale) {

  const fullPath = path.join(
    projectsDirectory,
    id,
    locale === defaultLocale ? 'index.md' : `index.${locale}.md`,
  );

  const fileContents = fs.readFileSync(fullPath, 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...matterResult.data,
  };
}

export function getAllProjectIds(locales) {
  let paths = [];
  const projectIds = fs.readdirSync(projectsDirectory);

  for(let id of projectIds) {
    for(let locale of locales) {

      let fullpath = path.join(
        projectsDirectory,
        id,
        locale === defaultLocale ? 'index.md' : `index.${locale}.md`,
      );

      if (!fs.existsSync(fullpath)) {
        continue;
      }

      paths.push({ params: { id }, locale });

    }
  }

  return paths;
}
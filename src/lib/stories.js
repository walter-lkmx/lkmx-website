import fs from 'fs'
import path from 'path'
import { remark } from 'remark';
import html from 'remark-html';
import matter from 'gray-matter';


const storiesDirectory = path.join(process.cwd(), 'src/stories');
const defaultLocale = 'es';

export function getSortedStoriesData(locale) {
    const fileNames = fs.readdirSync(storiesDirectory);
    const allStoriesData = fileNames.map(id => {
        const filename = locale === defaultLocale ? 'index.md' : `index.${locale}.md`;
        
        const fullPath = path.join(storiesDirectory, id, filename)
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        const matterResult = matter(fileContents);

        return {
            id,
            ...matterResult.data
        }
    })
    .filter((post) => post);
    
    return allStoriesData.sort((a, b) => {
        return a.number > b.number ? 1 : -1;
    })
}

export async function getStoryData(id, locale) {
    
    const fullPath = path.join(
        storiesDirectory,
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

export function getAllStoriesIds(locales) {
    let paths = [];
    const storiesIds = fs.readdirSync(storiesDirectory);

    for(let id of storiesIds) {
        for(let locale of locales) {
            let fullpath = path.join(
                storiesDirectory,
                id,
                locale === defaultLocale ? 'index.md' : `index.${locale}.md`,
            );
            if(!fs.existsSync(fullpath)) {
                continue;
            }
            paths.push({ params: {id}, locale });
        }
    }

    return paths;
}

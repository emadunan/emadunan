import fs from 'fs'
import path from 'path'

export function getMarkdownPost(slug: string): string {
  const filePath = path.join(process.cwd(), 'src', 'components', 'blogs', 'content', `${slug}.md`)
  return fs.readFileSync(filePath, 'utf-8')
}

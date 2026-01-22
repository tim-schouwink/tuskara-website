import { buildConfig } from 'payload'
import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { fileURLToPath } from 'url'

import { Pages } from './collections/Pages'
import { Posts } from './collections/Posts'
import { Media } from './collections/Media'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: 'users',
  },
  collections: [Pages, Posts, Media, {
    slug: 'users',
    auth: true,
    fields: [],
  }],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || 'your-secret-key-change-in-production',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: vercelPostgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || '',
    },
    push: true,
    migrationDir: path.resolve(dirname, '../migrations'),
  }),
})

import type { CollectionConfig } from 'payload'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
    livePreview: {
      url: ({ data }) => {
        const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'https://tuskara-website.vercel.app'
        // For home page, show root URL
        if (data?.slug === 'home') {
          return baseUrl
        }
        return `${baseUrl}/${data?.slug || ''}`
      },
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    // About Section
    {
      name: 'about',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'subtitle',
          type: 'textarea',
        },
        {
          name: 'backgroundImage',
          type: 'text',
          admin: {
            description: 'URL to background image',
          },
        },
      ],
    },
    // Hero Section
    {
      name: 'hero',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'images',
          type: 'array',
          fields: [
            {
              name: 'src',
              type: 'text',
              required: true,
              admin: {
                description: 'URL to image',
              },
            },
            {
              name: 'alt',
              type: 'text',
              required: true,
            },
          ],
        },
      ],
    },
    // Vision Section
    {
      name: 'vision',
      type: 'group',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'text',
          admin: {
            description: 'URL to image',
          },
        },
      ],
    },
    // Creator Section
    {
      name: 'creator',
      type: 'group',
      fields: [
        {
          name: 'name',
          type: 'text',
        },
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'bio',
          type: 'textarea',
        },
        {
          name: 'image',
          type: 'text',
          admin: {
            description: 'URL to image',
          },
        },
      ],
    },
  ],
}

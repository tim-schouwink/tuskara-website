import { getPayload } from 'payload'
import config from '@payload-config'

// Default content used as fallback
export const defaultHomeContent = {
  about: {
    title: "About Tuskara",
    subtitle: "Tuskara is a contemporary Dutch brand,\nborn and inspired by boldness. made for professionals",
    backgroundImage: "https://images.unsplash.com/photo-1728488448101-fb760f074304?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  hero: {
    title: "interior customization that speaks bold creativity",
    description: "A fusion of earth and cosmos, Tuskara symbolizes the meeting point between raw natural beauty and the infinite unknown. Born from African roots and shaped by a European lens, it stands for bold creativity, organic design, and the power of transformation through art.",
    images: [
      {
        src: "https://images.unsplash.com/photo-1684261983313-9998bd4f5e93?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Interior design showcase"
      },
      {
        src: "https://images.unsplash.com/photo-1621165109906-55f3020ec284?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Modern wallcovering"
      },
      {
        src: "https://images.unsplash.com/photo-1723894960978-3f1e1cead774?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Textured wall design"
      },
      {
        src: "https://images.unsplash.com/photo-1754288191704-aca975087f96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Feature interior design"
      },
      {
        src: "https://images.unsplash.com/photo-1754556227397-636ca957ea0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Contemporary design"
      },
      {
        src: "https://images.unsplash.com/photo-1564981598862-38f6980b4bd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Artistic wall texture"
      },
      {
        src: "https://images.unsplash.com/photo-1746173098201-d6bf92dfce54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        alt: "Design inspiration"
      }
    ]
  },
  vision: {
    label: "Tuskara's vision",
    title: "Rooted in Heritage. Built for the Future.",
    description: "Tuskara is more than a brand; it is a universe where art, identity, and imagination converge.\n\nWe create exclusive wallcoverings and rugs that do not merely fill a space, but transform it into another world, a world where dark tones, abstract energy, and cosmic inspiration merge with the rich, earthy power of our African roots. At Tuskara, we believe that walls and floors are not a backdrop, but the foundation of a story.\n\nOur designs are not decoration; they are dimensions.\nEvery pattern is a statement: bold, fearless, and unapologetically unique. Whether it's raw, powerful textures with character, elegant lines that create tension, or abstract forms that play with light and shadow—Tuskara creates spaces you feel before you see them.",
    image: "https://images.unsplash.com/photo-1680956987803-c0942e7b65c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  },
  creator: {
    name: "Dennis van Zanden",
    title: "About the creator",
    bio: "Dennis van Zanden has been in the wallpaper industry for over twenty years, blending his South African roots with Dutch heritage into a unique style. He's a big-picture thinker with a love for exploring uncharted territory, always finding fresh ways to push the limits of mixed media design.\n\nDennis's passion? Turning plain surfaces into striking pieces that catch the eye, using techniques that are both innovative and out of the ordinary. Known for his rebellious side, he's more than just a designer, he's a dreamer, pouring his love of nature, space and the universe in every piece he creates.\n\nFor him, real skill isn't just about mastering design but also about finding peace and joy in the process. His work is a true reflection of that belief, combining creative freedom with a deep, heartfelt connection to the world around him.",
    image: "https://images.unsplash.com/photo-1694458309314-b2abd0dab03c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
  }
};

export type HomeContent = typeof defaultHomeContent;

export async function getHomeContent(): Promise<HomeContent> {
  try {
    const payload = await getPayload({ config })

    const { docs } = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: 'home'
        }
      },
      limit: 1,
    })

    const page = docs[0]

    if (!page) {
      return defaultHomeContent
    }

    // Map Payload data to content structure
    return {
      about: {
        title: page.about?.title || defaultHomeContent.about.title,
        subtitle: page.about?.subtitle || defaultHomeContent.about.subtitle,
        backgroundImage: page.about?.backgroundImage || defaultHomeContent.about.backgroundImage,
      },
      hero: {
        title: page.hero?.title || defaultHomeContent.hero.title,
        description: page.hero?.description || defaultHomeContent.hero.description,
        images: page.hero?.images?.length
          ? page.hero.images.map((img: { src: string; alt: string }) => ({
              src: img.src,
              alt: img.alt,
            }))
          : defaultHomeContent.hero.images,
      },
      vision: {
        label: page.vision?.label || defaultHomeContent.vision.label,
        title: page.vision?.title || defaultHomeContent.vision.title,
        description: page.vision?.description || defaultHomeContent.vision.description,
        image: page.vision?.image || defaultHomeContent.vision.image,
      },
      creator: {
        name: page.creator?.name || defaultHomeContent.creator.name,
        title: page.creator?.title || defaultHomeContent.creator.title,
        bio: page.creator?.bio || defaultHomeContent.creator.bio,
        image: page.creator?.image || defaultHomeContent.creator.image,
      },
    }
  } catch (error) {
    console.error('Error fetching home content from Payload:', error)
    return defaultHomeContent
  }
}

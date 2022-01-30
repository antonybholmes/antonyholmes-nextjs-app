import MorePosts from '../components/post/more-posts'
import HeroPost from '../components/post/hero-post'
import { getAllPosts } from '../lib/api/post'
import IPost from '../types/post'
import { getAuthorMap } from '../lib/api/author'
import ArticleContainer from '../components/article-container'
import Layout from '../components/layouts/layout'
import HCenterCol from '../components/h-center-col'
import HCenterRow from '../components/h-center-row'
import BluePillButtonLink from '../components/link/blue-pill-button-link'
import SecondaryPillButtonLink from '../components/link/secondary-pill-button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faLink } from '@fortawesome/free-solid-svg-icons'
import BaseRow from '../components/base-row'
import ArticleLayout from '../components/layouts/article-layout'
import IPostAuthor from '../types/post-author'
import AvatarImage from '../components/avatar-image'
import ToBlueLink from '../components/link/to-blue-link'
import { EMAIL } from '../lib/constants'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

interface IProps {
  author: IPostAuthor
  posts: IPost[]
}

const Page = ({ author, posts }: IProps) => {
  const heroPost = posts[0]
  const morePosts = posts.slice(1)
  return (
    <ArticleLayout title="Home">
      <BaseRow>
        <div className="hidden lg:block lg:w-1/5">
          <AvatarImage author={author} />

          <p className="mt-8">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <ToBlueLink href={`mailto:${EMAIL}`}>{EMAIL}</ToBlueLink>
          </p>
          <p className="mt-2">
            <FontAwesomeIcon icon={faLink} className="mr-2" />
            <ToBlueLink href="https://github.com/antonybholmes">
              github.com/antonybholmes
            </ToBlueLink>
          </p>
        </div>
        <div className="w-full lg:w-4/5 lg:pl-16">
          <section className="py-16 bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 text-white">
            <HCenterCol className=" leading-relaxed text-center">
              <h1 className="text-6xl inline-block font-bold">Hi There.</h1>

              <p className="mt-8 text-xl">
                Hello, I&apos;m Antony Holmes. Welcome to my personal web site.
              </p>

              <p className="mt-8 text-xl">
                I&apos;m a full stack developer with experience using multiple
                technologies, which you can read.
              </p>

              <p className="mt-8 text-xl">
                I have an aptly named page where you can view all of the
                scientific literature I have written, primarily focused on
                cancer genetics.
              </p>
            </HCenterCol>

            <HCenterRow className="mt-8">
              <div className="grid grid-cols-2 gap-4">
                <BluePillButtonLink
                  href={'/blog/page/1'}
                  className="px-6 py-3 font-semibold"
                >
                  Resume
                </BluePillButtonLink>
                <SecondaryPillButtonLink
                  href={'/publications'}
                  className="px-6 py-3 font-semibold"
                >
                  Publications
                </SecondaryPillButtonLink>
              </div>
            </HCenterRow>
          </section>

          <section className="mt-32">
            <h1 className="text-center pt-4 pb-16 font-bold text-5xl text-blue-500">
              Latest Posts
            </h1>
            {heroPost && <HeroPost post={heroPost} />}
            {morePosts.length > 0 && <MorePosts posts={morePosts} />}

            <HCenterRow>
              <BluePillButtonLink href="/blog/page/1" className="px-4 py-2">
                Read More{' '}
                <FontAwesomeIcon icon={faChevronRight} className="ml-1" />
              </BluePillButtonLink>
            </HCenterRow>
          </section>
        </div>
      </BaseRow>
    </ArticleLayout>
  )
}

export default Page

export const getStaticProps = async () => {
  const authorMap = getAuthorMap(['id', 'name', 'title', 'picture'])

  // Get all the posts and add the authors in
  let posts = getAllPosts([
    'title',
    'description',
    'date',
    'slug',
    'author',
    'section',
    'tags',
    'coverImage',
    'excerpt',
  ])

  //await generateSiteMap(posts)
  //await generateRSS(posts)

  posts = posts.slice(0, 4).map(post => {
    return {
      ...post,
      authors: [authorMap[post.fields.author]],
    }
  })

  return {
    props: { posts: posts, author: authorMap['Antony Holmes'] },
  }
}

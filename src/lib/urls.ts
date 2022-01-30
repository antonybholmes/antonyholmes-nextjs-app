import { getUrlFriendlyTag } from './tags'

export const getPortfolioTagUrl = (tag: string) => {
  return `/portfolios/tags/${tag.toLowerCase().replace(' ', '-')}`
}

export const getAuthorUrl = (name: string) => {
  return `/blog/authors/${name.toLowerCase().replace(' ', '-')}`
}

export const getSectionUrl = (section: string) => {
  return `/blog/sections/${getUrlFriendlyTag(section)}/page/1`
}

export const getTagUrl = (tag: string) => {
  return `/blog/tags/${getUrlFriendlyTag(tag)}/page/1`
}

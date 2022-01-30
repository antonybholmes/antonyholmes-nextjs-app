import { useState } from 'react'
import HeaderLinks from './header-links'
import AltView from '../../alt-view'
import { useWindowResize } from 'beautiful-react-hooks'
import ArticleContainer from '../../article-container'
import VCenterRow from '../../v-center-row'
import BaseLink from '../../link/base-link'
import MenuOverlay from './menu-overlay'
import MenuOpenButton from './menu-button-open'
import Search from '../../search/search'
import cn from '../../../lib/class-names'
import { SITE_DOMAIN, SITE_NAME, SITE_URL } from '../../../lib/constants'

interface IProps {
  title: string
  page?: string
  className?: string
}

const Header = ({ title, page = '', className }: IProps) => {
  const [expanded, setExpanded] = useState(false)

  useWindowResize((e: any) => {
    setExpanded(false)
  })

  const _handleClick = () => {
    _toggleHeight()
  }

  const _toggleHeight = () => {
    setExpanded(!expanded)
  }

  return (
    <header className={cn('w-full', className)}>
      <AltView sizes={['lg']}>
        <VCenterRow className="justify-between p-2 pl-6">
          <BaseLink href="/">
            <h1 className="inline-block font-bold bg-gradient-to-r from-blue-700 to-teal-300 bg-clip-text text-transparent">
              {SITE_DOMAIN}
            </h1>
          </BaseLink>

          <MenuOpenButton isVisible={expanded} onClick={_handleClick} />
        </VCenterRow>

        {/* <div className="hidden lg:block"> */}
        <ArticleContainer>
          <VCenterRow className="py-6 justify-between">
            <VCenterRow>
              <BaseLink href="/">
                <h1 className="inline-block font-bold bg-gradient-to-r from-blue-700 to-teal-300 bg-clip-text text-transparent">
                  {SITE_DOMAIN}
                </h1>
              </BaseLink>

              <HeaderLinks title={title} page={page} />
            </VCenterRow>
            {/* <Search /> */}
          </VCenterRow>
        </ArticleContainer>
        {/* </div> */}
      </AltView>
      <MenuOverlay
        title={title}
        page={page}
        expanded={expanded}
        onClick={_handleClick}
      />

      {/* </ExpandDetails> */}

      {/* <AnimateHeight
        id="mobile-menu"
        duration={500}
        height={menuHeight} // see props documentation below
      >
        <HeaderLinks title={title} page={page} rowMode={false} />
      </AnimateHeight> */}

      {/* <div className={`p-4 ${isVisible ? "block" : "hidden "}`}>
        <HeaderLinks title={props.title} rowMode={false} />
      </div> */}
    </header>
  )
}

export default Header

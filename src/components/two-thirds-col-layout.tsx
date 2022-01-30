import { ReactElement } from 'react'
import BaseRow from './base-row'

interface IProps {
  children: ReactElement[]
}

const TwoThirdsColLayout = ({ children }: IProps) => (
  <BaseRow>
    <article className="w-full xl:w-2/3">{children[0]}</article>
    <div className="hidden xl:block w-1/3 pl-8">{children[1]}</div>
  </BaseRow>
)

export default TwoThirdsColLayout

import cn from '../lib/class-names'
import IPostAuthor from '../types/post-author'

interface IProps {
  author: IPostAuthor
  className?: string
}

const AvatarImage = ({ author, className }: IProps) => (
  <img
    src={author.fields.picture}
    className={cn('rounded-full overflow-hidden', className)}
    alt={author.fields.name}
  />
)

export default AvatarImage

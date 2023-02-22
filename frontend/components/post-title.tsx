import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h3 className="mb-12">
      {children}
    </h3>
  )
}

export default PostTitle

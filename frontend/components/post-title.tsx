import { ReactNode } from 'react'

type Props = {
  children?: ReactNode
}

const PostTitle = ({ children }: Props) => {
  return (
    <h2 className="mb-12">
      {children}
    </h2>
  )
}

export default PostTitle

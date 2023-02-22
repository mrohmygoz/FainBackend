type Props = {
    children?: React.ReactNode
}

const SectionTitle = ({ children }: Props) => {
    return (
        <>
            <h2>
                {children}
            </h2>

            <div className='mb-[4.5rem] w-24 h-2 bg-[#fdf2b1ce]' />
        </>
    )
}

export default SectionTitle
  
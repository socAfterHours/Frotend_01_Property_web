type buttonProps = {
  text: string;
  className?: string;
}

const ButtonPrimary = (props: buttonProps) => {
  const { text, className } = props;
  return (
    <button className={`btn btn-outline hover:font-bold px-10 ${className}`}>
        { text }
    </button>
  )
}

export default ButtonPrimary
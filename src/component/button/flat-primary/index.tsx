type FlatButtonProps = {
  title : string
}

export default function FlatButton(props: FlatButtonProps ) {
  const {title} = props
  return <><button className="flat-btn w-100">{title}</button> </>
}

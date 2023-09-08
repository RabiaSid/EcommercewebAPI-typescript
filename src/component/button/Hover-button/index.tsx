type HoverButtonProps = {
    title : string
  }
  
  export default function HoverButton(props: HoverButtonProps ) {
    const {title} = props
    return <><button className="Hover-button w-100" >{title}</button> </>
  }
  
import Button, { ButtonProps } from 'react-bootstrap/Button'

export const CustomButton = ({ children, variant, className, size = 'sm', ...rest }: ButtonProps) => {
  return (
    <Button variant={variant} className={'px-4 me-2 ' + (className ?? '')} size={size} {...rest}>
      {children}
    </Button>
  )
}

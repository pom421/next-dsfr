import * as React from "react"

type IconProps = "arrow-up-s-line" | "checkbox-circle-line" | "add-circle-line" | "lock-line" | "account-line"

type Props = {
  children?: JSX.Element | string
  variant?: "primary" | "secondary" | "tertiary" | "tertiary-no-outline"
  size?: "" | "sm" | "lg"
  leftIcon?: IconProps
  rightIcon?: IconProps
  onlyIcon?: IconProps
  title?: string
  onClick?: () => void
}

type LinkButtonProps = Props & { href?: string }

type ButtonProps = Props & { disabled: boolean }

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(function linkForwardRef(
  { children, href, variant = "primary", size = "", leftIcon, rightIcon, onlyIcon, title, onClick },
  ref,
) {
  const variantClass = variant ? `fr-btn--${variant}` : ""
  const sizeClass = size ? `fr-btn--${size}` : ""
  const leftIconClass = leftIcon ? `fr-btn--icon-left fr-icon-${leftIcon}` : ""
  const rightIconClass = rightIcon ? `fr-btn--icon-right fr-icon-${rightIcon}` : ""
  const onlyIconClass = onlyIcon ? `fr-icon-${onlyIcon}` : ""

  const classes = ["fr-btn", variantClass, sizeClass, leftIconClass, rightIconClass, onlyIconClass].join(" ")

  return (
    <a className={classes} {...(title && { title })} href={href} ref={ref}>
      {children}
    </a>
  )
})

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "",
  disabled = false,
  leftIcon,
  rightIcon,
  onlyIcon,
  title,
  onClick,
}) => {
  const variantClass = variant ? `fr-btn--${variant}` : ""
  const sizeClass = size ? `fr-btn--${size}` : ""
  const leftIconClass = leftIcon ? `fr-btn--icon-left fr-icon-${leftIcon}` : ""
  const rightIconClass = rightIcon ? `fr-btn--icon-right fr-icon-${rightIcon}` : ""
  const onlyIconClass = onlyIcon ? `fr-icon-${onlyIcon}` : ""

  const classes = ["fr-btn", variantClass, sizeClass, leftIconClass, rightIconClass, onlyIconClass].join(" ")

  return (
    <button className={classes} disabled={disabled} {...(title && { title })} onClick={onClick}>
      {children}
    </button>
  )
}

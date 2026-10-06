import type { ReactNode } from "react"
import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

export const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center whitespace-nowrap border-2 border-transparent bg-clip-padding transition-all outline-none select-none cursor-pointer focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 tracking-[.5px]",
  {
    variants: {
      variant: {
        default: "border-primary bg-primary text-white hover:bg-primary-dark hover:border-primary-dark fill-white",
        darker: "border-darker bg-darker text-white hover:bg-dark hover:text-white fill-white",
        light: "border-white bg-white text-primary hover:bg-darker hover:border-darker hover:text-white fill-primary",
        outline: "border-white text-white hover:bg-white/10 fill-white",
        "outline-dark": "border-dark/20 text-dark hover:bg-dark/10 fill-dark",
        link: "text-primary hover:text-darker",
      },
      size: {
        default: "h-10 lg:h-12 gap-4 rounded-lg px-6 text-sm font-medium [&>svg]:size-4",
        md: "h-9 lg:h-10 gap-4 rounded-lg px-6 text-sm font-medium [&>svg]:size-4",
        lg: "h-12 lg:h-14 gap-4 rounded-lg px-7 text-sm font-medium [&>svg]:size-5",
        xl: "h-12 lg:h-15 gap-4 rounded-lg px-7.5 text-base font-medium [&>svg]:size-6",
        '2xl': "h-12 lg:h-16 gap-4 rounded-lg px-7 text-base font-medium [&>svg]:size-6",
      },
      full: {
        true: "w-full",
      },
      block: {
        true: "w-full",
      },
      pill: {
        true: "rounded-full",
      },
      onlyIcon: {
        true: "px-0",
      },
      iconPosition: {
        left: "",
        right: "",
      }
    },
    compoundVariants: [
      {
        variant: "link",
        className: "px-0 h-auto! gap-2.5 font-medium text-base xl:text-lg"
      },
      {
        onlyIcon: false,
        iconPosition: 'right',
        size: "default",
        className: "has-[svg]:pe-2",
      },
      {
        onlyIcon: false,
        iconPosition: 'right',
        size: "md",
        className: "has-[svg]:pe-2",
      },
      {
        onlyIcon: false,
        iconPosition: 'right',
        size: "lg",
        className: "has-[svg]:pe-2",
      },
      {
        onlyIcon: false,
        iconPosition: 'right',
        size: "xl",
        className: "has-[svg]:pe-2.5",
      },
      {
        onlyIcon: false,
        iconPosition: 'right',
        size: "2xl",
        className: "has-[svg]:pe-2.5",
      },
      {
        onlyIcon: false,
        iconPosition: 'left',
        size: "default",
        className: "has-[svg]:ps-2",
      },
      {
        onlyIcon: false,
        iconPosition: 'left',
        size: "md",
        className: "has-[svg]:ps-2",
      },
      {
        onlyIcon: false,
        iconPosition: 'left',
        size: "lg",
        className: "has-[svg]:ps-2",
      },
      {
        onlyIcon: false,
        iconPosition: 'left',
        size: "xl",
        className: "has-[svg]:ps-2.5",
      },
      {
        onlyIcon: false,
        iconPosition: 'left',
        size: "2xl",
        className: "has-[svg]:ps-2.5",
      },
      {
        onlyIcon: true,
        size: "default",
        className: "size-11 [&>svg]:size-4",
      },
      {
        onlyIcon: true,
        size: "md",
        className: "size-10 [&>svg]:size-5",
      },
      {
        onlyIcon: true,
        size: "lg",
        className: "size-13 [&>svg]:size-5",
      },
      {
        onlyIcon: true,
        size: "xl",
        className: "size-15 [&>svg]:size-6",
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      iconPosition: 'right'
    },
  }
)

export const buttonIconVariant = cva(
  "inline-flex shrink-0 grow-0 rounded-full items-center justify-center border border-transparent transition-all",
  {
    variants: {
      variant: {
        default: "bg-darker fill-white group-hover/button:bg-darker",
        darker: "bg-primary fill-darker group-hover/button:bg-primary",
        light: "bg-primary fill-white group-hover/button:bg-primary",
        outline: "border-white/20 fill-white group-hover/button:bg-white/10",
        "outline-dark": "border-dark/20 fill-dark group-hover/button:bg-dark/10",
        link: "border-primary group-hover/button:border-darker fill-primary group-hover/button:fill-white group-hover/button:bg-darker"
      },
      size: {
        default: "size-8 [&>svg]:size-4",
        md: "size-7 [&>svg]:size-3.5",
        lg: "size-8 [&>svg]:size-4",
        xl: "size-9 [&>svg]:size-5",
        '2xl': "size-10 [&>svg]:size-6",
      },
      iconPosition: {
        left: "me-auto",
        right: "ms-auto",
      },
    },
    compoundVariants: [
      {
        variant: "link",
        className: "size-5 [&>svg]:size-3"
      },
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      iconPosition: "right",
    },
  }
)

export interface ButtonProps
  extends ButtonPrimitive.Props,
  VariantProps<typeof buttonVariants> {
  icon?: ReactNode
  iconPosition?: "left" | "right"
  onlyIcon?: boolean
  iconClassName?: string
}

export function Button({
  className,
  iconClassName,
  variant,
  size,
  full,
  block,
  pill,
  onlyIcon = false,
  icon,
  iconPosition = "right",
  nativeButton,
  children,
  ...props
}: ButtonProps) {
  const computedNativeButton = nativeButton ?? (props.render ? false : undefined);

  return (
    <ButtonPrimitive
      nativeButton={computedNativeButton}
      data-slot="button"
      className={cn(
        buttonVariants({
          variant,
          size,
          full,
          block,
          pill,
          onlyIcon,
          iconPosition,
          className,
        })
      )}
      {...props}
    >
      {!onlyIcon &&
        icon &&
        iconPosition === "left" && (
          <div className={cn(buttonIconVariant({ variant, size }), iconClassName)}>
            {icon}
          </div>
        )}

      {!onlyIcon && children}

      {!onlyIcon &&
        icon &&
        iconPosition === "right" && (
          <div className={cn(buttonIconVariant({ variant, size }), iconClassName)}>
            {icon}
          </div>
        )}

      {onlyIcon && icon && icon}
    </ButtonPrimitive>
  )
}
const Button = {
  baseStyle: {
    fontWeight: "500",
    borderRadius: "xl",
    lineHeight: 1,
    _hover: {
      textDecoration: "none",
    },
    _focus: {
      boxShadow: "none",
    },
  },
  defaultProps: {
    colorScheme: "white",
  },
  variants: {
    solid: {
      _hover: {
        transform: "scale(1.05)",
      },
      bg: "#29293a",
    },
  },
  sizes: {
    md: {
      fontSize: "14px",
      letterSpacing: ".5px",
    },
    sm: {
      fontWeight: "400",
      borderRadius: "sm",
      fontSize: "12px",
      px: "16px",
      letterSpacing: ".4px",
    },
    lg: {
      height: "52px",
    },
  },
};

export default Button;

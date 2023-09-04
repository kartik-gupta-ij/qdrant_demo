import { createStyles, rem } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
    wrapper: {
      position: "relative",
      paddingTop: rem(120),
      paddingBottom: rem(30),
  
      [theme.fn.smallerThan("sm")]: {
        paddingTop: rem(80),
        paddingBottom: rem(60),
      },
    },
  
    inner: {
      position: "relative",
      zIndex: 1,
    },
  
    title: {
      textAlign: "center",
      marginBottom: theme.spacing.xs,
      fontSize: "80px",
      lineHeight:"96px"
    },
  
    highlight: {
      color: theme.colors[theme.primaryColor][2],
    },
  
    description: {
      textAlign: "center",
      fontSize: "24px",
      lineHeight:"32px",
      [theme.fn.smallerThan("xs")]: {
        fontSize: theme.fontSizes.md,
      },
    },
    controls:{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginTop: theme.spacing.md,
      flexDirection: "column",
      width: "100%",
    },
    inputArea: {
      width: "100%",
      [theme.fn.smallerThan("xs")]: {
        height: rem(28),
        fontSize: theme.fontSizes.md,
      },
      "& .mantine-TextInput-rightSection	":{
        width: "auto",
      }
    },
    inputRightSection:{
      display: "flex",
      alignItems: "center",
      gap: theme.spacing.xs,
      paddingLeft: 10,
      paddingRight: 10,
      marginRight: 5,
      zIndex: 1,
      backgroundColor: "white",
    },
    control: {
      marginTop: theme.spacing.md,
      [theme.fn.smallerThan("xs")]: {
        height: rem(28),
        fontSize: theme.fontSizes.md,
      },
      transition: "transform .3s ease-in-out",
      "&:hover ": {
        transform: "scale(1.1)",
      },
    },
    viewResult:{
      paddingTop: theme.spacing.md,
    }
  }));

 
import { makeStyles } from '@mui/styles';


export const useStyles = makeStyles(theme => ({
    Tabssetting:{
        '& .MuiTabs-indicator':{
            // backgroundColor: "red !important",
            // background:"linear-gradient(#e66465, #9198e5)",
            backgroundColor: "#42378f",
        backgroundImage: "linear-gradient(315deg, #42378f 0%, #f53844 74%)",

            height:1,
        },
        '& .MuiTab-textColorSecondary':{
            [theme.breakpoints.down('sm')]: {
                padding: "4px 7px",
                maxWidth:"334px",
                minWidth:"46px",
                fontSize:"10px",
              },
        },
    },
   
    
}));
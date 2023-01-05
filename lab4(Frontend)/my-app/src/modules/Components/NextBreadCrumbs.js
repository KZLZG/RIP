import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {Box} from "@mui/material";
import {useLocation} from "react-router";

    function NextBreadCrumbs(){
        const location = useLocation();
        const pathnames = location.pathname.split('/').filter((x) => x);
        return (
        <Box m={2}>
            <Breadcrumbs aria-label="breadcrumb">
                <Link underline="hover" color="inherit" href="/">
                    Shop
                </Link>
                {pathnames.map((name, index) =>{
                    const routeTo = '/' + pathnames.slice(0, index+1).join("/");
                    let returnLink = <Link href={routeTo}>{name}</Link>;
                    return returnLink;
                    })}
            </Breadcrumbs>
        </Box>
    );
};

export default NextBreadCrumbs;

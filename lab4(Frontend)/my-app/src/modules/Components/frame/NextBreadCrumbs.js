import React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import {Box} from "@mui/material";
import {useLocation, useNavigate} from "react-router";

    function NextBreadCrumbs(){
        const location = useLocation();
        const navigate = useNavigate();
        const pathnames = location.pathname.split('/').filter((x) => x);
        return (
        <Box>
            <Breadcrumbs aria-label="breadcrumb">
                <Link onClick={() => navigate("/")}>
                    Shop
                </Link>
                {pathnames.map((name, index) =>{
                    const routeTo = '/' + pathnames.slice(0, index).join("/");
                    if(index == pathnames.length-1){
                        return <Typography key={routeTo}>{name}</Typography>
                    }
                    else{
                        let returnLink = <Link key={routeTo} onClick={() => navigate(routeTo)}>{name}</Link>;
                        return returnLink;
                    }
                    })}
            </Breadcrumbs>
        </Box>
    );
};

export default NextBreadCrumbs;

import { Button, MenuItem, Paper, Skeleton, TextField, Typography } from "@mui/material";
import React, { useState } from "react";



const Calcule = () => {

    const [current, setCurrent] = useState(0);
    const [stage,setStage] = useState('calcule');
    const [level, setLevel] = useState(1);


    const calcules = [

        {
            level:1,
            calcule:"3 x 10",
            result: "30"   
        },
        {
            level:1,
            calcule:"4 x 10",
            result: "40"   
        },
        {
            level:1,
            calcule:"5 x 10",
            result: "50"   
        },
        {
            level:1,
            calcule:"6 x 10",
            result: "60"   
        },
        {
            level:2,
            calcule:"23 x 10",
            result: "230"   
        },
        {
            level:2,
            calcule:"24 x 10",
            result: "240"   
        },
        {
            level:2,
            calcule:"25 x 10",
            result: "250"   
        },
        {
            level:2,
            calcule:"26 x 10",
            result: "260"   
        },
    ];

    const levels = [
        {
            value:1,
            name:'Level 1'
        },
        {
            value:2,
            name:'Level 2'
        }
    ];


    const handleChangeLevel = (event) => {
        setLevel(event.target.value);
    }

    const handleNextOperation = () => {

        if (stage==='calcule')
        {
            setStage('result');
        }

        if (stage==='result')
        {
            setStage('calcule');
            setCurrent(current < 3 ? current+1 : 0);
        }
    }

    console.log(level);
    return(
        <Paper style={{padding:'4em', height:'20em',display:'flex', flexDirection:'column'}}>
            
            <TextField 
                select
                onChange={handleChangeLevel}
                value={level}
            >
                {
                    levels?.map(l =>
                    <MenuItem key={l.value} value={l.value}>
                        {l.name}
                    </MenuItem>
                )}
            </TextField>



            <div style={{display:'flex'}}>
                <Typography variant="h1" color={'red'}>{calcules.filter(c => c.level === level)[current]?.calcule}</Typography>
                <div style={{flexGrow:1}}></div>
                {
                    stage === 'result' ?
                    <Typography variant="h1">{calcules.filter(c => c.level === level)[current]?.result}</Typography> :
                    <Skeleton width={'20em'}></Skeleton>
                }

            </div>

            <Button 
                variant="outlined"
                onClick={(event)=>handleNextOperation()}
            >NEXT OPERATION</Button>
            
        </Paper>
    )
}

export default Calcule;
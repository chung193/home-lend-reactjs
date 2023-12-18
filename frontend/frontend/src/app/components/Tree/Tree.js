import TreeNode from './TreeNode';
import * as React from 'react';
import Grid from '@mui/material/Grid';

export default function Tree({ treeData, permission }) {
    console.log("===", permission);
    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                </Grid>
                {typeof permission != 'undefined' ? permission.map((item) => (
                    <Grid style={{ backgroundColor: item.color, color:"white", textAlign: "center" }} item xs={2}><p>{item.label}</p></Grid>
                )) : ''}
            </Grid>
            <Grid container spacing={2}>
                    {treeData.map((node) => (
                        <TreeNode node={node} key={node.key} />
                    ))}
            </Grid>
        </>
    );
}
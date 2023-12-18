import * as React from 'react';
import Box from '@mui/material/Box';
import Tree from 'enl-components/Tree/Tree';

export default function Identity() {
  const perrmissionData = [
    {
      key: 0,
      label:"no login", 
      color:"#438DFE"
    },
    {
      key: 1,
      label:"operator",
      color:"#3178C6"
  }, 
  {
    key: 2,
    label:"tool master",
    color:"#B07219"
  }, 
    {
      key: 3,
      label:"admin",
      color:"#6866FB"
  }, 
  ];
  
  const treeData = [
    {
      key: "0",
      label: "Documents",
      children: [
        {
          key: "0-0",
          label: "Document 1-1",
          children: [
            {
              key: "0-1-1",
              label: "Document-0-1.doc",
            },
            {
              key: "0-1-2",
              label: "Document-0-2.doc",
            },
          ],
        },
      ],
    },
    {
      key: "1",
      label: "Desktop",
      children: [
        {
          key: "1-0",
          label: "document1.doc",
        },
        {
          key: "0-0",
          label: "documennt-2.doc",
        },
      ],
    },
    {
      key: "2",
      label: "Downloads",
      children: [],
    },
  ];
  
  return (
    <Box sx={{  overflowY: 'auto' }}>
      <Box sx={{ mb: 1 }}>
      <Tree treeData={treeData} permission={perrmissionData}/>
      </Box>
    </Box>
  );
}
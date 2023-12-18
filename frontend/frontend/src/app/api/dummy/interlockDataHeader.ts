export interface Header {
    description: string;
    source: string;
    unit: string;
    status: STATUS[];
  }
  
export interface STATUS {
    statusName: string;
    index: number;
  }  
  
const dataHeader: Header[] =[
    {
      description: "Vacuum Gauge",
      source:"INPUT",
      unit: "VG_LL",
      status: [
            {
              statusName: "VAC",
              index:1
            },
            {
              statusName: "ATM",
              index: 2
            }] 
    },
    {
      description: "Vacuum Gauge",
      source: "INPUT",
      unit: "VG_U",
        status: [
            {
              statusName: "VAC",
              index: 1
            },
            {
              statusName: "ATM",
                index: 2
            }]
    }];

  export default dataHeader;
  
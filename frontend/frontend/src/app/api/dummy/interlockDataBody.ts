  export interface Body {
    unit: string;
    operation: OPERATION[];
  }
  
  export  interface OPERATION {
    operationName: string;
    mode: mode[];
  }
  
  export interface mode {
    modeName: string;
    index: number;
    note: string;
    values: number[];
  }

 export const dataBody : Body[] = [
        {
          unit: 'SVAV_U',
          operation: [
            {
              operationName: "OPEN",
              mode: [
                {
                  modeName: "Remote",
                  index: 1,
                  note: "",
                  values: [
                    0,
                    3
                  ]
                },
                {
                    modeName: "Mainte/SU",
                    index: 2,
                  note: "",
                  values: [
                    3
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 3,
                  note: "",
                  values: [
                    2,
                    3
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 4,
                  note: "",
                  values: [
                    0,
                    1,
                    3
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 5,
                  note: "",
                  values: [
                    0,
                    2,
                    3
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 6,
                  note: "",
                  values: [
                    2,
                    3
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 7,
                  note: "",
                  values: [
                    3
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 8,
                  note: "",
                  values: [
                    1,
                    3
                  ]
                }
              ]
            },
            {
              operationName: "CLOSE",
              mode: [
                {
                  modeName: "Remote",
                  index: 9,
                  note: "No Interlock",
                  values: [
                    3
                  ]
                },
                {
                  modeName: "Mainte",
                  index: 10,
                  note: "No Interlock",
                  values: [
                    2
                  ]
                },
                {
                  modeName: "SU",
                  index: 11,
                  note: "No Interlock",
                  values: [
                    1
                  ]
                }
              ]
            }
          ]
        },
        {
          unit: "SVAV_L",
          operation: [
            {
              operationName: "OPEN",
              mode: [
                {
                  modeName: "Remote",
                  index: 12,
                  note: "",
                  values: [
                    0,
                    1,
                    2,
                    3
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 13,
                  note: "",
                  values: [
                    0
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 14,
                  note: "",
                  values: [
                    2,
                    3
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 15,
                  note: "",
                  values: [
                    1,
                    2
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 16,
                  note: "",
                  values: [
                    1,
                    3
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 17,
                  note: "",
                  values: [
                    1,
                    2,
                    3
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 18,
                  note: "",
                  values: [
                    2,
                    3
                  ]
                },
                {
                  modeName: "Mainte/SU",
                  index: 19,
                  note: "",
                  values: [
                    3
                  ]
                }
              ]
            },
            {
              operationName: "CLOSE",
              mode: [
                {
                  modeName: "Remote",
                  index: 20,
                  note: "",
                  values: [
                    1
                  ]
                },
                {
                  modeName: "Mainte",
                  index: 21,
                  note: "",
                  values: [
                    1,
                    2
                  ]
                },
                {
                  modeName: "SU",
                  index: 22,
                  note: "",
                  values: [
                    1,
                    2,
                    3
                  ]
                }
              ]
            }
          ]
        },
        {
          unit: "SV1_U",
          operation: [
            {
              operationName: "OPEN",
              mode: [
                {
                  modeName: "Remote",
                  index: 23,
                  note: "",
                  values: [
                    0,
                    2
                  ]
                },
                {
                  modeName: "Mainte",
                  index: 24,
                  note: "",
                  values: [
                    1,
                    3
                  ]
                },
                {
                  modeName: "Mainte",
                  index: 25,
                  note: "",
                  values: [
                    2,
                    3
                  ]
                },
                {
                  modeName: "SU",
                  index: 26,
                  note: "No Interlock",
                  values: [
                    1,
                    2,
                    3
                  ]
                }
              ]
            },
            {
              operationName: "CLOSE",
              mode: [
                {
                  modeName: "Remote",
                  index: 27,
                  note: "No Interlock",
                  values: [
                    0,
                    1,
                    2,
                    3
                  ]
                },
                {
                  modeName: "Mainte",
                  index: 28,
                  note: "No Interlock",
                  values: [
                    3
                  ]
                },
                {
                  modeName: "SU",
                  index: 29,
                  note: "No Interlock",
                  values: [
                    2
                  ]
                }
              ]
            }
          ]
        }
 ];

  export default dataBody;
  
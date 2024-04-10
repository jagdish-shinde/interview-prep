const rate = 567.80;
function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return `₹ ${x1 + x2}`;
  }
  
const totalNum = 2986792;
var total = addCommas(totalNum);
console.log(total);


const tabularData = [
    {
        Package:"Civil 1",
        Rate: rate,
        Total: total,
        activityArr:[
            {
                Activity: "Acitivity 1",
                Rate: rate,
                Total: total,
                workItemArr:[
                    {
                        WorkItem: 'Work item 1',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 2',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 3',
                        Total: total
                    },
                ]
            },
            {
                Activity: "Acitivity 2",
                Rate: rate,
                Total: total,
                workItemArr:[
                    {
                        WorkItem: 'Work item 1',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 2',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 3',
                        Total: total
                    },
                ]
            },
            {
                Activity: "Acitivity 3",
                Rate: rate,
                Total: total,
                workItemArr:[
                    {
                        WorkItem: 'Work item 1',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 2',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 3',
                        Total: total
                    },
                ]
            }
        ]

    },
    {
        Package:"Civil 2",
        Rate: rate,
        Total: total,
        activityArr:[
            {
                Activity: "Acitivity 1",
                Rate: rate,
                Total: total,
                workItemArr:[
                    {
                        WorkItem: 'Work item 1',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 2',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 3',
                        Total: total
                    },
                ]
            },
            {
                Activity: "Acitivity 2",
                Rate: rate,
                Total: total,
                workItemArr:[
                    {
                        WorkItem: 'Work item 1',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 2',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 3',
                        Total: total
                    },
                ]
            },
            {
                Activity: "Acitivity 3",
                Rate: rate,
                Total: total,
                workItemArr:[
                    {
                        WorkItem: 'Work item 1',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 2',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 3',
                        Total: total
                    },
                ]
            }
        ]

    },
    {
        Package:"Civil 3",
        Rate: rate,
        Total: total,
        activityArr:[
            {
                Activity: "Acitivity 1",
                Rate: rate,
                Total: total,
                workItemArr:[
                    {
                        WorkItem: 'Work item 1',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 2',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 3',
                        Total: total
                    },
                ]
            },
            {
                Activity: "Acitivity 2",
                Rate: rate,
                Total: total,
                workItemArr:[
                    {
                        WorkItem: 'Work item 1',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 2',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 3',
                        Total: total
                    },
                ]
            },
            {
                Activity: "Acitivity 3",
                Rate: rate,
                Total: total,
                workItemArr:[
                    {
                        WorkItem: 'Work item 1',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 2',
                        Total: total
                    },
                    {
                        WorkItem: 'Work item 3',
                        Total: total
                    },
                ]
            }
        ]

    },
]


export {tabularData};
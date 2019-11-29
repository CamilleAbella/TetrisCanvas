const FALLTIME = 700
const HIGHSCORES = {
    Patrick : 10000,
    Samantha : 5000,
    Julien : 2500,
    Bob : 1000
}
const BUTTONS = {
    start : '<button class="text" onClick="button_start()"> New Game </button>',
    scores : '<button class="text" onClick="button_scores()"> Highscores </button>',
    pause : '<button class="text" onClick="button_pause()"> Pause </button>',
    title : '<button class="text" onClick="button_title()"> Back </button>'
}
const TETROMINOS = [
    {
        name : 'I',
        color : "#31c7ef",
        path : [
            [[-1,1],[0,1],[1,1],[2,1]], 
            [[0,-2],[0,-1],[0,0],[0,1]]
        ]
    },
    {
        name : 'L',
        color : "#ef7921",
        path : [
            [[0,-1],[0,0],[0,1],[1,1]],
            [[0,0],[1,0],[2,0],[0,1]],
            [[0,-1],[1,-1],[1,0],[1,1]],
            [[1,0],[1,1],[0,1],[-1,1]]
        ]
    },
    {
        name : 'J',
        color : "#5a65ad",
        path : [
            [[0,-1],[0,0],[0,1],[-1,1]],
            [[-1,0],[-1,1],[0,1],[1,1]],
            [[-1,-1],[0,-1],[-1,0],[-1,1]],
            [[-1,0],[0,0],[1,0],[1,1]]
        ]
    },
    {
        name : 'S',
        color : "#42b642",
        path : [
            [[-1,-1],[-1,0],[0,0],[0,1]],
            [[0,0],[1,0],[0,1],[-1,1]]
        ]
    },
    {
        name : 'Z',
        color : "#ef2029",
        path : [
            [[0,-1],[0,0],[-1,0],[-1,1]],
            [[0,0],[-1,0],[0,1],[1,1]]
        ]
    },
    {
        name : 'O',
        color : "#f7d308",
        path : [
            [[0,0],[0,1],[1,0],[1,1]]
        ]
    },
    {
        name : 'T',
        color : "#ad4d9c",
        path : [
            [[-1,0],[0,0],[1,0],[0,1]],
            [[-1,0],[0,-1],[0,0],[0,1]],
            [[0,0],[-1,1],[0,1],[1,1]],
            [[0,-1],[0,0],[0,1],[1,0]]
        ]
    }
]
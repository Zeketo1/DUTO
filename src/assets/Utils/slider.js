import slide1 from "/slide1.png";
import slide2 from "/slide__2.png";
import slide3 from "/slide__3.png";
import slide3b from "/slide__3b.png";


export const slider = [
    {
    sliderHeader: "THINK DIFFERENT",
    quote:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,adipisci vel consequuntur ",
    image: [slide1],
    style: "max-h-[35rem] object-contain relative -top-16 z-[1]",
    initial: 590,
    end:0
    },
    
    {
    sliderHeader: "CONTEMPORARY DESIGN",
    quote:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,adipisci vel consequuntur ",
    image: [slide2],
    style: "w-98 max-h-[45rem] w-[45rem] object-contain relative top-20 z-[1]",
    initial: 700,
    end:0
    },

    {
    sliderHeader: "PREMIUM COMFORT",
    quote:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa,adipisci vel consequuntur",
    image: [slide3, slide3b],
    style: [
        "w-98 max-h-[50rem] object-contain relative -top-68 z-[1]",
        "relative -left-10 max-h-[20rem] object-contain z-[1]"
    ],
    initial: -630,
    end: -180
    },
];

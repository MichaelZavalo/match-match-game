import img1 from '../../img/1.jpg';
import img2 from '../../img/2.jpg';
import img3 from '../../img/3.jpg';
import img4 from '../../img/4.jpg';
import img5 from '../../img/5.jpg';
import img6 from '../../img/6.jpg';
import img7 from '../../img/7.jpg';
import img8 from '../../img/8.jpg';
import img9 from '../../img/9.jpg';
import img10 from '../../img/10.jpg';
import img11 from '../../img/11.jpg';
import img12 from '../../img/12.jpg';
import img13 from '../../img/13.jpg';
import img14 from '../../img/14.jpg';
import img15 from '../../img/15.jpg';
import img16 from '../../img/16.jpg';
import shirt1 from '../../img/first-shirt.jpg';
import shirt2 from '../../img/second-shirt.jpg';
import shirt3 from '../../img/third-shirt.jpg';

let mainData = {
    difficulty : {
        easy:16,
        medium: 36,
        hard: 64
    },
    arrOfСards : [
    {value:img1, key:Math.random().toString(15).substr(2,14)},
    {value:img2, key:Math.random().toString(15).substr(2,14)},
    {value:img3, key:Math.random().toString(15).substr(2,14)},
    {value:img4, key:Math.random().toString(15).substr(2,14)},
    {value:img5, key:Math.random().toString(15).substr(2,14)},
    {value:img6, key:Math.random().toString(15).substr(2,14)},
    {value:img7, key:Math.random().toString(15).substr(2,14)},
    {value:img8, key:Math.random().toString(15).substr(2,14)},
    {value:img9, key:Math.random().toString(15).substr(2,14)},
    {value:img10, key:Math.random().toString(15).substr(2,14)},
    {value:img11, key:Math.random().toString(15).substr(2,14)},
    {value:img12, key:Math.random().toString(15).substr(2,14)},
    {value:img13, key:Math.random().toString(15).substr(2,14)},
    {value:img14, key:Math.random().toString(15).substr(2,14)},
    {value:img15, key:Math.random().toString(15).substr(2,14)},
    {value:img16, key:Math.random().toString(15).substr(2,14)},
    ],
    shirts: {
        first: shirt1,
        second: shirt2,
        third: shirt3,
    }
}

export default mainData;

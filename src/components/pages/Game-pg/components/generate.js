import { shuffle } from 'lodash';

export default function generate ( arr, difficulty = 4){
                
        let numberOfFields = difficulty * difficulty;
        
        let arrOfValues = [];

        let j = 0;
        for(let i = 0; i < numberOfFields; i = i + 2) {
            let card = arr[j];
            arrOfValues.push(card,card);  
            if(j !== numberOfFields) {
                j ++;
            }
            
        };
        
        let arrOfValues1 = shuffle(arrOfValues);

        let field =[];
        let k = 0;
        for(let i = 0; i < difficulty; i++) {
            field[i] = [];
            for(let j = 0; j < difficulty; j++) {
                field[i][j] = {
                    value: arrOfValues1[k]
                }
                k++;
            }
        }
        console.log(field);
        return field;
}
